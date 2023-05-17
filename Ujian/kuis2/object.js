function updateSiswa(newData) {
  const siswa = {
    name: 'John Doe',
    age: 17,
    gender: 'Laki-laki'
  };

  // Mengganti properti objek siswa dengan nilai baru dari newData
  if (newData.name) {
    siswa.name = newData.name;
  }
  if (newData.age) {
    siswa.age = newData.age;
  }
  if (newData.gender) {
    siswa.gender = newData.gender;
  }

  return siswa;
}

// Contoh penggunaan:
const newData = {
  age: 18,
  gender: 'Perempuan'
};

console.log(updateSiswa(newData));
