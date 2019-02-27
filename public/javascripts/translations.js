I18n.translations || (I18n.translations = {});
I18n.translations["en"] = I18n.extend((I18n.translations["en"] || {}), {"activerecord":{"errors":{"messages":{"record_invalid":"Validation failed: %{errors}","restrict_dependent_destroy":{"has_many":"Cannot delete record because dependent %{record} exist","has_one":"Cannot delete record because a dependent %{record} exists"}}}},"courses":{"all":"All courses","back":"Back","btn_create":"Create course","btn_save":"Save course","content":"Content","course_active":"This course is active","date_end_earlier_start":"The end date cannot be earlier than the start date","edit":"Edit course","end_at":"End at: ","fail":"Fail!","more_courses_active":"A trainee cannot operate at the same time in 2 different courses","new":"New course","no_course":"There are no courses","no_subject":"The course has no subjects. Can't start!","no_trainee":"The course has no trainess. Can't start!","select_subject":"Select subject","select_suppervisor":"Select suppersivor","show":"Show course","start":"Start Course","start_at":"Start at: ","start_success":"The course is started","subjects":"Subjects","success":"Success!!","suppervisor":"Suppervisor: ","trainees":"Trainees"},"date":{"abbr_day_names":["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],"abbr_month_names":[null,"Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],"day_names":["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],"formats":{"default":"%Y-%m-%d","long":"%B %d, %Y","short":"%b %d"},"month_names":[null,"January","February","March","April","May","June","July","August","September","October","November","December"],"order":["year","month","day"]},"datetime":{"distance_in_words":{"about_x_hours":{"one":"about 1 hour","other":"about %{count} hours"},"about_x_months":{"one":"about 1 month","other":"about %{count} months"},"about_x_years":{"one":"about 1 year","other":"about %{count} years"},"almost_x_years":{"one":"almost 1 year","other":"almost %{count} years"},"half_a_minute":"half a minute","less_than_x_minutes":{"one":"less than a minute","other":"less than %{count} minutes"},"less_than_x_seconds":{"one":"less than 1 second","other":"less than %{count} seconds"},"over_x_years":{"one":"over 1 year","other":"over %{count} years"},"x_days":{"one":"1 day","other":"%{count} days"},"x_minutes":{"one":"1 minute","other":"%{count} minutes"},"x_months":{"one":"1 month","other":"%{count} months"},"x_seconds":{"one":"1 second","other":"%{count} seconds"}},"prompts":{"day":"Day","hour":"Hour","minute":"Minute","month":"Month","second":"Seconds","year":"Year"}},"disable_search_threshold":3,"errors":{"array?":"must be an array","attr?":"is missing","bool?":"must be boolean","connection_refused":"Oops! Failed to connect to the Web Console middleware.\nPlease make sure a rails development server is running.\n","date?":"must be a date","date_time?":"must be a date time","decimal?":"must be a decimal","empty?":"must be empty","eql?":"must be equal to %{left}","even?":"must be even","excluded_from?":{"arg":{"default":"must not be one of: %{list}","range":"must not be one of: %{list_left} - %{list_right}"}},"excludes?":"must not include %{value}","exclusion?":"must not be one of: %{list}","false?":"must be false","filled?":"must be filled","float?":"must be a float","format":"%{attribute} %{message}","format?":"is in invalid format","gt?":"must be greater than %{num}","gteq?":"must be greater than or equal to %{num}","hash?":"must be a hash","included_in?":{"arg":{"default":"must be one of: %{list}","range":"must be one of: %{list_left} - %{list_right}"}},"includes?":"must include %{value}","inclusion?":"must be one of: %{list}","int?":"must be an integer","key?":"is missing","lt?":"must be less than %{num}","lteq?":"must be less than or equal to %{num}","max_size?":"size cannot be greater than %{num}","messages":{"accepted":"must be accepted","blank":"can't be blank","confirmation":"doesn't match %{attribute}","empty":"can't be empty","equal_to":"must be equal to %{count}","even":"must be even","exclusion":"is reserved","greater_than":"must be greater than %{count}","greater_than_or_equal_to":"must be greater than or equal to %{count}","inclusion":"is not included in the list","invalid":"is invalid","less_than":"must be less than %{count}","less_than_or_equal_to":"must be less than or equal to %{count}","model_invalid":"Validation failed: %{errors}","not_a_number":"is not a number","not_an_integer":"must be an integer","odd":"must be odd","other_than":"must be other than %{count}","present":"must be blank","required":"must exist","taken":"has already been taken","too_long":{"one":"is too long (maximum is 1 character)","other":"is too long (maximum is %{count} characters)"},"too_short":{"one":"is too short (minimum is 1 character)","other":"is too short (minimum is %{count} characters)"},"wrong_length":{"one":"is the wrong length (should be 1 character)","other":"is the wrong length (should be %{count} characters)"}},"min_size?":"size cannot be less than %{num}","none?":"cannot be defined","not_eql?":"must not be equal to %{left}","number?":"must be a number","odd?":"must be odd","or":"or","size?":{"arg":{"default":"size must be %{size}","range":"size must be within %{size_left} - %{size_right}"},"value":{"string":{"arg":{"default":"length must be %{size}","range":"length must be within %{size_left} - %{size_right}"}}}},"str?":"must be a string","time?":"must be a time","true?":"must be true","type?":"must be %{type}","unacceptable_request":"A supported version is expected in the Accept header.\n","unavailable_session":"Session %{id} is no longer available in memory.\n\nIf you happen to run on a multi-process server (like Unicorn or Puma) the process\nthis request hit doesn't store %{id} in memory. Consider turning the number of\nprocesses/workers to one (1) or using a different server in development.\n"},"helpers":{"select":{"prompt":"Please select"},"submit":{"create":"Create %{model}","submit":"Save %{model}","update":"Update %{model}"}},"layouts":{"application":{"fts_title":"FTS","time_default":"%d/%m/%Y"},"footer":{"author":" Huu Hung ","copyright":"Copyright © 2019","email":"Email: huuhung1996@gmail.com","f_by":"By","title_about":"About","title_contact":"Contact","url_author":"http://fb.com/huuhunghienhoa"},"header":{"nav_account":"Account","nav_help":"Help","nav_home":"Home","nav_login":"Login","nav_logout":"Logout","nav_profile":"Profile","nav_setting":"Settings","nav_users":"Users","search":"Search..."}},"not_found":"Not found","number":{"currency":{"format":{"delimiter":",","format":"%u%n","precision":2,"separator":".","significant":false,"strip_insignificant_zeros":false,"unit":"$"}},"format":{"delimiter":",","precision":3,"separator":".","significant":false,"strip_insignificant_zeros":false},"human":{"decimal_units":{"format":"%n %u","units":{"billion":"Billion","million":"Million","quadrillion":"Quadrillion","thousand":"Thousand","trillion":"Trillion","unit":""}},"format":{"delimiter":"","precision":3,"significant":true,"strip_insignificant_zeros":true},"storage_units":{"format":"%n %u","units":{"byte":{"one":"Byte","other":"Bytes"},"eb":"EB","gb":"GB","kb":"KB","mb":"MB","pb":"PB","tb":"TB"}}},"percentage":{"format":{"delimiter":"","format":"%n%"}},"precision":{"format":{"delimiter":""}}},"password_resets":{"check_expiration":{"expired_password":"Password reset has expired."},"create":{"not_found_email":"Email address not found","sent_email_reset":"Email sent with password reset instructions"},"edit":{"confirm":"Confirmation","title":"Reset password","update_password":"Update password"},"new":{"submit":"Submit","title":"Forgot password"},"update":{"empty_password":"can't be empty","reset_password":"Password has been reset"}},"public":{"404":{"content1":"The page you were looking for doesn't exist.","content2":"You may have mistyped the address or the page may have moved.","content3":"If you are the application owner check the logs for more information.","title":"The page you were looking for doesn't exist (404)"},"422":{"content1":"The change you wanted was rejected.","content2":"Maybe you tried to change something you didn't have access to.","content3":"If you are the application owner check the logs for more information.","title":"The change you wanted was rejected (422)"},"500":{"content1":"We're sorry, but something went wrong.","content2":"If you are the application owner check the logs for more information.","title":"We're sorry, but something went wrong (500)"}},"sessions":{"create":{"account_not_activated":"Account not activated. Check your email for the activation link.","login_error":"Invalid email/password combination"},"logged":"You are logged in","new":{"login":"Log in","new_user":"New user?","remember_me":"Remember me on this computer","sign_up":"Sign up now!","type_email":"Type email","type_password":"Type password"},"not_access":"You do not have access"},"shared":{"error_messages":{"error":"error","form_error":"The form contains"},"sidebar":{"all_courses":"All courses","all_subjects":"All subjects","courses":"Courses","new_course":"Create course","new_subject":"New subject"}},"static_pages":{"about":{"title":"About"},"contact":{"body":"Contact the Ruby on Rails Tutorial about the sample app at the","title":"Contact","title_contact":"contact page"},"help":{"title":"Help"},"home":{"title":"Home"}},"support":{"array":{"last_word_connector":", and ","two_words_connector":" and ","words_connector":", "}},"time":{"am":"am","formats":{"default":"%d/%m/%Y","long":"%B %d, %Y %H:%M","own":"%H:%M:%S, %d %B","short":"%d %b %H:%M"},"pm":"pm"},"users":{"correct_user":{"mess_permission":"You do not have permission to edit other people's information"},"create":{"check_email":"Please check your email to activate your account."},"destroy":{"mess_fail":"Deleting user failed","mess_success":"User deleted"},"edit":{"btn_save":"Save changes","change":"Change","h1":"Update your profile","title":"Edit user"},"index":{"all_users":"All user"},"logged_in_user":{"mess_error":"Please log in."},"new":{"create_account":"Create my account","p_content":"This will be a signup page for new users.","pass_confirm":"Confirmation","sign_up":"Sign up"},"update":{"mess_fail":"Updating information failed","mess_success":"Profile updated"},"user":{"delete":"delete","mess_confirm":"You sure?"}},"will_paginate":{"next_label":"\u0026#8594;","page_entries_info":{"multi_page":"Displaying %{model} %{from} - %{to} of %{count} in total","multi_page_html":"Displaying %{model} \u003cb\u003e%{from}\u0026nbsp;-\u0026nbsp;%{to}\u003c/b\u003e of \u003cb\u003e%{count}\u003c/b\u003e in total","single_page":{"one":"Displaying 1 %{model}","other":"Displaying all %{count} %{model}","zero":"No %{model} found"},"single_page_html":{"one":"Displaying \u003cb\u003e1\u003c/b\u003e %{model}","other":"Displaying \u003cb\u003eall\u0026nbsp;%{count}\u003c/b\u003e %{model}","zero":"No %{model} found"}},"page_gap":"\u0026hellip;","previous_label":"\u0026#8592;"}});