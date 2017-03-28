/*
      NORTH PARK ANNOUNCEMENTS 
            By: AJITH
            
*/            
function viewPost() {
    
        document.getElementById("posted").innerHTML = null;
            
        var posts = JSON.parse(localStorage.getItem("post"));
        
        // document.getElementById("posted").innerHTML = JSON.stringify(posts[0].date);
        
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



function remove() {
        
     var posts = JSON.parse(localStorage.getItem("post"));
      

      
      
  }

      
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
    
    
    var post = {
                "club":club, "date":date, "time":time, "location":location, "description":description
                };
    
    announcements.unshift(post);    
    
    localStorage.setItem("post", JSON.stringify(announcements));
    viewPost();
    
       //alert post successful
    alert ("Post Successful");
    
    }


