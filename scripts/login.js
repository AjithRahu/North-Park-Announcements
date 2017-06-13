// CREATE GLOBAL VARIABLES 
function register_user() {
    var email = document.getElementById('txtEmail').value;
    var password = document.getElementById("txtPassword").value;
    
    if(email.length < 4 | password.length < 4) {
      alert("Please have 4 or more characters for username and password");
      return
    }
    
    if (document.getElementById("teacher").checked && document.getElementById("student").checked) {
      alert("Choose one b");
      }  else {
        if (document.getElementById("teacher").checked) {
         teacher();
        } else {
          if (document.getElementById("student").checked) {
            student();
          } 
        } 
    } 
}



function student() {
  var email = document.getElementById('txtEmail').value;
  var password = document.getElementById("txtPassword").value;
  var name = document.getElementById("txtName");

    // Student Regostration 
    if (document.getElementById("student").checked) {
        var students = localStorage.getItem('students');
        if (students == null) {
          students = [ ]; 
          var new_student = {"email": email, "password": password};
          students.push(new_student);
          localStorage.setItem('students', JSON.stringify(students));
          sessionStorage.setItem('lastuser', JSON.stringify(email));
          alert("Registered!");
          window.location.href = "clubs.html"
        }
        else {
          var users_students = JSON.parse(students);
          var found = false;
          for(var i = 0; i < users_students.length; i++) {
        		if(email == users_students[i].email) {
        			found = true;
        		}
        	}
        	
        	if(found == true) {
        	  alert("Email/User Already Registered");
        	}
        	else {
        	  var users_students = JSON.parse(students);
            var new_student = {"email": email, "password": password};
            users_students.push(new_student);
            console.log("new user");
            sessionStorage.setItem('lastuser', JSON.stringify(email));
            localStorage.setItem("students", JSON.stringify(users_students));
            alert("Registered!");
            found = false;
            window.location.href = "sview.html";
        	}
        }
        	found = false;
    }
  
  }
  

function teacher() {
  var email = document.getElementById('txtEmail').value;
  var password = document.getElementById("txtPassword").value;
  var name = document.getElementById("txtName");

    // Teacher Regostration 
    if (document.getElementById("teacher").checked) {
        var teachers = localStorage.getItem('teachers');
        if (teachers == null) {
          teachers = [ ]; 
          var new_teacher = {"email": email, "password": password};
          teachers.push(new_teacher);
          sessionStorage.setItem('lastuser', JSON.stringify(email));
          localStorage.setItem('teachers', JSON.stringify(teachers));
          alert("Registered!");
          window.location.href = "view.html";
        }
        else {
          var users_teachers = JSON.parse(teachers);
          var found = false;
          for(var i = 0; i < users_teachers.length; i++) {
        		if(email == users_teachers[i].email) {
        			found = true;
        		}
        	}
        	
        	if(found == true) {
        	  alert("Email Already Registered");
        	}
        	else {
        	  var users_teachers = JSON.parse(teachers);
            var new_teacher = {"email": email, "password": password};
            users_teachers.push(new_teacher);
            sessionStorage.setItem('lastuser', JSON.stringify(email));
            localStorage.setItem("teachers", JSON.stringify(users_teachers));
            alert("Registered!");
            found = false;
            window.location.href = "view.html";
        	}
        }
        	found = false;
    }
}








