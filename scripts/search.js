function search() {
    var posts = JSON.parse(localStorage.getItem("post"));
    var searchvalue = document.getElementById("searchbar").value;

    var select = posts.map(function(x) {
            if(searchvalue == x.club) {
                document.getElementById("posted").innerHTML= 
                    "<div class='announcement col-md-3 wow zoomIn' id='delete'> " +
                    "<h1>" + x.club + "</h1>" +
                    "<p>Date: " + x.date + "</p>" +
                    "<p>Time: " + x.time + "</p>" +
                    "<p>Location: " + x.location + "</p>" +
                    "<p>Description: " + x.description + "</p>" +
                    "<p>Posted By: " + x.user + "</p>" +
                    "</div>";
            }
        });
        
}