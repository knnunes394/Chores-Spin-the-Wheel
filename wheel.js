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
	document.getElementByID("spin").innerHTML = "Rawr";
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
//display value based on the randomAngle
const valueGenerator = (angleValue) => {
  for (let i of rotationValues) {
    //if the angleValue is between min and max then display it
    if (angleValue >= i.minDeg && angleValue <= i.maxDeg) {
      finalValue.innerHTML = `<p>Value: ${i.value}</p>`;
      spinButton.disabled = false;
      break;
    }
  }
};

//Spinner count
let count = 0;
//100 rotations for animation and last rotation for result
let resultValue = 101;
//Start spinning
spinButton.addEventListener("click", () => {
  spinButton.disabled = true;
  //Empty final value
  finalValue.innerHTML = `<p>Good Luck!</p>`;
  //Generate random degrees to stop at
  let randomDegree = Math.floor(Math.random() * (355 - 0 + 1) + 0);
  //Interval for rotation animation
  let rotationInterval = window.setInterval(() => {
    //Set rotation for piechart
    /*
    Initially to make the piechart rotate faster we set resultValue to 101 so it rotates 101 degrees at a time and this reduces by 1 with every count. Eventually on last rotation we rotate by 1 degree at a time.
    */
    myChart.options.rotation = myChart.options.rotation + resultValue;
    //Update chart with new value;
    myChart.update();
    //If rotation>360 reset it back to 0
    if (myChart.options.rotation >= 360) {
      count += 1;
      resultValue -= 5;
      myChart.options.rotation = 0;
    } else if (count > 15 && myChart.options.rotation == randomDegree) {
      valueGenerator(randomDegree);
      clearInterval(rotationInterval);
      count = 0;
      resultValue = 101;
    }
  }, 10);
});



