NoseX = 0
NoseY = 0
Wrist_Left = 0
Wrist_Right = 0
difference = 0

function setup() {
    video = createCapture(VIDEO);
    video.size(500, 500);

    canvas = createCanvas(500, 500);
    canvas.position(550, 150);

    posenet = ml5.poseNet(video, modelLoaded); 
    posenet.on('pose', Gotposes);
}

function modelLoaded() {
    console.log("POSENET IS WOKING :) YAY!");
}

function Gotposes(results) {
    if(results.length > 0) {
        console.log(results);
        NoseX = results[0].pose.nose.x;
        NoseY = results[0].pose.nose.y;
        Wrist_Left = results[0].pose.leftWrist.x;
        Wrist_Right = results[0].pose.rightWrist.x;
        difference = floor(Wrist_Left - Wrist_Right);
    }
}