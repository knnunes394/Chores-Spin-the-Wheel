const wheel = document.getElementById("wheel");
const spinButton = document.getElementById("spin-but");
const finalValue = document.getElementById("final");

//Object that stores values of min and max angle for a value
const rotationValues = [
	{ minDeg: 0, maxDeg: 30, value: 2 },
	{ minDeg: 31, maxDeg: 90, value: 1 },
	{ minDeg: 91, maxDeg: 150, value: 6 },
	{ minDeg: 151, maxDeg: 210, value: 5 },
	{ minDeg: 211, maxDeg: 270, value: 4 },
	{ minDeg: 271, maxDeg: 330, value: 3 },
	{ minDeg: 331, maxDeg: 360, value: 2 },
];

//Size of each piece
const data = [16,16,16,16,16,16]; //doesn't have to equal 100

//background color of each piece
var pieColors = [
	"#56e119",
	"#FFC300",
	"#56e119",
	"#FFC300", 
	"#56e119",
	"#FFC300", 
];

window.addEventListener("final-value", function(){
	document.getElementByID("final-value").innerHTML = "Rawr";
});
	


//create chart
let myChart = new Chart(wheel, {
	plugins: [ChartDataLabels],
	type: "pie",
	data: {
		labels: [1,2,3,4,5,6],
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



