var curr_name = "";
var curr_password = "";
var home_password = "";

// sets name to be inputted username
function setName(){
	curr_name = document.getElementById("user_name").value;
}
// sets password to be inputted password
function setPassword(){
	curr_password = document.getElementById("password").value;
}

// When login button is clicked
$("#loginbutton").on("click", function(){
    let username = $("#user_name").val();
    let password = $("#password").val()
    if (username !== "" && password !== "") {
        $.ajax({
            url: "http://127.0.0.1:5000/",
            type: "POST",
            data: JSON.stringify({"username" : username, "password" : password}),
            contentType: "application/JSON",
            success: function(response){
                window.location.href = "http://127.0.0.1:5000/" + response
            }, 
            error: function(status, error){
                alert(error)
            }
        });
    }
    else{

        alert('wrong username or pass')
    }
});

// Admin views and Functions
// Adding variable to determine what we are doing posting: user, class, grade, etc

// Admin creates new user
$("#admin_newuser").on("click", function(){
    console.log("clicked button")
    let username = $("#add_username").val();
    let name = $("#add_name").val();
    let password = $("#add_password").val();
    let acct_type = $("#add_type").val();
    console.log("Adding User")
    if (username !== "" && name !== "" && password !== "" && acct_type !== ""){
        $.ajax({
            url: "http://127.0.0.1:5000/admin",
            type: "POST",
            data: JSON.stringify({"username" : username, "name" : name, "password" : password, "type" : acct_type, "post" : "user"}),
            contentType: "application/JSON",
            success: function(response){
                alert("Successfully Added a new User!")
                window.location.href = "http://127.0.0.1:5000/admin"
            },
            error: function(status, error){
                alert(error)
            }
        });
    }
});

// Admin Creates new class
$("#admin_newclass").on("click", function(){
    let classname = $("#add_class_name").val();
    let time = $("#add_time").val();
    let capacity = $("#add_capacity").val();
    let curr_students = $("#add_current_students").val();
    let teacher = $("#add_teacher").val();
    if (classname !== "" && time !== "" && capacity !== "" && curr_students !== "" && teacher !== ""){
        $.ajax({
            url: "http://127.0.0.1:5000/admin",
            type: "POST",
            data: JSON.stringify({"classname" : classname, "time" : time, "capacity" : capacity, "enrolled" : curr_students, "teacher" : teacher, "post" : "class"}),
            contentType: "application/JSON",
            success: function(response){
                alert("Successfully Added the Class!")
                window.location.href = "http://127.0.0.1:5000/admin"
            },
            error: function(status, error){
                alert(error)
            }
        });
    }
});

//Admin Creates new enrollment
$("#admin_enroll").on("click", function(){
    let classname = $("#enroll_classname").val();
    let username = $("#enroll_username").val()
    let grade = $("#enroll_grade").val()
    if (classname !== "" && username !== "" && grade !== ""){
        $.ajax({
            url: "http://127.0.0.1:5000/admin",
            type: "POST",
            data: JSON.stringify({"classname" : classname, "username" : username, "grade" : grade, "post" : "enrollment"}),
            contentType: "application/JSON",
            success: function(response){
                alert("User has been Enrolled!")
                window.location.href = "http://127.0.0.1:5000/admin"
            },
            error: function(status, error){
                alert(error)
            }
        });
    }
});

//Admin Update a User func
$("#update_user").on("click", function(){
    let orig_username = $("#update_original_user").val()
    let new_username = $("#update_new_user").val()
    let new_name = $("#update_new_name").val()
    let new_password = $("#update_new_password").val()
    let new_acct = $("#update_new_type").val()
    console.log("Updating User Info")
    $.ajax({
        url: "http://127.0.0.1:5000/admin",
        type: "PUT",
        data: JSON.stringify({"original_name" : orig_username, "new_username" : new_username, "new_name" : new_name, "new_password" : new_password, "new_acct" : new_acct, "put" : "user"}),
        contentType: "application/JSON",
        success: function(response){
            alert("Edited User Successfully!")
            window.location.href = "http://127.0.0.1:5000/admin"
        },
        error: function(status, error){
            alert(error)
        }
        });
});

//Update a class func
$("#update_class").on("click", function(){
    let original_class = $("#original_className").val()
    let new_class = $("#new_className").val()
    let new_teacher = $("#new_teacher").val()
    let new_time = $("#new_time").val()
    let new_enrolled = $("#new_enrolled").val()
    let new_capacity = $("#new_capacity").val()
    $.ajax({
        url: "http://127.0.0.1:5000/admin",
        type: "PUT",
        data: JSON.stringify({"original_class" : original_class, "new_class" : new_class, "new_teacher" : new_teacher, "new_time" : new_time, "new_enrolled" : new_enrolled, "new_capacity" : new_capacity, "put" : "class"}),
        contentType: "application/JSON",
        success: function(response){
            alert("Successfully Edited Class!")
            window.location.href = "http://127.0.0.1:5000/admin"
        },
        error: function(status, error){
            alert(error)
        }
        });
});

//Update to users grade
$("#update_grade_button").on("click", function(){
    let name = $("#grade_name").val()
    let course = $("#grade_classname").val()
    let grade = $("#updated_grade").val()
    $.ajax({
        url: "http://127.0.0.1:5000/admin",
        type: "PUT",
        data: JSON.stringify({"name" : name, "course" : course, "grade" : grade, "put" : "grade"}),
        contentType: "application/JSON",
        success: function(response){
            alert("Successfully Edited Grade!")
            window.location.href = "http://127.0.0.1:5000/admin"
        },
        error: function(status, error){
            alert(error)
        }
    });
});

