function SpeedAndPositionChart (title, container) {
	var tVal = 0;
	var x1Val = 0; 	
	var x2Val = 0; 	
	var dataLength = 100; // number of dataPoints visible at any point
	var dpsx1 = []; // dataPoints
	var dpsx2 = []; // dataPoints
	var chart = new CanvasJS.Chart(container, {
		title :{
			text: title
		},
		axisY: {
			includeZero: false
		},      
		data: [{
			type: "line",
			dataPoints: dpsx1
			},
			{
			type: "line",
			dataPoints: dpsx2
		}]

	});	

	this. updateChart = function (shouldRender, parameterx1, parameterx2) {
			dpsx1.push({
				x: tVal,
				y: parameterx1
			});
			dpsx2.push({
				x: tVal,
				y: parameterx2
			});
			tVal += 1/6;
		

		if (dpsx1.length > dataLength) {
			dpsx1.shift();
			dpsx2.shift();
		}
		if (shouldRender) {
			chart.render();
		}
	};
	
}