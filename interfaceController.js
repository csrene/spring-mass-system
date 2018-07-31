function InterfaceController (p,cnv,systemModel,systemView) {
    
    this.cnv = cnv;
    
    this.setupDragListeners = function (){
        
        this.cnv.mousePressed(this.dragListener);
        this.cnv.mouseReleased(this.stopDragListener);
        this.cnv.mouseOut(this.stopDragListener);
        
    };

    this.setupForceButton = function (button) {        
        button.mousePressed(function() {
            p.pressed = 1;
        });        
        button.mouseOut(function() {
            p.pressed = 0;
            systemModel.u = 0;
        });        
        button.mouseReleased(function() {
            p.pressed = 0;
            systemModel.u = 0;
        });
    };

    this.stopDragListener = function() {
        if (p.dist(p.mouseX, p.mouseY, systemView.massX + 40, 260) < 50) {
            p.dragging = false;
        }
    };
    this.dragListener = function() {
      console.log(this);
        if (p.dist(p.mouseX, p.mouseY, systemView.massX + 40, 260) < 50) {          
            p.dragging = true;
        }
    };
}