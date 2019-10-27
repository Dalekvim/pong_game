const canvas = document.getElementById("PongCanvas");

//background size
canvas.width = 1000;
canvas.height = 600;

const context = canvas.getContext("2d");
const bs = 20;
const FPS = 120;

// ball position
var bx = canvas.width/2-bs/2;
var by = canvas.height/2-bs/2;

//ball velocity
var xv, yv;

xv = 300/FPS;
yv = Math.floor(Math.random()*276+25)/FPS;

if (Math.floor(Math.random()*2)==0) {
	xv = -xv;
}
if (Math.floor(Math.random()*2)==0) {
	yv = -yv;
}

var p1 = canvas.height/2-75;
var p2 = canvas.height/2-75;

var a,b;

function update() {
	//background colour
    context.fillStyle = "black";
    context.fillRect(0, 0, canvas.width, canvas.height);

    //ball colour
    context.fillStyle = "white";

    //ball size
    context.fillRect(bx, by, bs, bs);
	
	//player 1
	context.fillStyle = "white";
	context.fillRect(30, p1, 25, 150);
	
	//player 2
	context.fillStyle = "white";
	context.fillRect(canvas.width-55, p2, 25, 150);
	
	//position changer
	
	document.onkeydown = checkKey;
	
    function checkKey() {
		//controls for player 1
		if (window.event.keyCode == '87') {
			a = 0 //p1 -= 300/FPS;
		}
		if (window.event.keyCode == '83') {
			a = 1 //p1 += 300/FPS;
		}
	
        //controls for player 2
		if (window.event.keyCode == '38') {
			b = 0 //p2 -= 300/FPS;
		}
		if (window.event.keyCode == '40') {
			b = 1 //p2 += 300/FPS;
		}
	}
	
	if (a == 0 && p1>0) {
		p1 -= 200/FPS;
	}
	if (a == 1 && p1<canvas.height-150) {
		p1 += 200/FPS;
	}
	
	if (b == 0 && p2>0) {
		p2 -= 200/FPS;
	}
	if (b == 1 && p2<canvas.height-150) {
		p2 += 200/FPS;
	}
	
	//boxiness for player 1
	if (25<bx && 55>bx && p1-20<by && p1+150>by) {
		xv = -xv
		yv = Math.floor(Math.random()*276+25)/FPS;
		if (Math.floor(Math.random()*2)==0) {
        	yv = -yv;
        }
	}
	
	//boxiness for player 2
	if (canvas.width-75<bx && canvas.width-45>bx && p2-20<by && p2+150>by) {
		xv = -xv
		yv = Math.floor(Math.random()*276+25)/FPS;
		if (Math.floor(Math.random()*2)==0) {
        	yv = -yv;
        }
	}
	
	if (bx < 0 || bx > canvas.width-bs) {
		xv = -xv;
		bx = canvas.width/2-bs/2;
        by = canvas.height/2-bs/2;
		p1 = canvas.height/2-75;
        p2 = canvas.height/2-75;
		yv = Math.floor(Math.random()*276+25)/FPS;

        if (Math.floor(Math.random()*2)==0) {
        	xv = -xv;
        }
        if (Math.floor(Math.random()*2)==0) {
        	yv = -yv;
        }
		a=2
		b=2
	}
	if (by < 0 || by > canvas.height-bs) {
		yv = -yv;
	}
		
	bx += xv;
	by += yv;
}

setInterval(update, 1000/FPS);