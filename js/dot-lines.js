var _t = Date.now();
var c = document.getElementById("canvas");
c.height = window.innerHeight;
c.width = window.innerWidth;		
var ctx = c.getContext('2d');

window.addEventListener("resize", function(e) {
	c.height = window.innerHeight;
	c.width = window.innerWidth;			
	//InitilizeStuffAgain
});

dotsArray = [];
init();
draw();
var mX;
var mY;
function draw() {
	var t = Date.now();
	window.addEventListener("mousemove", function(e) {
		mY = e.clientY
		mX = e.clientX
	})

	var deltaT = (t - _t)/1000;
	//Background
	ctx.rect(0, 0, c.width, c.height);
	ctx.fillStyle = 'rgb(255, 255, 255)';
	ctx.fill();
	for (i = 0; i < dotsArray.length; i++) 	{
		dotsArray[i].update(deltaT, mX, mY);
	}
	
	for (i = 0; i < sphereArray.length; i++) 	{
		sphereArray[i].update(deltaT, mX, mY);
	}
	_t = t;
	window.requestAnimationFrame(draw);
}
function Glow() {
	this.x = 0;
	this.y = 0;
	this.draw = function() {
  ctx.shadowBlur = 20;
  ctx.shadowColor = "rgba(0,0,0,1)";
	ctx.fillStyle =  "white";
	ctx.arc(this.x,this.y, 2 /*radius*/,0,2*Math.PI);
	ctx.fill();
	ctx.shadowBlur=0;
	}
	this.update = function(deltaT, mX, mY) {
		this.x=mX;
		this.y=mY;
		this.draw();
	}
}

function Dots(x, y, radius, twinkle, xV, yV)  {
	this.x = x;
	this.y = y;
	this.xV = xV;
	this.yV = yV;
	
	this.twinkler = .01;
	this.twinkle = twinkle;
	this.radius = radius;
	this.draw = function() {
		ctx.beginPath();
		ctx.fillStyle = "rgba(0,0,0,"+this.twinkle+")";
		ctx.arc(this.x,this.y,this.radius,0,2*Math.PI);
		ctx.fill();
	}
	this.update = function(deltaT, mX, mY) {
		//Edge Reset
		var detectionR = 205;
		if (this.y>(c.height+detectionR+this.radius+5)) {
			this.y = 0-this.radius-detectionR;
		}
		
		else if (this.y<(-this.radius-detectionR-5)) {
			this.y = c.height-this.radius-detectionR;
		}
		
		if (this.x>(c.width+this.radius+detectionR+5)) {
			this.x = 0-detectionR;
		}
		
		else if (this.x<(-this.radius-detectionR-5)) {
			this.x = c.width+this.radius+detectionR;
		}
		
		if (yV < 10 && yV > -10) {
			yV+=Math.random()*15;
		}
		if (xV < 20 && xV > -10) {
			xV+=Math.random()*15;
		}
		
		
		
		//Left



		
		if (this.twinkle > twinkle) {this.twinkler = (Math.random()*-.005)}
		if (this.twinkle < 0) {this.twinkler = (Math.random()*.005)}
		this.twinkle += this.twinkler;

		var d = distance(this.x,this.y,mX,mY);
		if ((this.x >= mX-detectionR && this.x <= mX+detectionR)&&(this.y >= mY-detectionR && this.y <= mY+detectionR)) {

			ctx.beginPath();
			ctx.moveTo(this.x, this.y);
			ctx.lineTo(mX,mY)
      ctx.lineWidth = this.radius;
      ctx.strokeStyle = "rgba(0,0,0,"+((detectionR-d)/detectionR)/2+")";
      ctx.stroke();

		}
		this.x += this.xV*deltaT;
		this.y += this.yV*deltaT;
		this.draw();
		
		
	}
}
function init() {
	dotsArray = [];
	sphereArray = [];
	for (i = 0; i < 60; i ++) {
		var x = Math.random()*c.width;
		var xV = Math.random()*90-45;
		var yV = Math.random()*90-45;
		var radius = Math.random()*1.8;
		var y = Math.random()*(c.height+radius*2)-radius;
		var twinkle = Math.random()*.6;
		dotsArray.push(new Dots(x,y,radius, twinkle, xV, yV))
	}
	for (i = 0; i<1; i++) {
	sphereArray.push(new Glow());
	}
}

function distance(x1,y1,x2,y2) {
  var distX = Math.pow(x2 - x1, 2),
      distY = Math.pow(y2 - y1, 2),
      distance = Math.sqrt(distX + distY);
  return distance;
}