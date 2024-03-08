//Membuat Function dengan Arrows Function dengan parameter
const checkTypeNumber = (givenNumber) => {
  //Membuat Pengecekan Kondisi untuk validasi bahwa inputan hanya bersifat number
  if (typeof givenNumber === "number") {
    //Membuat pengecekan Kondisi untuk mengetahui Ganjil/Genap menggunakan modulo
    if (givenNumber % 2 === 0) {
      return "GENAP";
    } else {
      return "GANJIL";
    }
  } else if (givenNumber === "undefined") {
    // Error Handling : Jika data yang diinputkan tidak terdefinisikan/kosong, maka akan mengembalikan teks error.
    return "Error: Bro where is the parameter?";
  } else {
    // Error Handling : Jika data yang diinputkan selain tipe data number, maka akan mengembalikan teks error.
    return "Error: Invalid data type";
  }
};

//Baris perintah untuk memanggil function untuk ditampilkan di terminal
console.log(checkTypeNumber(10));
console.log(checkTypeNumber(3));
console.log(checkTypeNumber("3"));
console.log(checkTypeNumber({}));
console.log(checkTypeNumber([]));
console.log(checkTypeNumber());
console.log(checkTypeNumber([{}]));
