         
// View Posts in View page
function viewPost() {
    
    // Get Div where posts will be stored
        document.getElementById("posted").innerHTML = null;
    
    // Get Posts from Local Storage         
        var posts = JSON.parse(localStorage.getItem("post"));
        

    // For every post, it will be ordered in this arrangement    
        for (var i = 0; i < posts.length; i++) {
         var postDetail = 
                    "<div class='announcement col-md-3' id='delete'> " +
                    "<h1>" + posts[i].club + "</h1>" +
                    "<p>Date: " + posts[i].date + "</p>" +
                    "<p>Time: " + posts[i].time + "</p>" +
                    "<p>Location: " + posts[i].location + "</p>" +
                    "<p>Description: " + posts[i].description + "</p>" +
                    "<img src='remove_icon.svg' class='remove' onclick='remove()'>" +
                    "</div>";
                    
                document.getElementById("posted").innerHTML = document.getElementById("posted").innerHTML + postDetail;

    }
      
                    
    }
        
     
       
    function remove(e) {

     var posts = JSON.parse(localStorage.getItem("post"));
    
    // if posts length is 0 that means there are no posts so an alert would occur    
   if (posts.length == 0) {
       alert("There is no annoucement to delete");
    
   }
    else { 
        // gets posts from storage
        var posts = JSON.parse(localStorage.getItem("post"));
        // delete that specific post
        posts.splice(e, 1);
        alert("The post has been deleted");
        // After deleting the first object in array it will be re c 00set in local storage
        localStorage.setItem("post", JSON.stringify(posts));
        location.reload();
        
    }
    
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
   var rid = (Math.random() + 1).toString(36).substr(2, 8);

   // if all the input boxes have a value, the function will continue. If all are nnot a alert will be displayed 
    
    if (club != "" && date != "" && time != "" && location != "" && description != "") {
       var post = {
                "club":club, 
                "date":date, 
                "time":time, 
                "location":location, 
                "description":description,
                "rid": rid
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


