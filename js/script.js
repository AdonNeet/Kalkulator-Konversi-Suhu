const jenisKonversi = document.getElementById('jenis-konversi');
const inputSuhu = document.getElementById('input-suhu');
const outputSuhu = document.getElementById('output-suhu');
const rumus = document.getElementById('rumus');

jenisKonversi.addEventListener('change', function() {
    hitungKonversi();
    tampilkanRumus();
});

inputSuhu.addEventListener('input', function() {
    hitungKonversi();
});

function hitungKonversi() {
    const selectedOption = jenisKonversi.value;
    const suhu = parseFloat(inputSuhu.value);

    let hasil;
    switch(selectedOption) {
      case 'celsius-to-fahrenheit':
        hasil = suhu * 9/5 + 32;
        break;
      case 'fahrenheit-to-celsius':
        hasil = (suhu - 32) * 5/9;
        break;
      case 'celsius-to-kelvin':
        hasil = suhu + 273.15;
        break;
      case 'kelvin-to-celsius':
        hasil = suhu - 273.15;
        break;
      case 'fahrenheit-to-kelvin':
        hasil = (suhu - 32) * 5/9 + 273.15;
        break;
      case 'kelvin-to-fahrenheit':
        hasil = (suhu - 273.15) * 9/5 + 32;
        break;
    }

    if (isNaN(hasil)) {
      outputSuhu.value = "Input angka tidak terdeteksi";
    } else {
      outputSuhu.value = hasil.toFixed(2);
    }
  }

  function tampilkanRumus() {
    const selectedOption = jenisKonversi.value;
    let rumusText;

    switch(selectedOption) {
      case 'celsius-to-fahrenheit':
        rumusText = "\( E=mc^2 \)";
        break;
      case 'fahrenheit-to-celsius':
        rumusText = "Celsius = (Fahrenheit - 32) × 5/9";
        break;
      case 'celsius-to-kelvin':
        rumusText = "Kelvin = Celsius + 273.15";
        break;
      case 'kelvin-to-celsius':
        rumusText = "Celsius = Kelvin - 273.15";
        break;
      case 'fahrenheit-to-kelvin':
        rumusText = "Kelvin = (Fahrenheit - 32) × 5/9 + 273.15";
        break;
      case 'kelvin-to-fahrenheit':
        rumusText = "Fahrenheit = (Kelvin - 273.15) × 9/5 + 32";
        break;
    }

    rumus.value = rumusText;
}

hitungKonversi();
tampilkanRumus();