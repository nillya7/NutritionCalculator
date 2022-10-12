const calculteBMIBtn = document.getElementById('calculateBMI');
const heightInput = document.getElementById('height');
const weightInput = document.getElementById('weight');

const nameInput = document.getElementById('Name');
const dobInput = document.getElementById('dob');
const genderInput = document.getElementById('gender');
const waistSizeInput = document.getElementById('waistSize');
const neckSizeInput = document.getElementById('neckSize');
const hipSizeInput = document.getElementById('hipSize');

const squatKgInput = document.getElementById('squatKg');
const squatResistancesInput = document.getElementById('squatResistances');
const benchPressKgInput = document.getElementById('benchPressKg');
const benchPressResistancesInput = document.getElementById('benchPressResistances');
const yearsExpirienceInput = document.getElementById('yearsExpirience');
const yourProgressInput = document.getElementById('yourProgress');
const visualChangesInput = document.getElementById('visualChanges');

const selectLifesyleInput = document.getElementById('selectLifesyle');
const liftInput = document.getElementById('lift');
const spetsInput = document.getElementById('spets');

const percentCaloriesFromFatInput = document.getElementById('percentCaloriesFromFat');
const goalInput = document.getElementById('goalSelect');


const calculateBtnInput = document.getElementById('calculateBtn');

const RM1 = [
    {
        Repetitions: 1,
        PercentageOf1RM: 100
    },
    {
        Repetitions: 2,
        PercentageOf1RM: 97
    },
    {
        Repetitions: 3,
        PercentageOf1RM: 94
    },
    {
        Repetitions: 4,
        PercentageOf1RM: 92
    },
    {
        Repetitions: 5,
        PercentageOf1RM: 89
    },
    {
        Repetitions: 6,
        PercentageOf1RM: 86
    },
    {
        Repetitions: 7,
        PercentageOf1RM: 83
    },
    {
        Repetitions: 8,
        PercentageOf1RM: 81
    },
    {
        Repetitions: 9,
        PercentageOf1RM: 78
    },
    {
        Repetitions: 10,
        PercentageOf1RM: 75
    },
    {
        Repetitions: 11,
        PercentageOf1RM: 73
    },
    {
        Repetitions: 12,
        PercentageOf1RM: 71
    },
    {
        Repetitions: 13,
        PercentageOf1RM: 70
    },
    {
        Repetitions: 14,
        PercentageOf1RM: 68
    },
    {
        Repetitions: 15,
        PercentageOf1RM: 67
    },
    {
        Repetitions: 16,
        PercentageOf1RM: 65
    },
    {
        Repetitions: 17,
        PercentageOf1RM: 64
    },
    {
        Repetitions: 18,
        PercentageOf1RM: 63
    },
    {
        Repetitions: 19,
        PercentageOf1RM: 61
    },
    {
        Repetitions: 20,
        PercentageOf1RM: 60
    },
    {
        Repetitions: 21,
        PercentageOf1RM: 59
    },
    {
        Repetitions: 22,
        PercentageOf1RM: 58
    },
    {
        Repetitions: 23,
        PercentageOf1RM: 57
    },
    {
        Repetitions: 24,
        PercentageOf1RM: 56
    },
    {
        Repetitions: 25,
        PercentageOf1RM: 55
    },
    {
        Repetitions: 26,
        PercentageOf1RM: 54
    },
    {
        Repetitions: 27,
        PercentageOf1RM: 53
    },
    {
        Repetitions: 28,
        PercentageOf1RM: 52
    },
    {
        Repetitions: 29,
        PercentageOf1RM: 51
    },
    {
        Repetitions: 30,
        PercentageOf1RM: 50
    }
    
];
    

// calcuate age
function calculateAge() {
    let dobValue = new Date(dobInput.value)
    let today = new Date()
    let age = today.getFullYear() - dobValue.getFullYear()
    var m = today.getMonth() - dobValue.getMonth(); // 10, 11
    if(m<0 || (m === 0 && today.getDate() < dobValue.getDate())) {
        age --
    }
 
    console.log("You are " + age + " years old")

}


// calculate BMI function
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

//outpt
// let divBMIValue = document.createElement('div');
// divBMIValue.innerText = 'Your BMI is: ' + BMIValue;
// divBMIValue.id = "divBMIValue"
// document.body.appendChild(divBMIValue);

