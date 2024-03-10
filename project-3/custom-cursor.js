let cursor = document.querySelector('.cursor');
let fullbody = document.querySelector('body');

fullbody.addEventListener("mousemove", function(e){
    
    cursor.style.left = e.x+"px";
    cursor.style.top = e.y+"px";
})