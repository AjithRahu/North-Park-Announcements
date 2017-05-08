function search() {
    var posts = JSON.parse(localStorage.getItem("post"));
    var searchvalue = document.getElementById("searchbar").value;
    
    
     for(var i = 0; i < posts.length; i++){
  		if(posts.search(searchvalue) == -1 ) {
            document.getElementById("search").innerHTML = "Cannot find Post"; 
  		} else {
  		    document.getElementById("search").innerHTML = i;
  		}
  }
    
    
    
}