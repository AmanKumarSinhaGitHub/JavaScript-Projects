let button = document.querySelector('.button');
let currentStatus = document.querySelector('#currentStatus');

let isFriend = false;

button.addEventListener("click", function(){
   
    if(isFriend){
        currentStatus.innerHTML = "You are Friends";
        button.innerHTML = "Remove"
        isFriend = !isFriend;
        
    }
    else{
        currentStatus.innerHTML = "Stranger";
        button.innerHTML = "Add Friend";
        isFriend = !isFriend;
        
    }
    
})