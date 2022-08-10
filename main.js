video = "";
status1 = "";

function preload() {
    video = createVideo('video.mp4');
    video.hide();
}

function setup() {
    canvas = createCanvas(600, 400);
    canvas.center();
}

function draw() {
    image(video, 0, 0, 600, 400);
}

function start() {
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status:- Detecting in progress";
}

function modelLoaded() {
    console.log("Model Loaded");
    video.loop(1)
    status1 = true;
}

function myValue(volumeValue) {
    video.volume = volumeValue / 100;
}