//Deletes User
$("#delete_user_button").on("click", function(){
    let name = $("#delete_user").val()
    $.ajax({
        url: "http://127.0.0.1:5000/admin",
        type: "DELETE",
        data: JSON.stringify({"name" : name,  "delete" : "user"}),
        contentType: "application/JSON",
        success: function(response){
            alert("Deleted the User!")
            window.location.href = "http://127.0.0.1:5000/admin"
        },
        error: function(status, error){
            alert(error)
        }
    });
});

//Deletes Class
$("#delete_class_button").on("click", function(){
    let course = $("#delete_class").val()
    $.ajax({
        url: "http://127.0.0.1:5000/admin",
        type: "DELETE",
        data: JSON.stringify({"class" : course,  "delete" : "class"}),
        contentType: "application/JSON",
        success: function(response){
            alert("Deleted the Class!")
            window.location.href = "http://127.0.0.1:5000/admin"
        },
        error: function(status, error){
            alert(error)
        }
    });
});

//Un-Enrolls Users from class
$("#unenroll_user").on("click", function(){
    let name = $("#delete_enroll_name").val()
    let course = $("#delete_enroll_class").val()
    $.ajax({
        url: "http://127.0.0.1:5000/admin",
        type: "DELETE",
        data: JSON.stringify({"class" : course,  "name" : name, "delete" : "unenroll"}),
        contentType: "application/JSON",
        success: function(response){
            alert("Unenrolled the User!")
            window.location.href = "http://127.0.0.1:5000/admin"
        },
        error: function(status, error){
            alert(error)
        }
    });
});

//Admin Logout
$("#logoutAdmin").on("click", function(){
    $.ajax({
        url: "http://127.0.0.1:5000/logout",
        type: "GET",
        success: function(response){
            window.location.href = "http://127.0.0.1:5000/" + response
        },
        error: function(status, error){
            alert(error)
        }
    });
});

//Functions for Student Views and CLasses

//Redirect to StudentEdit view
$("#s_edit_classes").on("click", function(){
	$.ajax({
		url: "http://127.0.0.1:5000/student",
		type: "GET",
		success: function(){
            window.location.href = "http://127.0.0.1:5000/student/courses"
        },
        error: function(status, error){
            alert(error)
        }
	})
});

//Adding courses in studentEdit.html
$("#s_add_classes").on("click", function(){
	const val = $("#adding_class").val()
	$.ajax({
		url: "http://127.0.0.1:5000/student/courses",
		type: "POST",
		data: JSON.stringify({"class_name": val}),
		contentType: "application/JSON",
		success: function(){
            window.location.href="http://127.0.0.1:5000/student/courses"
        },
        error: function(status, error){
            alert(error)
        }
	})
});

function student_class_drop(){
alert("Please Contact an Admin to drop the class!")
}

//Studentview Logout
$("#logoutStudentView").on("click", function(){
    $.ajax({
        url: "http://127.0.0.1:5000/logout",
        type: "GET",
        success: function(response){
            window.location.href = "http://127.0.0.1:5000/" + response
        },
        error: function(status, error){
            alert(error)
        }
    });
});


//Returning to Student View
$("#s_view_classes").on("click", function(){
	//console.log("returning to StudentView")
	$.ajax({
		url: "http://127.0.0.1:5000/student/courses",
		type: "GET",
		success: function(){
            window.location.href = "http://127.0.0.1:5000/student"
        },
        error: function(status, error){
            alert(error)
        }
	})
});

// Student edit Logout
$("#logoutStudentEdit").on("click", function(){
    $.ajax({
        url: "http://127.0.0.1:5000/logout",
        type: "GET",
        success: function(response){
            window.location.href = "http://127.0.0.1:5000/" + response
        },
        error: function(status, error){
            alert(error)
        }
    });
});

// teacher editing grades
$("#grade_change").on("click", function(){
    let grade = $("#edit_grade").val()
    let student = $("#student_name").val()
    let course_name = document.getElementById("course_name").innerHTML
    if(student !== "" && grade !== ""){
        $.ajax({
            url: "http://127.0.0.1:5000/teacher/" + course_name,
            type: "PUT",
            data: JSON.stringify({"name":student, "grade":grade}),
            contentType: "application/JSON",
            success: function(response){
                alert("Successfully changed student grade!")
                window.location.href = "http://127.0.0.1:5000/teacher/" + course_name
            },
            error: function(status, error){
                alert(error)
            }
        });
    }
});

// Teacher View Logout
$("#logoutTeacherView").on("click", function(){
    $.ajax({
        url: "http://127.0.0.1:5000/logout",
        type: "GET",
        success: function(response){
            window.location.href = "http://127.0.0.1:5000/" + response
        }, 
        error: function(status, error){
            alert(error)
        }
    });
});

// Teacher View - Detail logout button
$("#logoutTeacherDetails").on("click", function(){
    $.ajax({
        url: "http://127.0.0.1:5000/logout",
        type: "GET",
        success: function(response){
            window.location.href = "http://127.0.0.1:5000/" + response
        }, 
        error: function(status, error){
            alert(error)
        }
    });
});