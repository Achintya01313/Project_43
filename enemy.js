function Enemy(x, y) {
    this.x = 100;
    this.y = 100;

    this.xdirec = 1;
    
    
    this.shrink = function(){
        this.r = this.r - 2;
    }
    this.shiftDown = function(){
        this.xdirec *= -1;
        this.y += this.r;
    }

    this.move = function(){
        this.x = this.x + this.xdirec;
   
    }

    this.show = function(){
        noStroke();
        fill(0, 0, 0);
        rectMode(CENTER);
        rect(this.x, this.y, 60, 60);


    }
    
}

