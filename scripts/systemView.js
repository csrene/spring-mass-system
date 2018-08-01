function SpringMassSystemView (systemModel, p) {
    this.systemModel = systemModel;
    this.p = p;
    this.rocketX;
    this.massX;
    this.massY;
    this.massW = 100;
    this.massH = 60;
    this.massStart = 250;

    this.testRect = function () {
        this.p.rect(30,30,100,100);
    };
    
    this.makeDrawing = function (pressed) {
        var k = 50 * this.systemModel.x1;
        p.fill(255);
        p.colorMode(p.HSB, 100);
        p.stroke(0);
        p.strokeWeight(2);
        // Draws damper
        p.line(0, p.height-10-30, 250 + k, p.height-10-30);        
        p.rect((125 - (40 * (250+k)/250)/2)+k/2, p.height-10-33, 40 * (250+k)/250, 6);
        // Draws spring conecting lines
        p.line(0, p.height-10-60, 100* (250 + k) / 250, p.height-10-60);
        p.line(150 * (250+k)/250, p.height-10-60, 250 + k, p.height-10-60);
        // Draws spring
        p.line(100* (250 + k) / 250, p.height-10-60,103* (250 + k) / 250, p.height-10-53);
        p.line(103* (250 + k) / 250, p.height-10-53,109* (250 + k) / 250, p.height-10-67);
        p.line(109* (250 + k) / 250, p.height-10-67,115* (250 + k) / 250, p.height-10-53);
        p.line(115* (250 + k) / 250, p.height-10-53,121* (250 + k) / 250, p.height-10-67);
        p.line(121* (250 + k) / 250, p.height-10-67,127* (250 + k) / 250, p.height-10-53);
        p.line(127* (250 + k) / 250, p.height-10-53,133* (250 + k) / 250, p.height-10-67);
        p.line(133* (250 + k) / 250, p.height-10-67,139* (250 + k) / 250, p.height-10-53);
        p.line(139* (250 + k) / 250, p.height-10-53,145* (250 + k) / 250, p.height-10-67);
        p.line(145* (250 + k) / 250, p.height-10-67,150* (250 + k) / 250, p.height-10-60);
        p.strokeWeight(1);
        
        p.fill(255);

        // Draws Mass block
        
        this.massX = this.massStart + k;
        this.rocketX = this.massX;        
        p.fill(0);
        var massRect = p.rect(this.massX, p.height - 90, this.massW , this.massH);
        p.fill(30);
        // Draws small rectangle between block and wheels
        p.rect(this.massX, p.height - 30, 100,4);

        // Draws wheels
        p.colorMode(p.RGB);
        p.fill(222,184,135);
        p.noStroke();
        p.ellipse(this.massX + 20, p.height - 20, 20);
        p.ellipse(this.massX + 80, p.height - 20, 20);

        // Draws rocket/force applier
        p.rect(this.massX, p.height-90-10, 10, 10);


        if (pressed == 1) {
            p.noStroke();
            p.colorMode(p.HSB, 100);
            p.fill(65, this.systemModel.u / 5, 100);
            p.rect(0, p.height -100, this.rocketX, 10);
        }
        p.colorMode(p.RGB);
        
    };
    

}