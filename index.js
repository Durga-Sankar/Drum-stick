

for(var i=0; i<document.querySelectorAll(".drum").length; i++){
    // button pressed
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
     makeSound(this.innerHTML);
     boxAnimation(this.innerHTML);
    }
    )
// keypressed
document.addEventListener('keypress',function(event){
    makeSound(event.key);
    boxAnimation(event.key);
}
    
)
}

function makeSound(key){
    switch(key){

        case 'w':
            var audio = new Audio('sounds/tom-1.mp3');
           audio.play();
           break;
        case 'a':
            var audio = new Audio('sounds/tom-2.mp3');
           audio.play();
           break;
        case 's':
            var audio = new Audio('sounds/tom-3.mp3');
           audio.play();
           break;
        case 'd':
            var audio = new Audio('sounds/tom-4.mp3');
           audio.play();
           break;
        case 'j':
            var audio = new Audio('sounds/snare.mp3');
           audio.play();
           break;
        case 'k':
            var audio=new Audio('sounds/crash.mp3');
            audio.play()
        case 'l':
            var audio = new Audio('sounds/kick-bass.mp3');
           audio.play();
            break;
        default:
            console.log(key);
     }
}

function boxAnimation(keyclicked){
    key=['w','a','s','d','j','k','l']
    if (key.includes(keyclicked)){
    document.querySelector("."+keyclicked).classList.add('pressed');

    setTimeout(function(){
        document.querySelector("."+keyclicked).classList.remove('pressed');
    },100)
    }
}