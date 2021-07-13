let numOfLoadedSounds = 0
let angle = 0
let progress1
let progress2
let progress3
let progress4

function finishedLoading() {
    return (numOfLoadedSounds == 4)
}

function success(){
    numOfLoadedSounds++
}

function updateAngle(){
    angle = ((progress1+progress2+progress3+progress4)*TWO_PI)/4
}

function prog1(p){
    progress1 = p
    updateAngle()
}
function prog2(p){
    progress2 = p
    updateAngle()
}
function prog3(p){
    progress3 = p
    updateAngle()
}
function prog4(p){
    progress4 = p
    updateAngle()
}

function err(){
    console.log("Error while Loading Assets!!")   
}

function showLoadingScreen(){
    background(30,24,80)
    stroke(255)
    fill(255)
    textAlign(CENTER,CENTER)
    textSize(38)
    text("Loading Assets",windowWidth/2,(windowHeight/2)/5)
    arc(windowWidth/2,windowHeight/2,300,300,0,angle+0.062)
    fill(30,24,80)
    noStroke()
    circle(windowWidth/2,windowHeight/2,250)
    fill(255)
    textAlign(CENTER,CENTER)
    textSize(48)
    text(round(((angle/TWO_PI)*100)+1,2) +"%",windowWidth/2,windowHeight/2)
}

function loadSounds(){
    music = loadSound('SoundTracks/lofimusic.mp3',success,err,prog1)
    rainsound = loadSound('SoundTracks/shower.wav',success,err,prog2);
    thunder = loadSound('SoundTracks/thunder.mp3',success,err,prog3);
    thunder2 = loadSound('SoundTracks/thunder2.mp3',success,err,prog4)
    rainsound.setVolume(0.2)
    thunder.setVolume(0.2)
    thunder2.setVolume(0.2)
}