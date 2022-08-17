// This file contains the drop class that is used to make the rain.
class drop{
    constructor(){
        this.position = createVector(random(windowWidth),random(-100,windowHeight))
        this.velocity = createVector(0,random(3,7))
        this.force = createVector(0,0)
    }

    applyForce(f){
        this.force.add(f)
    }

    checkEdges(){
        if(this.position.x>windowWidth){
            this.position.x = 0
        }
        if(this.position.y>windowHeight){
            this.position.y = 0
            this.velocity = createVector(0,random(3,7))
        }
        if(this.position.x<0){
            this.position.x = windowWidth
        }
    }

    update(){
        this.velocity.add(this.force)
        this.position.add(this.velocity)
        this.checkEdges()
        this.force.mult(0)
    }

    show(){
        fill(255,227,216)
        noStroke()
        rect(this.position.x,this.position.y,3,7)
    }
}