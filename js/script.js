const jenisKonversi = document.getElementById('jenis-konversi');
const inputSuhu = document.getElementById('input-suhu');
const outputSuhu = document.getElementById('output-suhu');
const kalkulasi = document.getElementById('kalkulasi');
const rumus = document.getElementById('rumus');

const textarea = document.getElementById('input-suhu');

textarea.addEventListener('keydown', function(event) {
  // Mendapatkan kode tombol yang ditekan
  const keyCode = event.keyCode || event.which;

  // Mengecek apakah pengguna menekan tombol Ctrl bersamaan dengan tombol C atau V
  if ((event.ctrlKey || event.metaKey) && (keyCode === 67 || keyCode === 86 || keyCode === 83 || keyCode === 90)) {
    // Memperbolehkan tindakan Ctrl+C (copy) dan Ctrl+V (paste)
    return;
  }

  // Cek jika tombol yang ditekan adalah spasi atau enter
  if ((keyCode !== 32 || keyCode !== 13) &&
      !(keyCode >= 48 && keyCode <= 57) &&  // cek untuk angka di atas keyboard
      !(keyCode >= 96 && keyCode <= 105) && // cek untuk angka di keypad
      keyCode !== 8 &&  // backspace
      keyCode !== 37 && // panah kiri
      keyCode !== 39 && // panah kanan
      keyCode !== 46 && // delete
      keyCode !== 9
      ) {
    // Mencegah default action (penambahan spasi atau enter)
    event.preventDefault();
  }
});

jenisKonversi.addEventListener('change', function() {
    hitungKonversi();
    tampilkanCalc();
});

inputSuhu.addEventListener('input', function() {
    hitungKonversi();
    tampilkanCalc();
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

  function tampilkanCalc() {
    const selectedOption = jenisKonversi.value;
    const suhu = inputSuhu.value;
    let calcText;

    switch(selectedOption) {
      case 'celsius-to-fahrenheit':
        calcText = suhu +" * 9/5 + 32 = " + outputSuhu.value;
        break;
      case 'fahrenheit-to-celsius':
        calcText = "Celsius = (Fahrenheit - 32) × 5/9";
        break;
      case 'celsius-to-kelvin':
        calcText = "Kelvin = Celsius + 273.15";
        break;
      case 'kelvin-to-celsius':
        calcText = "Celsius = Kelvin - 273.15";
        break;
      case 'fahrenheit-to-kelvin':
        calcText = "Kelvin = (Fahrenheit - 32) × 5/9 + 273.15";
        break;
      case 'kelvin-to-fahrenheit':
        calcText = "Fahrenheit = (Kelvin - 273.15) × 9/5 + 32";
        break;
    }

    if (outputSuhu.value == "Input angka tidak terdeteksi") {
      kalkulasi.value = "Tidak ada kalkulasi yang terjadi";
    } else {
      kalkulasi.value = calcText;
    }
    
}

function tampilkanRumus() {
  const selectedOption = jenisKonversi.value;
  let rumusText;

  switch(selectedOption) {
    case 'celsius-to-fahrenheit':
      rumusText = suhu +" * 9/5 + 32 = " + outputSuhu.value;
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
tampilkanCalc();