// let divBMIExplanation = document.createElement('div');
// divBMIExplanation.innerText = divBMIExplanationValue;
// divBMIExplanation.iv = "divBMIExplanation";
// document.body.appendChild(divBMIExplanation);

console.log("Your BMI is: " + BMIValue)
console.log("This BMI value means: " + divBMIExplanationValue)
}


// calculate body composition - fat and muscles
function calculateBodyComposition() {
    let waistValue = Number(waistSizeInput.value);
    let neckValue = Number(neckSizeInput.value);
    let hipValue = Number(hipSizeInput.value);
    let heightValue = Number(heightInput.value);
    let genderValue = genderInput.value;
    let weightValue = Number(weightInput.value); 

    // body fat percent
    let bodyFatMale = (Math.round(((495 / (1.0324 - (0.19077 * Math.log10(waistValue-neckValue)) + (0.15456 * Math.log10(heightValue*100)))) - 450) * 10) / 10)
    let bodyFatFemale = Math.round(((495/ ((1.29579)- ((0.35004) * Math.log10((waistValue) + (hipValue) - (neckValue))) + (0.221*(Math.log10(heightValue * 100))))) - 450) * 10) / 10
                    
    
    if(genderValue === "male") {
        console.log("bodyFatMale " + bodyFatMale + "%")
    } else if (genderValue === "female") {
        console.log("bodyFatFemale " + bodyFatFemale + "%")
    };
    
    // body fat mass
    let bodyFatMassMale = (weightValue * bodyFatMale/100) 
    let bodyFatMassFemale = (weightValue * bodyFatFemale/100)

    if(genderValue === "male") {
        console.log("bodyFatMassMale: " + bodyFatMassMale + "kg")
    } else if (genderValue === "female") {
        console.log("bodyFatMassFemale: " + bodyFatMassFemale + "kg")
    };
    

    // lean body mass percent
    let leanBodyMassMale = weightValue - bodyFatMassMale
    let leanBodyMassFemale = weightValue - bodyFatMassFemale

    if(genderValue === "male") {
        console.log("leanBodyMassMale: " + leanBodyMassMale + "kg")
    } else if (genderValue === "female") {
        console.log("leanBodyMassFemale: " + leanBodyMassFemale + "kg")
    };


    // level of body fat || 
    var levelBodyFat = 0
    // 0 = very low
    // 1 = low
    // 2 = moderate
    // 3 = high

    if (genderValue === "male") {
        if(bodyFatMale <= 6) {
        levelBodyFat = 0
        } else if(bodyFatMale > 6 && bodyFatMale < 12) {
            levelBodyFat = 1
            } else if(bodyFatMale >= 12 && bodyFatMale < 20) {
                levelBodyFat = 2
                } else if(bodyFatMale >= 20) {
                    levelBodyFat = 3
                    }
    } else if (genderValue === "female") {
        if(bodyFatFemale <= 16) {
            levelBodyFat = 0
            } else if(bodyFatFemale > 16 && bodyFatMale < 22) {
                levelBodyFat = 1
                } else if(bodyFatFemale >= 22 && bodyFatMale < 28) {
                    levelBodyFat = 2
                    } else if(bodyFatFemale >= 28) {
                        levelBodyFat = 3
                        }
        
    };
    console.log("Your levelBodyFat is: " + levelBodyFat);

};

// calculte RMR and neutral balance
function calculateBurningCalories(activityFactor) {
    let weightValue = weightInput.value;
    let RMR = 22*weightValue;
    console.log("You RMR is: " + RMR);

    let neutralBalance = RMR * activityFactor
    console.log("You neutralBalance is: " + neutralBalance);
}


