function StateSpaceChart (title, container) {
	var x1Val = 0; 	
	var x2Val = 0; 	
	var dataLength = 500; // number of dataPoints visible at any point
	var dps= []; // dataPoints
	
	var chart = new CanvasJS.Chart(container, {
		title :{
			text: title
		},
		axisY: {
			includeZero: false
		},      
		data: [{
			type: "line",
			dataPoints: dps
			
		}]

	});	

	this. updateChart = function (shouldRender, parameterx1, parameterx2) {
			dps.push({
				x: parameterx1,
				y: parameterx2
			});
		

		if (dps.length > dataLength) {
			dps.shift();
			
		}
		if (shouldRender) {
			chart.render();
		}
	};
	
}