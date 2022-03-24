var vel =  2;
var acc = 1;
var x = 0

function setup(){
    createCanvas(400,500)
}


function draw(){
    background(0)
    //position
    var y =  height/2
     
    //moving
    function move(dt){
        x += vel * dt
        vel += acc * dt
    }

    //draw an object
    fill('yellow')
    rect(x ,y, 55, 60)

    move(1)

    if (x > width){
        x = 0
        vel =  2;
        acc = 1;
    }
}