// calculate activity factor
function calculateActivityFactor(callback) {
    let selectLifesyleValue = selectLifesyleInput.value;
    let liftValue = liftInput.value;
    let spetsValue = spetsInput.value;

    console.log("selectLifesyleValue: " + selectLifesyleValue)
    console.log(liftValue)
    console.log(spetsValue)

    var activityFactor = 0;
    
    if(selectLifesyleValue === "MainlySeated" && liftValue === "liftNo" && spetsValue === "LessThan6000") {
        activityFactor = 1.1
    } else if (selectLifesyleValue === "MainlySeated" && liftValue === "liftNo" && spetsValue === "MoreThan6000") {
        activityFactor = 1.2
    } else if (selectLifesyleValue === "MainlySeated" && liftValue === "liftYes" && spetsValue === "LessThan6000") {
        activityFactor = 1.3
    } else if (selectLifesyleValue === "MainlySeated" && liftValue === "liftYes" && spetsValue === "MoreThan6000") {
        activityFactor = 1.5
    } 

    else if (selectLifesyleValue === "MildActive" && liftValue === "liftNo" && spetsValue === "LessThan6000") {
        activityFactor = 1.3
    } else if (selectLifesyleValue === "MildActive" && liftValue === "liftNo" && spetsValue === "MoreThan6000") {
        activityFactor = 1.5
    } else if (selectLifesyleValue === "MildActive" && liftValue === "liftYes" && spetsValue === "LessThan6000") {
        activityFactor = 1.5
    } else if (selectLifesyleValue === "MildActive" && liftValue === "liftYes" && spetsValue === "MoreThan6000") {
        activityFactor = 1.7
    }

    else if (selectLifesyleValue === "Active" && liftValue === "liftNo" && spetsValue === "LessThan6000") {
        activityFactor = 1.5
    } else if (selectLifesyleValue === "Active" && liftValue === "liftNo" && spetsValue === "MoreThan6000") {
        activityFactor = 1.7
    } else if (selectLifesyleValue === "Active" && liftValue === "liftYes" && spetsValue === "LessThan6000") {
        activityFactor = 1.7
    } else if (selectLifesyleValue === "Active" && liftValue === "liftYes" && spetsValue === "MoreThan6000") {
        activityFactor = 2
    }

    else if (selectLifesyleValue === "Active" && liftValue === "liftNo" && spetsValue === "LessThan6000") {
        activityFactor = 1.7
    } else if (selectLifesyleValue === "Active" && liftValue === "liftNo" && spetsValue === "MoreThan6000") {
        activityFactor = 2
    } else if (selectLifesyleValue === "Active" && liftValue === "liftYes" && spetsValue === "LessThan6000") {
        activityFactor = 2
    } else if (selectLifesyleValue === "Active" && liftValue === "liftYes" && spetsValue === "MoreThan6000") {
        activityFactor = 2.2
    }

    callback(activityFactor)
    console.log("Your activity Factor is: " + activityFactor)
}

