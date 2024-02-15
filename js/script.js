const jenisKonversi = document.getElementById('jenis-konversi');
const inputSuhu = document.getElementById('input-suhu');
const outputSuhu = document.getElementById('output-suhu');
const kalkulasi = document.getElementById('kalkulasi');
const descRumus = document.getElementById('descRumus');
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

  if(keyCode === 13) { // ketika enter, maka tampilkan hasilnya
    event.preventDefault();
    hitungKonversi();   
    tampilkanCalc();
    tampilkanRumus();
  }

  // Cek jika tombol yang ditekan adalah spasi]
  if (keyCode !== 32 &&
      !(keyCode >= 48 && keyCode <= 57) &&  // cek untuk angka di atas keyboard
      !(keyCode >= 96 && keyCode <= 105) && // cek untuk angka di keypad
      !(keyCode === 190) && // cek titik sebagai koma
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

document.body.addEventListener('keydown', function(event) { // ketika tidak di textarea
  const keyCode = event.keyCode || event.which; 

  if(keyCode === 13) { // ketika enter, maka tampilkan hasilnya
    event.preventDefault();
    hitungKonversi();   
    tampilkanCalc();
    tampilkanRumus();
  }
});

// jenisKonversi.addEventListener('change', function() {
//   hitungKonversi();
//   tampilkanCalc();
//   tampilkanRumus();
// });

// inputSuhu.addEventListener('input', function() {
//   hitungKonversi();
//   tampilkanCalc();
//   tampilkanRumus();
// });

function konversi() { // jika ingin input otomatis di kalkulasi uncomment 2 event listener diatas
  hitungKonversi();   // kemudian comment fungsi ini
  tampilkanCalc();
  tampilkanRumus();
}

// Fungsi untuk membalikkan jenis konversi
function reverseKonversi() {
  const selectedOption = jenisKonversi.value;
  let reversedOption;

  switch(selectedOption) {
    case 'celsius-to-fahrenheit':
      reversedOption = 'fahrenheit-to-celsius';
      break;
    case 'fahrenheit-to-celsius':
      reversedOption = 'celsius-to-fahrenheit';
      break;
    case 'celsius-to-kelvin':
      reversedOption = 'kelvin-to-celsius';
      break;
    case 'kelvin-to-celsius':
      reversedOption = 'celsius-to-kelvin';
      break;
    case 'fahrenheit-to-kelvin':
      reversedOption = 'kelvin-to-fahrenheit';
      break;
    case 'kelvin-to-fahrenheit':
      reversedOption = 'fahrenheit-to-kelvin';
      break;
  }

  jenisKonversi.value = reversedOption;
  hitungKonversi();  // uncomment jika ingin input otomatis di kalkulasi setelah di reverse
  tampilkanCalc();   
  tampilkanRumus();
}

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
        calcText = suhu +" * (9/5) + 32 = " + outputSuhu.value;
        break;
      case 'fahrenheit-to-celsius':
        calcText = "("+ suhu +" - 32) * (5/9) = " + outputSuhu.value;
        break;
      case 'celsius-to-kelvin':
        calcText = suhu + " + 273.15 = " + outputSuhu.value;
        break;
      case 'kelvin-to-celsius':
        calcText = suhu + " - 273.15 = " + outputSuhu.value;
        break;
      case 'fahrenheit-to-kelvin':
        calcText = "(" + suhu + " - 32) * (5/9) + 273.15 = " + outputSuhu.value;
        break;
      case 'kelvin-to-fahrenheit':
        calcText = "(" + suhu + " - 273.15) * (9/5) + 32 = " + outputSuhu.value;
        break;
    }

    if (outputSuhu.value === "Input angka tidak terdeteksi") {
      kalkulasi.value = "Tidak ada kalkulasi yang terjadi";
    } else {
      kalkulasi.value = calcText;
    }
    
}

function tampilkanRumus() {
  const selectedOption = jenisKonversi.value;
  let desc, rumusText;

  switch(selectedOption) {
    case 'celsius-to-fahrenheit':
      desc = "\\text{Suhu } S \\text{ dalam derajat Fahrenheit (\\degree F) sama dengan suhu }  S \\text{ dalam derajat } \\\\ \\text{Celcius (\\degree C) kali } \\frac{9}{5} \\text{ ditambah } 32";
      rumusText = "\\Large S_{(\\degree F)} = (S_{(\\degree C)} \\times \\frac{9}{5}) + 32 \\\\ \\text{ } \\\\ \\text{atau} \\\\ \\text{ } \\\\ S_{(\\degree F)} = (S_{(\\degree C)} \\times 1.8) + 32";
      break;
    case 'fahrenheit-to-celsius':
      desc = "\\text{Suhu } S \\text{ dalam derajat Celcius (\\degree C) sama dengan suhu }  S \\text{ dalam derajat } \\\\ \\text{Fahrenheit (\\degree F) dikurangi } 32 \\text{ kemudian kali } \\frac{5}{9}";
      rumusText = "\\Large S_{(\\degree C)} = (S_{(\\degree F)} - 32 ) \\times \\frac{5}{9}";
      break;
    case 'celsius-to-kelvin':
      desc = "\\text{Suhu } S \\text{ dalam derajat Kelvin (\\degree K) sama dengan suhu }  S \\text{ dalam derajat } \\\\ \\text{Celcius (\\degree C) ditambah } 273.15";
      rumusText = "\\Large S_{(\\degree K)} = S_{(\\degree C)} + 273.15";
      break;
    case 'kelvin-to-celsius':
      desc = "\\text{Suhu } S \\text{ dalam derajat Celcius (\\degree C) sama dengan suhu }  S \\text{ dalam derajat } \\\\ \\text{Kelvin (\\degree K) dikurangi } 273.15";
      rumusText = "\\Large S_{(\\degree C)} = S_{(\\degree K)} - 273.15";
      break;
    case 'fahrenheit-to-kelvin':
      desc = "\\text{Suhu } S \\text{ dalam derajat Kelvin (\\degree K) sama dengan suhu }  S \\text{ dalam derajat } \\\\ \\text{Fahrenheit (\\degree F) dikurangi } 32 \\text{ kali } \\frac{5}{9} \\text{ ditambah } 273.15";
      rumusText = "\\Large S_{(\\degree K)} = (S_{(\\degree F)} - 32) \\times \\frac{5}{9} + 273.15";
      break;
    case 'kelvin-to-fahrenheit':
      desc = "\\text{Suhu } S \\text{ dalam derajat Fahrenheit (\\degree F) sama dengan suhu }  S \\text{ dalam derajat } \\\\ \\text{Kelvin (\\degree K) dikurangi } 273.15 \\text{ kali } \\frac{9}{5} \\text{ ditambah } 32";
      rumusText = "\\Large S_{(\\degree K)} = (S_{(\\degree F)} - 273.15) \\times \\frac{9}{5} + 32 \\\\ \\text{ } \\\\ \\text{atau} \\\\ \\text{ } \\\\ S_{(\\degree K)} = (S_{(\\degree F)} - 273.15) \\times 1.8 + 32";
      break;
  }

  katex.render(desc, descRumus);
  katex.render(rumusText, rumus);
}

// init script
hitungKonversi();
tampilkanCalc();
tampilkanRumus();