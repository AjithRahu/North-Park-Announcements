// CREATE GLOBAL VARIABLES 

function register_user() {
  var email = document.getElementById('txtEmail').value;
  var password = document.getElementById("txtPassword").value;

  var users = localStorage.getItem('Users');
  
  if (users == null) {
    users = [ ]; 
    var new_user = {"email": email, "password": password};
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
      var new_user = {"email": email, "password": password};
      users_json.push(new_user);
      
      localStorage.setItem("Users", JSON.stringify(users_json));
      alert("Registered!");
      found = false;
      window.location.href = "view.html";
  	}
  }
  	found = false;
}


function login() {
  
  var email = document.getElementById('txtEmail').value;
  var password = document.getElementById("txtPassword").value.toString();

  var users = localStorage.getItem('Users');
  if (users == null) {
    users = []; 
  }
  
  var users_json = JSON.parse(localStorage.getItem('Users'));
  for(var i = 0; i < users_json.length; i++){
  		if(email == users_json[i].email && password == users_json[i].password) {
  		  alert("Logged In");
  			window.location.href = "view.html";
  			i = users_json.length;
  			return;
  		}
  }
  alert("incorrect username or password");
}  







  
  
