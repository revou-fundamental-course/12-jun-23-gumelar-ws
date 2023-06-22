function deleteLastDigit() {
  var celsiusInput = document.getElementById('celsius-input').value;
  var updatedInput = celsiusInput.slice(0, -1);
  document.getElementById('celsius-input').value = updatedInput;
}

function resetInput() {
  document.getElementById('celsius-input').value = '';
  document.getElementById('result').textContent = '';
  document.getElementById('kalkulasi-result').textContent = '';
}

function convertToFahrenheit() {
  let celsiusInput = document.getElementById('celsius-input').value;

  let regexCelciusInput = /^\d+$/;

  if (regexCelciusInput.test(celsiusInput)) {
    let celsius = parseFloat(celsiusInput);
    let fahrenheit = (celsius * 9) / 5 + 32;
    document.getElementById('result').textContent = parseFloat(fahrenheit.toFixed(2)).toString();
    let caraKalkulasi = `${celsius} * 9 / 5 + 32`;
    document.getElementById('kalkulasi-result').textContent = caraKalkulasi;
    document.getElementById('errorResult').textContent = '';
  } else {
    document.getElementById('errorResult').textContent = 'Masukkan suhu dalam bentuk angka !';
    resetInput();
  }
}
