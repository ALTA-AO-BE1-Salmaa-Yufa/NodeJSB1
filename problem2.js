function cariBilanganPrima(jumlahPrima) {
    var bilanganPrima = [];
    var num = 2;
  
    while (bilanganPrima.length < jumlahPrima) {
      if (isPrima(num)) {
        bilanganPrima.push(num);
      }
      num++;
    }
  
    return bilanganPrima;
  }
  
  function isPrima(num) {
    for (var i = 2; i < num; i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return num > 1;
  }
  
  var jumlahPrima = 10;
  var deretBilanganPrima = cariBilanganPrima(jumlahPrima);
  console.log("Sepuluh deret bilangan prima: " + deretBilanganPrima);
  
  console.log (deretBilanganPrima[1])