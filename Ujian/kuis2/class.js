class Siswa {
    constructor(name, age, gender) {
      this.name = name;
      this.age = age;
      this.gender = gender;
    }
  
    getData() {
      return `Nama: ${this.name}, Umur: ${this.age}, Jenis Kelamin: ${this.gender}`;
    }
  }
  
  class NomorId extends Siswa {
    constructor(name, age, gender, idSiswa) {
      super(name, age, gender);
      this.idSiswa = idSiswa;
    }
  
    getStudentInfo() {
      return `ID Siswa: ${this.idSiswa}`;
    }
  }
  
  // Contoh penggunaan:

  
  const siswa = new NomorId('Jane Smith', 16, 'Perempuan', '12345');
  console.log(siswa.getData()); // Output: Nama: Jane Smith, Umur: 16, Jenis Kelamin: Perempuan
  console.log(siswa.getStudentInfo()); // Output: ID Siswa: 12345
  