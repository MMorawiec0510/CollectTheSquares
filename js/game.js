let input, button, greeting;

function setup() {
	createCanvas(windowWidth, windowHeight);
  	ballPosX = (window.innerWidth / 2) - 20;
	ballPosY = window.innerHeight - 80;
	normalMoveEnabled = true;
	pause = false;
	theend = false;
	coins = 0;
	randomFinish();
	count = 5000;
	timerInt = setInterval(countdownTimer, 10);
	pauses = 1;
}


function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}


function randomFinish() {
	finishX = Math.floor(Math.random() * (windowWidth-60));
	finishY = Math.floor(Math.random() * (windowHeight-60));
}


function draw() {
	background(0, 100, 200);
	drawGame();
	
	checkFinish();
}

function drawMenu() {
	
	text("aaaa",111,111);
}

function drawGame() {
	
	$("#coinsValue").text(coins);
	$("#pausesValue").text(pauses);
	$(".coins").css("display", "block");
	
	
	fill(200,150,30);
	finish = rect(finishX, finishY, 60, 60);
	
	fill(0);
	ball = rect(ballPosX, ballPosY, 40, 40);	
			
	if (normalMoveEnabled == true && theend == false) normalMove();		
		
	if (pause == true && theend == false)
	{
		$(".pause").css("display", "block");
		clearInterval(timerInt);
	} else {
		$(".pause").css("display", "none");
		countdownTimer();
	}
	
	if (theend == true)
	{
		$(".theend").css("display", "block");
		clear();
		background(0, 100, 200);
	} else {
		$(".theend").css("display", "none");
	}
	
}

function normalMove() {
	if ((mouseX>=ballPosX && mouseX<=ballPosX+10) && (mouseY>=ballPosY && mouseY<=ballPosY+10))
			{
				for (i=0;i<20;i++) 
				{
					ballPosY = ballPosY + 0.2;
					ballPosX = ballPosX + 0.2;
					ball = rect(ballPosX, ballPosY, 40, 40);
				}

			} // 1 
			if ((mouseX>=ballPosX+10 && mouseX<=ballPosX+30) && (mouseY>=ballPosY && mouseY<=ballPosY+10))
			{
				for (i=0;i<20;i++) 
				{
					ballPosY = ballPosY + 0.2;
					ballPosX = ballPosX;
					ball = rect(ballPosX, ballPosY, 40, 40);
				}

			} // 1.5
			
			if ((mouseX>=ballPosX+30 && mouseX<=ballPosX+40) && (mouseY>=ballPosY && mouseY<=ballPosY+10))
			{
				for (i=0;i<20;i++) 
				{
					ballPosY = ballPosY + 0.2;
					ballPosX = ballPosX - 0.2;
					ball = rect(ballPosX, ballPosY, 40, 40);
				}

			} // 2
			
			if ((mouseX>=ballPosX+30 && mouseX<=ballPosX+40) && (mouseY>=ballPosY+10 && mouseY<=ballPosY+30))
			{
				for (i=0;i<20;i++) 
				{
					ballPosY = ballPosY;
					ballPosX = ballPosX - 0.2;
					ball = rect(ballPosX, ballPosY, 40, 40);
				}

			} // 2.5
			
			if ((mouseX>=ballPosX+30 && mouseX<=ballPosX+40) && (mouseY>=ballPosY+30 && mouseY<=ballPosY+40))
			{
				for (i=0;i<20;i++) 
				{
					ballPosY = ballPosY - 0.2;
					ballPosX = ballPosX - 0.2;
					ball = rect(ballPosX, ballPosY, 40, 40);
				}

			} // 3

			if ((mouseX>=ballPosX+10 && mouseX<=ballPosX+30) && (mouseY>=ballPosY+30 && mouseY<=ballPosY+40))
			{
				for (i=0;i<20;i++) 
				{
					ballPosY = ballPosY - 0.2;
					ballPosX = ballPosX;
					ball = rect(ballPosX, ballPosY, 40, 40);
				}

			} // 3.5
			
			if ((mouseX>=ballPosX && mouseX<=ballPosX+10) && (mouseY>=ballPosY+30 && mouseY<=ballPosY+40))
			{
				for (i=0;i<20;i++) 
				{
					ballPosY = ballPosY - 0.2;
					ballPosX = ballPosX + 0.2;
					ball = rect(ballPosX, ballPosY, 40, 40);
				}

			} // 4.5

			if ((mouseX>=ballPosX && mouseX<=ballPosX+10) && (mouseY>=ballPosY+10 && mouseY<=ballPosY+30))
			{
				for (i=0;i<20;i++) 
				{
					ballPosY = ballPosY;
					ballPosX = ballPosX + 0.2;
					ball = rect(ballPosX, ballPosY, 40, 40);
				}

			} // 5	
		
}

function mouseClicked() {
	if (normalMoveEnabled == true)
	{
		normalMoveEnabled = false;
		pause = true;
	} else {
		normalMoveEnabled = true;
		pause = false;
	}
}

function countdownTimer() {
	if (count <= 0)
    {
		theend = true;
		clearInterval(timerInt);
		count++;
     }
     count--;
     document.getElementById("timer").innerHTML=count /100+ ""; 
}

function checkFinish() {
	if ((finishX + 60 >= ballPosX + 40) && (finishY + 60 >= ballPosY + 40) && finishX < ballPosX && finishY < ballPosY)
	{
		coins++;
		randomFinish();
		count = count + 100;
		text("aaaa",111,111);
	}
}

function howTo() {
	infoWindow = window.open('info.html', '_blank', 'height="600" width="350"');
}

//modal//
const buttons = document.querySelectorAll(`button[data-modal-trigger]`);

for(let button of buttons) {
	modalEvent(button);
}

function modalEvent(button) {
	button.addEventListener('click', () => {
		const trigger = button.getAttribute('data-modal-trigger');
		const modal = document.querySelector(`[data-modal=${trigger}]`);
		const contentWrapper = modal.querySelector('.content-wrapper');
		const close = modal.querySelector('.close');

		close.addEventListener('click', () => modal.classList.remove('open'));
		modal.addEventListener('click', () => modal.classList.remove('open'));
		contentWrapper.addEventListener('click', (e) => e.stopPropagation());

		modal.classList.toggle('open');
	});
}

