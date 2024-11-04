function calculateBMI() {
  const gender = document.getElementById('gender').value;
  const age = document.getElementById('age').value;
  const height = document.getElementById('height').value / 100; // convert cm to meters
  const weight = document.getElementById('weight').value;

  console.log('Gender:', gender);
  console.log('Age:', age);
  console.log('Height:', height);
  console.log('Weight:', weight);

  if (!age || !height || !weight) {
      alert('Harap isi semua bidang!');
      return;
  }

  const bmi = weight / (height * height);
  let resultText;

  if (bmi < 18.5) {
      resultText = 'Berat badan Anda kurang.';
  } else if (bmi >= 18.5 && bmi < 24.9) {
      resultText = 'Berat badan Anda ideal.';
  } else if (bmi >= 25 && bmi < 29.9) {
      resultText = 'Berat badan Anda berlebih.';
  } else {
      resultText = 'Anda mengalami obesitas.';
  }

  document.getElementById('result').innerText = `BMI Anda adalah ${bmi.toFixed(2)}. ${resultText}`;
}
