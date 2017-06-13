
// View Posts in View page
function viewPost() {
    
    // Get Div where posts will be stored
        document.getElementById("posted").innerHTML = null;
    
    // Get Posts from Local Storage         
        var posts = JSON.parse(localStorage.getItem("post"));
        

    // For every post, it will be ordered in this arrangement    
        for (var i = 0; i < posts.length; i++) {
         var postDetail = 
                    "<div class='announcement col-md-4 col-sm-12 wow zoomIn' id='delete'> " +
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
      
                    
    }
    
    
// View Posts in View page
function sviewPost() {
    
    // Get Div where posts will be stored
        document.getElementById("posted").innerHTML = null;
    
    // Get Posts from Local Storage         
        var posts = JSON.parse(localStorage.getItem("post"));
        
    // Retrieve the last user signed in by using session storage    
      var user = JSON.parse(sessionStorage.getItem("lastuser"));
      // get the list of students in local storage
      var users_students = JSON.parse(localStorage.getItem("students"));
     
    //  For loop to find the users object in the array of student users  
      for (var i = 0; i < users_students.length; i++){
        if(user == users_students[i].email){
          var clubs = users_students[i].clubs;
        }
      
      }
      
    // check for the clubs the user follows and then filter the posts for the clubs the user follow    
        for (var i = 0; i < posts.length; i++){
            if(clubs.includes(posts[i].club)){
                 var postDetail = 
                    "<div class='announcement col-md-3 wow zoomIn' id='delete'> " +
                    "<h1>" + posts[i].club + "</h1>" +
                    "<p>Date: " + posts[i].date + "</p>" +
                    "<p>Time: " + posts[i].time + "</p>" +
                    "<p>Location: " + posts[i].location + "</p>" +
                    "<p>Description: " + posts[i].description + "</p>" +
                    "<p>Posted By: " + posts[i].user + "</p>" +
                    "</div>";
                    
                document.getElementById("posted").innerHTML = document.getElementById("posted").innerHTML + postDetail;
            }
  
      }   
 
      
                    
}
        
     
       
    function remove(e) {

    // retrieve all the posts
     var posts = JSON.parse(localStorage.getItem("post"));
    
    // gets posts from storage
    var posts = JSON.parse(localStorage.getItem("post"));
    
    // delete that specific post
    posts.splice(e, 1);
    alert("The post has been deleted");
    
    // After deleting the first object in array it will be reset in local storage
    localStorage.setItem("post", JSON.stringify(posts));
    location.reload();
    
    }
     

      
  




// Create Post
      
  function create() {
    
      
    //acquiring the array from local storage
    var announcements = JSON.parse(localStorage.getItem("post"));
    if(announcements == null){
        announcements= [ ];
        
    }
    
   // Set Variables
   var club =  document.getElementById('club').value;
   var date = document.getElementById('date').value;
   var time =  document.getElementById('time').value;
   var location =  document.getElementById('location').value;
   var description =  document.getElementById('description').value;
   var user = JSON.parse(sessionStorage.getItem("lastuser"));

   // if all the input boxes have a value, the function will continue. If all are nnot a alert will be displayed 
    
    if (club != "" && date != "" && time != "" && location != "" && description != "") {
       var post = {
                "club":club, 
                "date":date, 
                "time":time, 
                "location":location, 
                "description":description,
                "user": user
                };
    
    announcements.unshift(post);    
    
    localStorage.setItem("post", JSON.stringify(announcements));
     window.location.href = "view.html";
    
       //alert post successful
    alert ("Post Successful");
    } else {
        alert("Fill in all boxes");
    }    
    
    
    }
    
    
    

function tableview() {
        // Get Div where posts will be stored
        document.getElementById("posted").innerHTML = null;
    
    // Get Posts from Local Storage         
        var posts = JSON.parse(localStorage.getItem("post"));
        

    // For every post, it will be ordered in this arrangement into a table   
     var html = "<table border='1|1' id='table tablez'class='announcement table col-md-12 col-sm-12 wow zoomIn' id='delete'>" + "<th>Club</th>" + "<th>Date</th>" + "<th>Time</th>" + "<th>Location</th>" + "<th>Description</th>";
        for (var i = 0; i < posts.length; i++) {
            html+="<tr>";
            html+="<td>"+posts[i].club+"</td>";
            html+="<td>"+posts[i].date+"</td>";
            html+="<td>"+posts[i].time+"</td>";
            html+="<td>"+posts[i].location+"</td>";
            html+="<td>"+posts[i].description+"</td>";
            html+="<td>"+"<img src='remove_icon.svg' class='remove' onclick='remove(" + i + ")'>"+"</td>";
            html+="</tr>";
            
    
        }
        html+="</table>";
    document.getElementById("posted").innerHTML = html;
}


// View Posts in View page
function stableview() {
    
     var html = "<table border='1|1' id='table tablez'class='announcement table col-md-12 col-sm-12 wow zoomIn' id='delete'>" + "<th>Club</th>" + "<th>Date</th>" + "<th>Time</th>" + "<th>Location</th>" + "<th>Description</th>";
    
    // Get Div where posts will be stored
        document.getElementById("posted").innerHTML = null;
    
    // Get Posts from Local Storage         
        var posts = JSON.parse(localStorage.getItem("post"));
        
    // Retrieve the last user signed in by using session storage    
      var user = JSON.parse(sessionStorage.getItem("lastuser"));
      // get the list of students in local storage
      var users_students = JSON.parse(localStorage.getItem("students"));
     
    //  For loop to find the users object in the array of student users  
      for (var i = 0; i < users_students.length; i++){
        if(user == users_students[i].email){
          var clubs = users_students[i].clubs;
        }
      
      }
      
    // check for the clubs the user follows and then filter the posts for the clubs the user follow    
        for (var i = 0; i < posts.length; i++){
            if(clubs.includes(posts[i].club)) {
                    html+="<tr>";
                    html+="<td>"+posts[i].club+"</td>";
                    html+="<td>"+posts[i].date+"</td>";
                    html+="<td>"+posts[i].time+"</td>";
                    html+="<td>"+posts[i].location+"</td>";
                    html+="<td>"+posts[i].description+"</td>";;
                    html+="</tr>";
                    document.getElementById("posted").innerHTML = html;
          
    }
  
       
 
    }
}