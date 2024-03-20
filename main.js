canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d")

greencar_width = 100;
greencar_height = 160;


background_image = "parkingLot.jpg";
greencar_image = "car2.png";

greencar_x = 5;
greencar_y = 225;

function add() {
	background_ImgTag = new Image();
	background_ImgTag.onload = uploadBackground;
	background_ImgTag.src = background_image;

	greencar_ImgTag = new Image();
	greencar_ImgTag.onload = uploadgreencar;
	greencar_ImgTag.src = greencar_image;

}

function uploadBackground() {
	ctx.drawImage(background_ImgTag, 0, 0, canvas.width, canvas.height);

}

function uploadgreencar() {
	ctx.drawImage(greencar_ImgTag, greencar_x, greencar_y, greencar_height, greencar_width)


}


window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
	keyPressed = e.keyCode;
	console.log(keyPressed);
	if (keyPressed == '38') {
		up();
		console.log("up");
	}

	if (keyPressed == '40') {
		down();
		console.log("down");
	}

	if (keyPressed == '37') {
		left();
		console.log("left");
	}

	if (keyPressed == '39') {
		right();
		console.log("right");
	}


}

function up() {
	if (greencar_y >= 0) {
		greencar_y = greencar_y - 10;
		uploadBackground();
		uploadgreencar();
	}
}

function down() {
	if (greencar_y <= 440) {
		greencar_y = greencar_y + 10
		uploadBackground();
		uploadgreencar();
	}
}

function left() {
	if (greencar_x >= 0) {
		greencar_x = greencar_x - 10;
		uploadBackground();
		uploadgreencar();

	}
}

function right() {
	if (greencar_x <= 900) {
		greencar_x = greencar_x + 10;
		uploadBackground();
		uploadgreencar();

	}
}
