var block = document.getElementById("block");
var hole = document.getElementById("hole");
var character = document.getElementById("character");
var jumping = 0;
var counter = 0;

/*----Random generation of holes in obstacles function----*/
hole.addEventListener('animationiteration', () => {
    var random = -((Math.random()*300)+150);
    hole.style.top = random + "px";
    counter++;
});

/*----Gravity function----*/
setInterval(function() {
    var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    if(jumping==0) {
        character.style.top = (characterTop+2)+"px";
    }
    /*----Hitboxes----*/
    var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    var holeTop = parseInt(window.getComputedStyle(hole).getPropertyValue("top"));
    var cTop = -(500-characterTop);
    /*----Collision function & score counter alert----*/
    if((characterTop>480)||((blockLeft<20)&&(blockLeft>-50)&&((cTop<holeTop)||(cTop>holeTop+130)))) {
        alert("Score: "+(counter-1));
        character.style.top = 115 + "px";
        counter=0;
    }
},10);

/*----Jumping function----*/
function jump() {
    jumping = 1;
    /*----Function to allow gravity to kick in after jump----*/
    let jumpCount = 0;
    var jumpInterval = setInterval(function(){
        var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
        if((characterTop>2)&&(jumpCount<15)){
            character.style.top = (characterTop-4)+"px";
        }
        if(jumpCount>15){
            clearInterval(jumpInterval);
            jumping=0;
            jumpCount=0;
        }
        jumpCount++;
    },10);
}