var btn=document.querySelectorAll("button");
for(var i=0;i<btn.length;i++){
    btn[i].addEventListener("click",function(){
        var str="sounds/"+this.getAttribute("class")+".mp3";
        var audio =new Audio(str);
        audio.play(); 
        animation(this.getAttribute("class"));
    });
}
document.addEventListener("keypress",function(event){
    switch(event.key.toLocaleLowerCase()){
        case 'w':
            {
                var audio = new Audio("sounds/tom-1.mp3");
                audio.play();
                animation("tom-1");
                break;
            }
        case 'a':
            {
                var audio = new Audio("sounds/tom-2.mp3");
                audio.play();
                animation("tom-2");
                break;
            }
        case 's':
            {
                var audio = new Audio("sounds/tom-3.mp3");
                audio.play();
                animation("tom-3");
                break;
            }
        case 'd':
            {
                var audio = new Audio("sounds/tom-4.mp3");
                audio.play();
                animation("tom-4");
                break;
            }
        case 'f':
            {
                var audio = new Audio("sounds/crash.mp3");
                audio.play();
                animation("crash");
                break;
            }
        case 'g':
            {
                var audio = new Audio("sounds/kick-bass.mp3");
                audio.play();
                animation("kick-bass");
                break;
            }
        case 'h':
            {
                var audio = new Audio("sounds/snare.mp3");
                audio.play();
                animation("snare");
                break;
           }
    }
});
function animation(cls){
    var fn = document.querySelector("."+cls);
    fn.classList.add("pressed");
    setTimeout(function(){
        fn.classList.remove("pressed");
    },100);
}