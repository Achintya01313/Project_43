function Bullets(x, y) {
    this.x = 100;
    this.y = 100;
    this.r = 8;
    this.toDelete = false;
    this.show = function(){
        fill(255,0,2);
        noStoke();
        ellipse(this.x, this.y, this.r*2, this.r*2);
    }

    this.hits = function(enemy){
      var d = dist(this.x, this.y, enemy.x, enemy.y);
      if(d < this.r + enemy.r){
          return true;
      }else{
          return false;
      }
    }
    this.destoy = function(){
      this.toDelete = true;
    }

    this.move = function(){
        this.y = this.y-2;
    }
    
}
