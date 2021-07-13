let drops = []
let numOfDrops
let gravity
let fallOff = 0
let drawDiv = false
let pressedStart = false

function setup(){
    createCanvas(windowWidth,windowHeight)
    loadSounds()
    numOfDrops = random(500)
    gravity = createVector(0,0.2)
    for(i = 0; i < numOfDrops; i++){
        tempDrop = new drop()
        append(drops,tempDrop)
    }
}

function lightning(){
    if(random(1000) < 1){
        fallOff = 255
        if(random(2)>1){
            thunder.play()
        }
        else{
            thunder2.play()
        }
    }
    fill(255,fallOff)
    rect(0,0,windowWidth,windowHeight)
    fallOff -= 10
}

function showDiv(){
    let div = createDiv('Blue Rain').size(200, 50);
    div.style('color', 'rgb(181,234,234)');
    div.style('font-size','42px')
    div.style('text-align','center')
    div.style('font-family','Dancing Script')
    div.center()
    div.center();
    drawDiv = true
}

function showStartButton(){
    background(30,24,80)
    textAlign(CENTER,CENTER)
    stroke(255)
    textSize(78)
    if ((mouseX > (windowWidth/2) - 120) && (mouseX < (windowWidth/2) +120) && (mouseY >(windowHeight/2)-80) && (mouseY<(windowHeight/2)+80)){
        fill(255)
        rect((windowWidth/2) - 120 ,windowHeight/2-80,240,160)
        cursor(HAND)
        fill(30,24,80)
        text("Start",(windowWidth/2) ,windowHeight/2)
    }
    else{
        cursor(ARROW)
        fill(30,24,80)
        rect((windowWidth/2) - 120 ,windowHeight/2-80,240,160)

        fill(255)
        text("Start",(windowWidth/2)  ,windowHeight/2)
    }
}

function repeatSounds(){
    if(rainsound.isPlaying() == false){
        rainsound.play()
    }
    if(music.isPlaying() == false){
        music.play()
    }
}

function runAnimation(){
    repeatSounds()
    background(30,24,80)
    lightning()
    for(i = 0; i < numOfDrops; i++){
        drops[i].applyForce(gravity)
        drops[i].position.x += 5
        drops[i].update()
        drops[i].show()
    }
}

function draw(){
    if(finishedLoading()){
        if(pressedStart){
            if(drawDiv == false){
                showDiv()
            }
            runAnimation()
        }
        else{
            showStartButton()
        }
    }
    else{
        showLoadingScreen()
    }
}


function mousePressed(){
    if ((mouseX > (windowWidth/2) - 120) && (mouseX < (windowWidth/2) +120) && (mouseY >(windowHeight/2)-80) && (mouseY<(windowHeight/2)+80)){
      pressedStart = true
      cursor(ARROW)
    }
  }