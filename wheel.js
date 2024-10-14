const wheel = document.getElementById("wheel");
const spinButton = document.getElementById("spin-but");
const finalValue = document.getElementById("final");

//Object that stores values of min and max angle for a value
/*
	Object that stores values of min and max angle for a value 
	12 pieces 
*/

const rotationVal = [
	{ minDeg: 0, maxDeg: 30, value: 3 },
	{ minDeg: 31, maxDeg: 60, value: 2 },
	{ minDeg: 61, maxDeg: 90, value: 1 },
	{ minDeg: 91, maxDeg: 120, value: 12 },
	{ minDeg: 121, maxDeg: 150, value: 11 },
	{ minDeg: 151, maxDeg: 180, value: 10 },
	{ minDeg: 181, maxDeg: 210, value: 9 },
	{ minDeg: 211, maxDeg: 240, value: 8 },
	{ minDeg: 241, maxDeg: 270, value: 7 },
	{ minDeg: 271, maxDeg: 300, value: 6 },
	{ minDeg: 301, maxDeg: 330 value: 5 },
	{ minDeg: 331, maxDeg: 360, value: 4 },
	{ minDeg: 331, maxDeg: 360, value: 3 },


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
let myChart - new Chart(wheel, {
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
	}

options: {
	responsive: true,
	animation: { duration: 0},
	plugins: {
		tooltip: false;
		legend: {
			display: false,
		},
		datalabels: {
			color: "#ffffff",
			 formatter: (_, context) => context.chart.data.labels[context.dataIndex],
			font: { size: 24 },
		},
	},
});



