function viewPost() {
    
        var posts = JSON.parse(localStorage.getItem("announcements"));
        
        document.getElementById("posted").innerHTML = posts;
}



//when click post
function create() {
    
    // Set Variables
       var club =  document.getElementById('club').value;
       var date = document.getElementById('date').value;
       var time =  document.getElementById('time').value;
       var location =  document.getElementById('location').value;
       var description =  document.getElementById('description').value;
    
     // get the array from local storage
    var announcements= JSON.parse(localStorage.getItem("announcements"));
    if(announcements == null){announcements = [ ];}
    
    
    var post = {
            "club":club, "date":date, "time":time, "location":location, "description":description
                };
                
    // adds new item to the array 
    announcements.push(post);        
    
    var stringAnnouncment = JSON.stringify(announcements);
    localStorage.setItem("announcements", stringAnnouncment);

    //alert to show its been saved
    alert ("Your information has been saved");
        
        
        viewPost();
    }

