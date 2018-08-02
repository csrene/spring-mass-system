var myp5 = new p5 ( function (p) {
    var systemModel;
    var systemView;
    var systemPositionChart;
    var systemSpeedChart;
    var stateSpaceChart;
    var pressed = 0;
    p.dragging = false;
    var cnv;
    var controller;
    var systemSpeedAndPosChart;
    var systemForcesChart;

    var massX=0;
    var rocketX=0;
    var lastMouseX = 0;

    var k = 0;
    p.floorRect = [];

    p.setup = function () {    
        
        systemModel = new SpringMassSystem();
        systemView = new SpringMassSystemView(systemModel,p);
        cnv = p.createCanvas(800, 210);        
        cnv.parent('c1');

        systemSpeedAndPosChart = new SpeedAndPositionChart('Posição e Velocidade', 'graph-speed-pos');
        stateSpaceChart = new StateSpaceChart('Espaço de estados','graph-state-space');
        systemForcesChart = new SpeedAndPositionChart('Força aplicada','graph-forces');
        
      
        controller = new InterfaceController(p,cnv,systemModel,systemView);       
        controller.setupDragListeners();
        
        /*
        // Reset Position Button
        p.buttonResetPosition = p.createButton('Resetar Posição');        
        p.buttonResetPosition.position(220,490);
        p.buttonResetPosition.mousePressed(function(){
            systemModel.resetState();
        });        

        // Change Parameters Button
        p.buttonPar = p.createButton('Mudar Parâmetros');
        p.buttonPar.position(30, 490);
        p.buttonPar.mousePressed(function() {
            systemModel.M = p.inputM.value();
            systemModel.K = p.inputK.value();
            systemModel.C = p.inputC.value();
        });

        // Reset Parameters Button
        p.buttonResetParams = p.createButton('Resetar Parâmetros');
        p.buttonResetParams.position(p.buttonPar.x, p.buttonPar.y+25);        
        p.buttonResetParams.mousePressed(function(){
            systemModel.resetParams();
            p.inputM.value(systemModel.M);
            p.inputK.value(systemModel.K);
            p.inputC.value(systemModel.C);
        });
        */
        // Aplly force Button
        p.button = p.createButton('Aplicar força');
        //p.button.position(p.buttonResetParams.x+200, 310);
        controller.setupForceButton(p.button);
      

        p.stroke(0);        
    };

    p.draw = function () {       

        p.background(230);     
        p.fill(0);
        p.rect(0, p.height-10, p.width, 10);
        
        // maths
        // following code should be a Controller object function
        if (p.dragging) {
            systemModel.x1 = (p.mouseX-systemView.massStart-50) / 50;
            systemModel.x2 = ((p.mouseX - lastMouseX) / 50) * 30
            lastMouseX = p.mouseX;
        } else {
            var nIterations = 20;
            systemModel.simulateFrame(nIterations);
            if (p.pressed) {
                systemModel.u += 5;
            }
        }
        //desenhar
        systemView.makeDrawing(p.pressed);
        stateSpaceChart.updateChart(true,systemModel.x1,systemModel.x2);
        if(k%10 ==0){
            systemForcesChart.updateChart(true, systemModel.u, systemModel.x2);
            systemSpeedAndPosChart.updateChart(true,systemModel.x1,systemModel.x2);
            
            k = 1;
        }
        /*
        p.text("Massa (kg)", p.inputM.x+40,350);
        p.text("K (constante da mola) (N/m)", p.inputM.x+40,375);
        p.text("C (constante de atrito viscoso) (N.s/m)", p.inputM.x+40,400);
        */
        k++;
    };     
    /*
    p.drawAndSetupParamInputs = function() {
        p.inputM = p.createInput();
        p.inputK = p.createInput();
        p.inputC = p.createInput();
        
        p.inputArray = [p.inputM,p.inputK,p.inputC];        

        for (var i = 0 ; i< p.inputArray.length ; i++) {
            p.inputArray[i].position(30, 410 + 25*i);
            p.inputArray[i].size(40, 18);
            p.inputArray[i].attribute('type', 'number');
            p.inputArray[i].attribute('min', 0);
        }
        
        p.inputM.value(systemModel.M);
        p.inputK.value(systemModel.K);
        p.inputC.value(systemModel.C);
    };
    */
    
});