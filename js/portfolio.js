// Portfolio Calculator Functions

// BMI Calculator
function calculateBMI() {
  const weight = parseFloat(document.getElementById("weight").value);
  const height = parseFloat(document.getElementById("height").value);
  const resultDiv = document.getElementById("bmi-result");

  if (weight && height && weight > 0 && height > 0) {
    const heightInMeters = height / 100;
    const bmi = weight / (heightInMeters * heightInMeters);
    const bmiRounded = bmi.toFixed(1);

    let category = "";
    if (bmi < 18.5) {
      category = "Underweight";
    } else if (bmi < 25) {
      category = "Normal weight";
    } else if (bmi < 30) {
      category = "Overweight";
    } else {
      category = "Obese";
    }

    resultDiv.innerHTML = `
            <div class="bmi-result">BMI: ${bmiRounded}</div>
            <div class="bmi-category">${category}</div>
        `;
  } else {
    resultDiv.innerHTML =
      '<div class="bmi-result">Please enter valid weight and height</div>';
  }
}

// Simple Calculator
let displayValue = "";

function appendToDisplay(value) {
  displayValue += value;
  document.getElementById("calc-display").value = displayValue;
}

function clearDisplay() {
  displayValue = "";
  document.getElementById("calc-display").value = displayValue;
}

function calculate() {
  try {
    const result = eval(displayValue);
    if (isFinite(result)) {
      displayValue = result.toString();
      document.getElementById("calc-display").value = displayValue;
    } else {
      displayValue = "";
      document.getElementById("calc-display").value = "Error";
    }
  } catch (error) {
    displayValue = "";
    document.getElementById("calc-display").value = "Error";
  }
}

// Grade Calculator
function calculateGrade() {
  const score = parseFloat(document.getElementById("score").value);
  const resultDiv = document.getElementById("grade-result");

  if (score >= 0 && score <= 100) {
    let grade, gradePoint, degreeClass;

    if (score >= 70) {
      grade = "A";
      gradePoint = "5.0";
      degreeClass = "First Class Honours";
    } else if (score >= 60) {
      grade = "B";
      gradePoint = "4.0";
      degreeClass = "Second Class Honours (Upper)";
    } else if (score >= 50) {
      grade = "C";
      gradePoint = "3.0";
      degreeClass = "Second Class Honours (Lower)";
    } else if (score >= 45) {
      grade = "D";
      gradePoint = "2.0";
      degreeClass = "Third Class Honours";
    } else if (score >= 40) {
      grade = "E";
      gradePoint = "1.0";
      degreeClass = "Pass";
    } else {
      grade = "F";
      gradePoint = "0.0";
      degreeClass = "Fail";
    }

    resultDiv.innerHTML = `
            <div class="grade-result">Grade: ${grade} (${gradePoint})</div>
            <div class="grade-details">${degreeClass}</div>
        `;
  } else {
    resultDiv.innerHTML =
      '<div class="grade-result">Please enter a valid score (0-100)</div>';
  }
}

// Add keyboard support for calculator
document.addEventListener("DOMContentLoaded", function () {
  const calcDisplay = document.getElementById("calc-display");
  if (calcDisplay) {
    calcDisplay.addEventListener("keydown", function (e) {
      if (e.key === "Enter") {
        calculate();
      }
    });
  }

  // Add keyboard support for input fields
  const inputs = document.querySelectorAll('input[type="number"]');
  inputs.forEach((input) => {
    input.addEventListener("keydown", function (e) {
      if (e.key === "Enter") {
        // Find the corresponding calculate button and click it
        const parent = this.closest(".calculator");
        if (parent) {
          const calcBtn = parent.querySelector(".calc-btn");
          if (calcBtn) {
            calcBtn.click();
          }
        }
      }
    });
  });
});
