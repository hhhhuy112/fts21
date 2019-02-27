class CoursesController < ApplicationController
  before_action :logged_in_supervisor
  before_action :load_course, except: %i(index new create)
  before_action :users_have_course_active, only: :start

  def index
    @courses = Course.newest.paginate page: params[:page],
      per_page: Settings.pagination.per_page
  end

  def show
    @trainees = @course.trainees.paginate page: params[:page],
      per_page: Settings.pagination.per_page
  end

  def new
    @course = Course.new
    @subjects = Subject.alphabet
    @users = User.alphabet
  end

  def create
    @course = Course.new course_params
    if @course.save
      flash[:success] = t("courses.success")
      redirect_to course_path @course
    else
      flash.now[:danger] = t("courses.fail")
      render :new
    end
  end

  def edit
    @subjects = Subject.alphabet
    @users = User.alphabet
  end

  def update
    if @course.update_attributes course_params
      flash[:success] = t("courses.success")
      redirect_to course_path @course
    else
      flash.now[:danger] = t("courses.fail")
      render :edit
    end
  end

  def destroy; end

  def start
    if @course.status
      flash[:danger] = t("courses.course_active")
    elsif @course.trainees.none?
      flash[:danger] = t("courses.no_trainee")
    elsif @course.course_subjects.none?
      flash[:danger] = t("courses.no_subject")
    elsif (@list_ids = @course.trainee_ids & @user_ids).any?
      users = User.where(id: @list_ids).pluck(:name)
      flash[:warning] = t("courses.more_courses_active")
      flash[:danger] = users.to_s
    else
      ActiveRecord::Base.transaction do
        course_subject_ids = @course.course_subjects.pluck(:id).map{|id| {course_subject_id: id, status: :joined}}
        @course.update_attributes status: true
        @course.user_courses.update_all(status: :active)
        @course.trainees.each do |trainee|
          trainee.user_subjects.create(course_subject_ids)
        end
      end
      flash[:success] = t("courses.start_success")
    end
    redirect_to @course
  end

  private

  def course_params
    params.require(:course).permit :name, :description, :date_start, :date_end,
      :suppervisor_id, subject_ids: []
  end

  def load_course
    @course = Course.find_by id: params[:id]
    @course || render(file: "public/404.html", status: 404, layout: true)
  end

  def users_have_course_active
    @user_ids = UserCourse.active.pluck :user_id
  end
end