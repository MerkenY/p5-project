function preload(){
}

function setup(){

canvas = createCanvas(400,400);
canvas.center();
video = createCapture(VIDEO);
video.hide();
tintcolor = "";
}

function draw(){

image(video,0,0,400,400);
tint(tintcolor);
}

function takesnapshot(){
save("image.png")
}

function filter_tint(){

tintcolor = document.getElementById("color_name").value;

}