let button = document.querySelector('.button');
let currentStatus = document.querySelector('#currentStatus');

let isFriend = false;

button.addEventListener("click", function(){
   
    if(isFriend){
        currentStatus.innerHTML = "We are Friends!";
        currentStatus.style.color = "green";
        button.innerHTML = "Remove"
        isFriend = !isFriend;
        
    }
    else{
        currentStatus.innerHTML = "Stranger";
        button.innerHTML = "Add Friend";
        currentStatus.style.color = "red";
        isFriend = !isFriend;
        
    }
    
})