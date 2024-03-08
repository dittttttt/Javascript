//Deklarasi & inisialisasi Array
const dataPenjualanPakAldi = [
  {
    namaProduct: "Sepatu Futsal Nike Vapor Academy 8",
    hargaSatuan: 760000,
    kategori: "Sepatu Sport",
    totalTerjual: 90,
  },
  {
    namaProduct: "Sepatu Warrior Tristan Black Brown High - Original",
    hargaSatuan: 960000,
    kategori: "Sepatu Sneaker",
    totalTerjual: 37,
  },
  {
    namaProduct: "Sepatu Warrior Tristan Maroon High - Original",
    kategori: "Sepatu Sneaker",
    hargaSatuan: 360000,
    totalTerjual: 90,
  },
  {
    namaProduct: "Sepatu Warrior Rainbow Tosca Corduroy - [BNIB] Original",
    hargaSatuan: 120000,
    kategori: "Sepatu Sneaker",
    totalTerjual: 90,
  },
];

//Membuat Arrows Function
const hitungTotalPenjualan = (dataPenjualan) => {
  if (dataPenjualan === undefined) {
    //Pengecekan  dan Error Handling : Jika data penjualan bersifat undefined/tidak terdefinisikan
    return "Error: Bro where is the parameter?";
  } else if (!(dataPenjualan instanceof Array)) {
    //Pengecekan dan Error Handling : Jika data yang digunakan selain tipe data Array
    return "Error: Invalid data type";
  } else if (dataPenjualan.length == 0) {
    //Error Handling : Jika data Array yang digunakan tidak terisi / kosong
    return "Error: Empty Array";
  } else if (dataPenjualan.filter((e) => e.totalTerjual).length == 0) {
    //Pengecekan dan Error Handling : Jika data yang digunakan tipe data Object
    return "Error: Object detected";
  } else {
    //reduce() -> mengakumulasikan nilai dari setiap element tertentu dalam array
    const hitungTotal = dataPenjualan?.reduce(
      (total, dataSaatini) => {
        // Penjumlahkan data
        total = dataSaatini.totalTerjual + total;
        //Mengembalikan Nilai
        return total;
      },
      0 //nilai awal
    );
    return hitungTotal;
  }
};

//Baris perintah untuk memanggil function untuk ditampilkan di terminal
console.log(hitungTotalPenjualan(dataPenjualanPakAldi)); //307
console.log(hitungTotalPenjualan({})); // Invalid data type
console.log(hitungTotalPenjualan([])); // Empty Array
console.log(hitungTotalPenjualan(null)); // Invalid Data Type
console.log(hitungTotalPenjualan()); // where is parameter?
console.log(hitungTotalPenjualan(0)); //Invalid Data Type
console.log(hitungTotalPenjualan([{}])); //Object Detected
