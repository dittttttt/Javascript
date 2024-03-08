// membuat sebuah function dengan 3 parameter
function changeWord(selectedText, changedText, text) {
  //Membuat pengecekan kondisi -> guna mengecek apakah kata yang akan diganti ada di teks/kalimat
  //Penggunaan built-in method search()
  //indikator :  kata ditemukan (<= 0) & indikator kata tidak ditemukan (= -1)
  if (text.search(selectedText) != -1) {
    //Penggunaan built-in method replace() -> mengganti kata yg sudah ada dengan kata baru dalam teks/kalimat
    return text.replace(selectedText, changedText);
  } else {
    // Error Handling : Jika kata yang ingin diubah tidak tersedia, maka akan mengembalikan teks error
    return "Error : Not Found";
  }
}
//Deklarasi & inisialisasi
const kalimat1 = "Andini sangat mencintai kamu selamanya";
const kalimat2 =
  "Gunung bromo tak akan mampu menggambarkan besarnya cintaku padamu ";

//Menampilkan data dalam terminal dengan memanggil function changeWord beserta parameter yang dibutuhkan
console.log(changeWord("mencintai", "membenci", kalimat1));
console.log(changeWord("bromo", "semeru", kalimat2));
