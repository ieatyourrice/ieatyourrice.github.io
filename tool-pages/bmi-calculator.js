
// JavaScript for BMI Calculator with dynamic scale
function calculateBMI() {
    const weight = parseFloat(document.getElementById("weight").value);
    const height = parseFloat(document.getElementById("height").value) / 100;
    const resultSection = document.getElementById("bmiResult");
    const bmiValueElement = document.getElementById("bmiValue");
    const bmiCategoryElement = document.getElementById("bmiCategory");
    const bmiMarker = document.getElementById("bmiMarker");

    if (!weight || !height) {
        alert("Bitte geben Sie gültige Werte für Gewicht und Größe ein.");
        return;
    }

    const bmi = weight / (height * height);
    let category = "";
    let markerPosition = 0;

    if (bmi < 18.5) {
        category = "Untergewicht";
        markerPosition = 10;
    } else if (bmi >= 18.5 && bmi < 25) {
        category = "Normalgewicht";
        markerPosition = 40;
    } else if (bmi >= 25 && bmi < 30) {
        category = "Übergewicht";
        markerPosition = 70;
    } else {
        category = "Adipositas";
        markerPosition = 90;
    }

    bmiValueElement.textContent = `Ihr BMI: ${bmi.toFixed(2)}`;
    bmiCategoryElement.textContent = `Kategorie: ${category}`;
    bmiMarker.style.left = `${markerPosition}%`;
    resultSection.style.display = "block";
}
