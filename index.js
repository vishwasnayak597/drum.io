document.querySelectorAll(".drum").forEach(item => {
item.addEventListener("click",function() {
    var buttoninnerhtml = this.innerHTML;
    makesound(buttoninnerhtml);
    animation(buttoninnerhtml);
})
}
)

//keypress

document.addEventListener("keydown",function(event)
{
    makesound(event.key);
    animation(event.key);
}
)
function makesound(key)
{
    switch (key) {
        case 'w':
            var audio1= new Audio("sounds/crash.mp3");
            audio1.play();
            break;
        case 'a':
            var audio2= new Audio("sounds/kick-bass.mp3");
            audio2.play();
            break;
        case 's':
             var audio3= new Audio("sounds/snare.mp3");
            audio3.play();
            break;
        case 'd':
            var audio4= new Audio("sounds/tom-1.mp3");
            audio4.play();
            break;
         case 'j':
            var audio5= new Audio("sounds/tom-2.mp3");
            audio5.play();
            break;
        case 'k':
             var audio6= new Audio("sounds/tom-3.mp3");
             audio6.play();
             break;
        case 'l':
             var audio7= new Audio("sounds/tom-4.mp3");
             audio7.play();
             break;       
    
        default:
            alert("WRONG BUTTON PRESSED")
            break;
    }
}

function animation(animatekey)
{
    var activebutton = document.querySelector("." +animatekey);
    activebutton.classList.add("pressed");
    setTimeout(function() {
        activebutton.classList.remove("pressed")
    } ,100
    );
}
