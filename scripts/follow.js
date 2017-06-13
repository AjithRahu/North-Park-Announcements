
function follow() {
  var user = JSON.parse(sessionStorage.getItem("lastuser"));
  var users_students = JSON.parse(localStorage.getItem("students"));

  
   var values = [];
  var cbs = document.forms['clubs'].elements['club'];
  for(var i=0,cbLen=cbs.length;i<cbLen;i++){
    if(cbs[i].checked){
      values.push(cbs[i].value);
    } 
  }

 for (var i = 0; i < users_students.length; i++){
      if(user == users_students[i].email){
          var objofuser = users_students[i];
         objofuser["clubs"] = values.join(', ');
        localStorage.setItem('students', JSON.stringify(users_students));
        alert("Clubs Updated");
        window.location.href = "sview.html";
        var html = null;
          
      }
  }
  
   for (var i = 0; i < users_students.length; i++){
      if(user == users_students[i].email){
        var clubs = users_students[i].clubs;
        sessionStorage.setItem('usersclubs', JSON.stringify(clubs)); 
      }
  }

  
  
}

function clubsuserfollow() {
  var user = JSON.parse(sessionStorage.getItem("lastuser"));
  var users_students = JSON.parse(localStorage.getItem("students"));
  
  for (var i = 0; i < users_students.length; i++){
    if(user == users_students[i].email){
      if(users_students[i].clubs == null) {
        alert("Not following any clubs yet");
      } else {
        alert("Clubs you follow: " + users_students[i].clubs);
      }
    }
  
  }
}




function addclub() {
  var user = JSON.parse(sessionStorage.getItem("lastuser"));
  var users_students = JSON.parse(localStorage.getItem("students"));
  var clubinput = document.getElementById("clubinput").value;

  
   for (var i = 0; i < users_students.length; i++){
      if(user == users_students[i].email){
          var objofuser = users_students[i];
         objofuser["clubs"] = clubinput;
        localStorage.setItem('students', JSON.stringify(users_students));
        alert("Clubs Updated");
        window.location.href = "clubs.html";
          
      }
  }

}

/*  // Get Div where posts will be stored
        document.getElementById("posted").innerHTML = null;
    
    // Get Posts from Local Storage         
        var posts = JSON.parse(localStorage.getItem("post"));
        

    // For every post, it will be ordered in this arrangement    
        for (var i = 0; i < posts.length; i++) {
         var postDetail = 
                    "<div class='announcement col-md-3 wow zoomIn' id='delete'> " +
                    "<h1>" + posts[i].club + "</h1>" +
                    "<p>Date: " + posts[i].date + "</p>" +
                    "<p>Time: " + posts[i].time + "</p>" +
                    "<p>Location: " + posts[i].location + "</p>" +
                    "<p>Description: " + posts[i].description + "</p>" +
                    "<p>Posted By: " + posts[i].user + "</p>" +
                    "<img src='remove_icon.svg' class='remove' onclick='remove(" + i + ")'>" +
                    "</div>";
                    
                document.getElementById("posted").innerHTML = document.getElementById("posted").innerHTML + postDetail;

    }
  
  

  
  function clubs(age) {
      return age >= 18;
  }

  document.getElementById("demo").innerHTML = posts.filter(clubs);
  
  */