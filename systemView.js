function SpringMassSystemView (systemModel, p) {
    this.systemModel = systemModel;
    this.p = p;
    this.rocketX;
    this.massX;

    this.testRect = function () {
        this.p.rect(30,30,100,100);
    };
    
    this.makeDrawing = function (pressed) {
        var k = 20*this.systemModel.x1;
        p.fill(255);
        p.colorMode(p.HSB, 100);
        p.line(0, 280, 80 + k, 280);
        var redI = Math.abs(this.systemModel.Fatrito);
        p.fill(0, redI, 100);
        p.rect(40 + k / 2, 277, 10 + k / 16, 6);

        p.line(0, 290, 80 + k, 290);
        var greenI = Math.abs(this.systemModel.EK / 3);
        p.fill(30, greenI, 100);
        p.ellipse(45 + k / 2, 290, 10 + k / 16, 6);
        p.fill(255);

        var massStart = 80;
        this.massX = massStart + k;
        this.rocketX = this.massX - 10;
        var massRect = p.rect(this.massX, 260, 40, 40);
        p.rect(this.rocketX, 265, 10, 10);


        if (pressed == 1) {
            p.noStroke();
            p.fill(65, this.systemModel.u / 5, 100);
            p.rect(0, 265, this.rocketX, 10);
        }
        p.colorMode(p.RGB);
        p.stroke(0);
        p.fill(0);
        p.rect(0, 300, 1000, 10);  
    };
    

}