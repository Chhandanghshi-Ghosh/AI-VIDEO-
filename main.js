videoImage=""

function preload(){
    videoImage= createVideo('video.mp4')
}

function setup(){
canvas= createCanvas(380,350)
canvas.center()

videoImage.hide()
}

function draw(){
    image(videoImage, 0 , 0 , 380, 350)
}

function start(){
objectDetector= ml5.objectDetector('cocossd',modelLoaded)
document.getElementById("status").innerHTML="Status: Detection Objects."
}

function modelLoaded(){
console.log("Model Loaded!!")
status= "true"
video.loop()
video.rate(1)
video.volume(0)
}