// calculte trainer level
function calculateTrainerLevel() {
    let squatKgValue = Number(squatKgInput.value)
    let squatResistancesValue = Number(squatResistancesInput.value)
    let benchPressKgValue = Number(benchPressKgInput.value)
    let benchPressResistancesValue = Number(benchPressResistancesInput.value)
    let yearsExpirienceValue = yearsExpirienceInput.value
    let yourProgressValue = yourProgressInput.value
    let visualChangesValue = visualChangesInput.value
    let genderValue = genderInput.value;
    let weightValue = Number(weightInput.value);   

    console.log("squatResistancesValue " + squatResistancesValue)
    console.log("squatKgValue " + squatKgValue)
    

    // RM1 for Squat
    for (let i=0; i<RM1.length ; i++) {
        if(RM1[i].Repetitions === squatResistancesValue) {
            var RM1SquatPercent = RM1[i].PercentageOf1RM
        }
    }
    console.log("Your RM1SquatPercent is: " + RM1SquatPercent + "%")
    
    let RM1Squat = Math.round(squatKgValue / (RM1SquatPercent/100) * 10) / 10
    console.log("Your RM1Squat is: " + RM1Squat + "kg")

    // Squat: ratio lift to body weight
    let ratioBodyMassSquat = Math.round(RM1Squat / weightValue * 10) / 10
    console.log("Your ratioBodyMassSquat: " + ratioBodyMassSquat)

    // Squat: Trainer level
    if (genderValue === "male") {
        if (ratioBodyMassSquat <= 1.2) {
            var trainerLevelSquat = 1
        } else if (ratioBodyMassSquat > 1.2 && ratioBodyMassSquat < 1.7) {
            var trainerLevelSquat = 2
        } else if (ratioBodyMassSquat >= 1.7) {
            var trainerLevelSquat = 3 
        };
        console.log("Your Trainer Level (squat) is: " + trainerLevelSquat)
        
    } else if (genderValue === "female") {
        if (ratioBodyMassSquat <= 1) {
            var trainerLevelSquat = 1
        } else if (ratioBodyMassSquat > 1 && ratioBodyMassSquat < 1.5) {
            var trainerLevelSquat = 2
        } else if (ratioBodyMassSquat >= 1.5) {
            var trainerLevelSquat = 3 
        };
        console.log("Your Trainer Level (squat) is: " + trainerLevelSquat)
    }

    

    // RM1 for Bench
    for (let i=0; i<RM1.length ; i++) {
        if(RM1[i].Repetitions === benchPressResistancesValue) {
            var RM1SBenchPercent = RM1[i].PercentageOf1RM
        }
    }
    console.log("Your RM1SBenchPercent is: " + RM1SBenchPercent + "%")
    
    let RM1Bench = Math.round(benchPressKgValue / (RM1SBenchPercent/100) * 10) / 10
    console.log("Your RM1Bench is: " + RM1Bench + "kg")

    // Bench: ratio lift to body weight
    let ratioBodyMassBench = Math.round(RM1Bench / weightValue * 10) / 10
    console.log("Your ratioBodyMassBench: " + ratioBodyMassBench)


    // Bench: Trainer level

    if (genderValue === "male") {
        if (ratioBodyMassBench <= 1) {
            var trainerLevelBench = 1
        } else if (ratioBodyMassBench > 1 && ratioBodyMassBench < 1.3) {
            var trainerLevelBench = 2
        } else if (ratioBodyMassBench >= 1.3) {
            var trainerLevelBench = 3 
        };
        console.log("Your Trainer Level (bench) is: " + trainerLevelBench)

    } else if (genderValue === "female") {
        if (ratioBodyMassBench <= 0.5) {
            var trainerLevelBench = 1
        } else if (ratioBodyMassBench > 0.5 && ratioBodyMassBench < 1) {
            var trainerLevelBench = 2
        } else if (ratioBodyMassBench >= 1) {
            var trainerLevelBench = 3 
        };
        console.log("Your Trainer Level (bench) is: " + trainerLevelBench)
    }
    

    // years of expirience 
    if (yearsExpirienceValue === "0to2years") {
        var trainerLevelExpirience = 1
    } else if (yearsExpirienceValue === "2to5years") {
        var trainerLevelExpirience = 2
    } else if (yearsExpirienceValue === "MoreThan5years") {
        var trainerLevelExpirience = 3
    };
    console.log("Your Trainer Level (expirience) is: " + trainerLevelExpirience)

    // progress 
    if (yourProgressValue === "weeklyBasis") {
        var trainerLevelProgress = 1
    } else if (yourProgressValue === "MonthlyBasis") {
        var trainerLevelProgress = 2
    } else if (yourProgressValue === "AlofMonthsToYears") {
        var trainerLevelProgress = 3
    };
    console.log("Your Trainer Level (progress) is: " + trainerLevelProgress)


    // Visual Changes 
    if (visualChangesValue === "MonthlyBasis") {
        var trainerLevelVisualChange = 1
    } else if (visualChangesValue === "AlofMonths") {
        var trainerLevelVisualChange = 2
    } else if (visualChangesValue === "cannotSeen") {
        var trainerLevelVisualChange = 3
    };
    console.log("Your Trainer Level (visual changes) is: " + trainerLevelVisualChange)

    // levels
    // beginner = 1
    // moderate = 2
    // advanced = 3


    // summary of trainer value
    trainerLevel = Number(trainerLevelSquat) + Number(trainerLevelBench) + Number(trainerLevelExpirience) + Number(trainerLevelProgress) + Number(trainerLevelVisualChange)
    console.log("trainerLevel is: " + trainerLevel)

    if (trainerLevel <= 8) {
        var trainerLevelName = "Beginner"
    } else if (trainerLevel > 8 && trainerLevel <= 11) {
        var trainerLevelName = "Moderate"
    } else if (trainerLevel > 12) {
        var trainerLevelName = "Advanced"
    } else {""}
    console.log("trainerLevelName is: " + trainerLevelName)

}



// calculate calorie strategy - wanted
function calculateCalorieStrategy() {
    let goalValue = goalInput.value;
    console.log("goalValue is: " + goalValue)

}

// calculate calorie strategy - recommended


// calculte the recomended nutrition plan




// on click "do the magin" btn
calculateBtnInput.addEventListener('click', function() {
    calculateAge();
    calculteBMI();
    calculateBodyComposition();
    calculateTrainerLevel();
    calculateActivityFactor(calculateBurningCalories);
    calculateCalorieStrategy();
    
})


// //on click button
// calculteBMIBtn.addEventListener('click', function() {
//     calculteBMI();
    
// })

