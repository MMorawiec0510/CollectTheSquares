function canvasSize() {
	
	const canvasElem = $("#can");
	ctx = canvasElem[0].getContext('2d'); // ODP Stackoverflow [0]: "jQuery exposes the actual DOM element in numeric indexes, where you can perform normal JavaScript/DOM functions."

	//$("#can").css({ width: "100%", height: "100%", });
	
	ctx.canvas.width  = window.innerWidth;
	ctx.canvas.height = window.innerHeight;
  
	window.globalInterval = setInterval(draw, 5);
  
	draw();
}



function draw() {
	
ballPosX = (window.innerWidth / 2) - 10;
ballPosY = window.innerHeight - 40;
	
	
	
ctx.fillRect(ballPosX, ballPosY, 20, 20);



}