function login() {
  
  var email = document.getElementById('txtEmail').value;
  var password = document.getElementById("txtPassword").value.toString();
  var wrong = false;

  // Teachers
  var teachers = localStorage.getItem('teachers');
  if (teachers == null) {
    teachers = []; 
  } else {
    var users_teachers = JSON.parse(localStorage.getItem('teachers'));
    for(var i = 0; i < users_teachers.length; i++){
    		if(email == users_teachers[i].email && password == users_teachers[i].password) {
    		  sessionStorage.setItem('lastuser', JSON.stringify(users_teachers[i].email));;
    		  alert("Welcome " + users_teachers[i].email);
    			window.location.href = "view.html";
    			return;
    		} else {
    		  wrong = true;
    		}
    }
  }
  
    // Students
  var students = localStorage.getItem('students');
  if (students == null) {
    students = []; 
  } else {
      var users_students = JSON.parse(localStorage.getItem('students'));
  for(var i = 0; i < users_students.length; i++){
  		if(email == users_students[i].email && password == users_students[i].password) {
  		  sessionStorage.setItem('lastuser', JSON.stringify(users_students[i].email));;
  		  alert("Welcome " + users_students[i].email);
  			window.location.href = "sview.html";
  			return;
  		} else {
  		  wrong = true;
  		}
  }
  }
  
  if(wrong = true) {
    alert("Wrong credentials");
  }


}  




  	
  	
  	
  	/* KEEEP THIS CODE FOR SAFETY 
  if (users == null) {
    users = [ ]; 
    var new_user = {"email": email, "password": password, "name": name};
    users.unshift(new_user);
    
    localStorage.setItem('Users', JSON.stringify(users));
  }
  else {
    var users_json = JSON.parse(users);
    var found = false;
    for(var i = 0; i < users_json.length; i++) {
  		if(email == users_json[i].email) {
  			found = true;
  		}
  	}
  	
  	if(found == true) {
  	  alert("Email Already Registered");
  	}
  	else {
      var new_user = {"email": email, "password": password, "name": name};
      users_json.push(new_user);
      
      localStorage.setItem("Users", JSON.stringify(users_json));
      alert("Registered!");
      found = false;
      window.location.href = "view.html";
  	}
  }
  	found = false;
  	
  	*/
  	
  	
  	
  	/*
  	var email = document.getElementById('txtEmail').value;
  var password = document.getElementById("txtPassword").value;
  var name = document.getElementById("txtName");
  
  if (document.getElementById("teacher").checked && document.getElementById("student").checked) {
    alert("Choose one b");
  } else {
    
    // Teacher Regostration 
    if (document.getElementById("teacher").checked) {
        var teachers = localStorage.getItem('Teachers');
        if (teachers == null) {
          teachers = [ ]; 
          var new_teacher = {"email": email, "password": password, "name": name};
          teachers.unshift(new_teacher);
          localStorage.setItem('teachers', JSON.stringify(teachers));
        }
        else {
          var users_teachers = JSON.parse(teachers);
          var found = false;
          for(var i = 0; i < users_teachers.length; i++) {
        		if(email == users_teachers[i].email) {
        			found = true;
        		}
        	}
        	
        	if(found == true) {
        	  alert("Email Already Registered");
        	}
        	else {
        	  var users_teachers = JSON.parse(teachers);
            var new_teacher = {"email": email, "password": password, "name": name};
            users_teachers.push(new_teacher);
            
            localStorage.setItem("teachers", JSON.stringify(users_teachers));
            alert("Registered!");
            found = false;
            window.location.href = "clubs.html";
        	}
        }
        	found = false;
    }
    
    // Student Regostration 
    if (document.getElementById("student").checked) {
        var students = localStorage.getItem('students');
        if (students == null) {
          students = [ ]; 
          var new_student = {"email": email, "password": password, "name": name};
          students.unshift(new_student);
          
          localStorage.setItem('students', JSON.stringify(students));
        }
        else {
          var users_students = JSON.parse(students);
          var found = false;
          for(var i = 0; i < users_students.length; i++) {
        		if(email == users_students[i].email) {
        			found = true;
        		}
        	}
        	
        	if(found == true) {
        	  alert("Email Already Registered");
        	}
        	else {
        	  var users_students = JSON.parse(students);
            var new_student = {"email": email, "password": password, "name": name};
            users_students.push(new_student);
            
            localStorage.setItem("students", JSON.stringify(users_students));
            alert("Registered!");
            found = false;
            window.location.href = "sview.html";
        	}
        }
        	found = false;
    }
  
  }
  
  */