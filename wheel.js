const wheel = document.getElementById("wheel");
const spinButton = document.getElementById("spin-but");
const finalValue = document.getElementById("final");

//Object that stores values of min and max angle for a value
/*
	Object that stores values of min and max angle for a value 
	12 pieces 
*/

const rotationVal = [
	{ minDeg: 0, maxDeg: 15, value: 3 },
	{ minDeg: 16, maxDeg: 45, value: 2 },
	{ minDeg: 46, maxDeg: 75, value: 1 },
	{ minDeg: 76, maxDeg: 105, value: 12 },
	{ minDeg: 106, maxDeg: 135, value: 11 },
	{ minDeg: 136, maxDeg: 165, value: 10 },
	{ minDeg: 166, maxDeg: 195, value: 9 },
	{ minDeg: 196, maxDeg: 225, value: 8 },
	{ minDeg: 226, maxDeg: 255, value: 7 },
	{ minDeg: 256, maxDeg: 285, value: 6 },
	{ minDeg: 286, maxDeg: 315, value: 5 },
	{ minDeg: 316, maxDeg: 345, value: 4 },
	{ minDeg: 346, maxDeg: 360, value: 3 },


];

//Size of each piece
const data = [8,8,8,8,8,8,8,8,8,8,8,8]; //doesn't have to equal 100

//background color of each piece
var pieColors = [
	"#56e119",
	"#FFC300",
	"#56e119",
	"#FFC300", 
	"#56e119",
	"#FFC300",
	"#56e119",
	"#FFC300",
	"#56e119",
	"#FFC300", 
	"#56e119",
	"#FFC300", 	
];

//create chart
let myChart = new Chart(wheel, {
	plugins: [ChartDataLabels],
	type: "pie",
	data: {
		labels: [1,2,3,4,5,6,7,8,9,10,11,12],
		datasets: [
			{
			backgroundColor: pieColors,
			data: data,
			},
		],
	},
options: {
	responsive: true,
	animation: { duration: 0},
	plugins: {
		tooltip: false,
		legend: {
		  display: false,
		},
		datalabels: {
			color: "#ffffff",
			 formatter: (_, context) => context.chart.data.labels[context.dataIndex],
			font: { size: 24 },
		},	
	},
  },
});



