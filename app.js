
function calculteBMI() {
let heightValue = heightInput.value;
let weightValue = weightInput.value;

let BMIValue = (Math.round((weightValue / (Math.pow(heightValue,2))) * 10)) / 10;
if (BMIValue < 16 && BMIValue > 10) {
    divBMIExplanationValue = "Severe Thinness";
} else if (BMIValue >= 16 && BMIValue < 17) {
    divBMIExplanationValue = "Moderate Thinness";
} else if (BMIValue >= 17 && BMIValue < 18.5) {
    divBMIExplanationValue = "Mild Thinness";
} else if (BMIValue >= 18.5 && BMIValue <= 25) {
    divBMIExplanationValue = "Normal";
} else if (BMIValue > 25 && BMIValue < 30) {
    divBMIExplanationValue = "Overweight";
} else if (BMIValue >= 30) {
    divBMIExplanationValue = "Extreme Overweight";
} else {
    divBMIExplanationValue = "Something is wrong here!"
}

let divBMIValue = document.createElement('div');
divBMIValue.innerText = 'Your BMI is: ' + BMIValue;
divBMIValue.id = "divBMIValue"
document.body.appendChild(divBMIValue);

let divBMIExplanation = document.createElement('div');
divBMIExplanation.innerText = divBMIExplanationValue;
divBMIExplanation.iv = "divBMIExplanation";
document.body.appendChild(divBMIExplanation);

}


const calculteBMIBtn = document.getElementById('calculateBMI');
const heightInput = document.getElementById('height');
const weightInput = document.getElementById('weight');


calculteBMIBtn.addEventListener('click', function() {
    calculteBMI();
})