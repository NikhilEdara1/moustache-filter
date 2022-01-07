moustacheX=0;
moustacheY=0;
function preload(){
Y=loadImage('https://i.postimg.cc/3x3QzSGq/m.png');
}

function setup(){
canvas=createCanvas(300,300);
canvas.center();
video=createCapture(VIDEO);
video.size(300,300);
video.hide();
load=ml5.poseNet(video,modelloaded);
load.on('pose',moustache);
}

function modelloaded(){
    console.log("poseNet has been loaded");
}
function moustache(result){
if(result.length>0){
    console.log(result)
    moustacheX=result[0].pose.nose.x-40;
    moustacheY=result[0].pose.nose.y;
}
}
function draw(){
image(video,0,0,300,300);
image(Y,moustacheX,moustacheY,80,35);
}

function snap(){
    save('mypowerimage.png');
}