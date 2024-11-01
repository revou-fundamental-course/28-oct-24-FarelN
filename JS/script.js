function calculateBMI() {
    const weight = document.getElementById("weight").value;
    const height = document.getElementById("height").value / 100; // konversi tinggi ke meter
    const bmi = weight / (height * height);

    let category;
    if (bmi < 18.5) {
        category = "Kekurangan berat badan";
    } else if (bmi < 24.9) {
        category = "Normal";
    } else if (bmi < 29.9) {
        category = "Kelebihan berat badan";
    } else {
        category = "Obesitas";
    }

    document.getElementById("result").innerText = `BMI Anda: ${bmi.toFixed(2)} (${category})`;
}
