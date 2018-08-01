function SystemPositionChart (title, container) {
	var xVal = 0;
	var yVal = 0; 	
	var dataLength = 100; // number of dataPoints visible at any point
	var dps = []; // dataPoints
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

	this. updateChart = function (shouldRender, parameter,count) {

		count = count || 1;

		for (var j = 0; j < count; j++) {
			yVal = parameter;
			dps.push({
				x: xVal,
				y: yVal
			});
			xVal += 1/6;
		}

		if (dps.length > dataLength) {
			dps.shift();
		}
		if (shouldRender) {
			chart.render();
		}
	};
	
}