// NO. 39
// Write a JavaScript function to filter false, null, 0 and blank values from an array.

// Test Data :
// console.log(filter_array_values([58, '', 'abcd', true, null, false, 0]));
// [58, "abcd", true]

const filter_array_values = (arr) => {
  // Validasi tipe data inputan harus bersifat Array
  if (arr === undefined) return "Error: Bro where is the parameter?";
  if (!(arr instanceof Array)) return "Error: Invalid data type";
  if (arr.length === 0) return "Error: Empty Array"; //Pengecekan array tidak boleh kosong

  // Validasi Nilai
  function isEligible(arr) {
    return arr !== false && arr !== null && arr !== 0 && arr !== "";
  }
  // Melakukan filter data berdasarkan hasil dari function isEligible
  return arr.filter(isEligible);
};

let Data = [58, "", "abcd", true, null, false, 0];

console.log(filter_array_values(Data));
// console.log(filter_array_values());
// console.log(filter_array_values({}));
// console.log(filter_array_values([]));
// console.log(filter_array_values("Hallo"));
// console.log(filter_array_values(9));
