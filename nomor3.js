//Membuat funtion dengan parameter
const getAngkaTerbesarKedua = (personName) => {
  //Membuat Pengecekan Kondisi untuk validasi bahwa inputan hanya bersifat Array
  if (Array.isArray(personName)) {
    //Membuat pengecekan kondisi untuk validasi bahwa data dalam array / panjang array tidak boleh kosong
    if (personName.length === 0) {
      return "Error: Empty Array";
    }
    // Funtion untuk menghilangkan data yang duplikat
    // Penggunaan filter() dan indexOf() untuk menyaring elemen unik
    const uniqueArray = personName.filter((value, index, temp) => {
      return temp.indexOf(value) === index;
    });
    // Penggunaan built-in method sort() untuk mengurutkan dengan menambahkan logika "DESCENDING"
    // jika hasil dari logika tersebut adalah positif maka posisi b sebelum posisi a
    // jika hasil dari logika tersebut adalah 0 maka posisi b dan posisi a tidak berubah
    // jika hasil dari logika tersebut adalah negtif maka posisi b setelah posisi a
    desc = uniqueArray.sort(function (a, b) {
      return b - a;
    });
    // inisialisasi index (1) untuk pengambilan data array ke dua
    i = 1;
    //mengembalikan nilai pada index ke-i
    return desc[i];
  } else if (personName === undefined) {
    // Error Handling : Jika data yang diinputkan tidak terdefinisikan/kosong, maka akan mengembalikan teks error.
    return "Error: Bro where is the parameter?";
  } else {
    // Error Handling : Jika data yang diinputkan selain tipe data number, maka akan mengembalikan teks error.
    return "Error: Invalid data type";
  }
};

//deklarasi & inisialisasi
const dataAngka = [9, 4, 7, 7, 4, 3, 2, 2, 8];

//Baris perintah untuk memanggil function untuk ditampilkan di terminal
console.log(getAngkaTerbesarKedua(dataAngka));
console.log(getAngkaTerbesarKedua());
console.log(getAngkaTerbesarKedua(9));
console.log(getAngkaTerbesarKedua("dataAngka"));
console.log(getAngkaTerbesarKedua([]));
console.log(getAngkaTerbesarKedua({}));
