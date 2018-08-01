function SpringMassSystem (M = 4, K = 40, C = 1, leftwall= -5, x1=0, x2 = 0, u = 0) {    
    this.startingM = M;
    this.startingK = K;
    this.startingC = C;
    this.startingx1 = x1;
    this.K = K;
    this.M = M;
    this.C = C;
    this.leftwall = leftwall;
    this.x1 = x1;
    this.x2 = x2;
    this.u = u;
    
    this.E = 0;
    this.EK = 0;
    this.Eatrito = 0;
    this.Fatrito = 0;
    this.Etotal =0;
    
    this.maxE = 0;
    this.maxD = 0;
    this.maxEK = 0;

    this.getParamsArray = function () {
        return [this.M,this.K,this.C];
    }
    this.resetState = function () {
        this.x1 = 4;
        this.x2 = 0;
    };

    this.resetParams = function () {
        this.M = 4;
        this.K = 40;
        this.C = 1;
    };
    this.simulateFrame = function (n=1) {
        var t = (1 / 60) / n;
        
        for (var i = 0; i < n; i++) {
            if(this.x1 < this.leftwall){                
                this.x2 = -this.x2;
            }
            var x1ponto = this.x2;
            var x2ponto = -(this.K / this.M)*this.x1 - (this.C / this.M)*this.x2 + (1 / this.M) * this.u;
    
            var x1doisponto = x2ponto;
            var x2doisponto = -(this.K / this.M)*x1ponto - (this.C / this.M)*x2ponto;
    
            var x1tresponto = x2doisponto;
            var x2tresponto = -(this.K / this.M) * x1doisponto - (this.C / this.M) * x2doisponto;
    
            this.x1 = this.x1 + x1ponto * t + x1doisponto * (t ** 2) / 2 + x1tresponto * (t ** 3) / 6;
            this.x2 = this.x2 + x2ponto * t + x2doisponto * (t ** 2) / 2 + x2tresponto * (t ** 3) / 6;
            
            this.Fatrito = this.C * this.x2;
            var Patrito = Math.abs(this.Fatrito * this.x2);
            this.Eatrito += Patrito * t;
        }
    
        this.E = this.M*(this.x2**2)/2;
        this.EK = (1/2)*this.K*this.x1**2;
        this.Etotal=this.EK+this.E;
        this.maxD = Math.max(this.x1,this.maxD);
        this.maxE = Math.max(this.E,this.maxE);
        this.maxEK = Math.max(this.maxEK,this.EK);
    
    };

}