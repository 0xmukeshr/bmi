document.getElementById("calculate").addEventListener("click", function () {
  let height = parseFloat(document.getElementById("height").value);
  const heightUnit = document.getElementById("height-unit").value;
  let weight = parseFloat(document.getElementById("weight").value);
  const weightUnit = document.getElementById("weight-unit").value;

  // Convert height to meters
  if (heightUnit === "cm") {
    height = height / 100;
  } else if (heightUnit === "inches") {
    height = height * 0.0254;
  }

  // Convert weight to kilograms
  if (weightUnit === "lbs") {
    weight = weight * 0.453592;
  }

  if (height > 0 && weight > 0) {
    const bmi = (weight / (height * height)).toFixed(2);
    let status = "";
    let feedback = "";

    if (bmi < 18.5) {
      status = "Underweight";
      feedback =
        "Consider eating more nutritious foods and increasing calorie intake to reach a healthier weight.";
    } else if (bmi >= 18.5 && bmi < 24.9) {
      status = "Normal weight";
      feedback =
        "Great job! Keep maintaining a balanced diet and regular exercise to stay healthy.";
    } else if (bmi >= 25 && bmi < 29.9) {
      status = "Overweight";
      feedback =
        "You might benefit from adopting healthier eating habits and increasing your physical activity.";
    } else {
      status = "Obesity";
      feedback =
        "It may be helpful to consult with a healthcare provider to create a plan for achieving a healthier weight.";
    }

    document.getElementById(
      "result"
    ).innerText = `Your BMI is ${bmi} (${status}). ${feedback}`;
  } else {
    document.getElementById("result").innerText =
      "Please enter valid height and weight";
  }
});

document.getElementById("clear").addEventListener("click", function () {
  document.getElementById("height").value = "";
  document.getElementById("weight").value = "";
  document.getElementById("result").innerText = "";
});
