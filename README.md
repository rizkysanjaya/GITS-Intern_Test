# GITS-Intern_Test

Code submission untuk kebutuhan test intern di PT GITS

Untuk Problem 3

Berapa ukuran kompleksitas kodinganmu?
-Kompleksitas waktu kodingan adalah O(n)
-Kompleksitas ruang kodingan adalah O(n)

Jelaskan detail kompleksitas codingan Balanced Bracket Anda.
-Kompleksitas waktu O(n) karena kodingan akan melakukan looping sebanyak n kali,
dimana n adalah panjang string yang diberikan. Looping termasuk didalamnya adalah proses memasukkan
stack, checking, dan mengeluarkan stack, checking pasangan bracket.
-Kompleksitas ruang O(n) karena kodingan akan menyimpan stack sebanyak n kali,
dimana n adalah panjang string yang diberikan.

Logic :
Jika inputan memiliki kurung buka, maka akan dimasukkan ke dalam stack.
Jika inputan memiliki kurung tutup, maka akan dicek apakah terdapat pasangan kurung buka sudah ada di dalam stack.
Jika tidak ada pasangan kurung buka, maka akan mengembalikan false.
Jika ada pasangan kurung buka, maka akan mengeluarkan stack.
Setelah iterasi selesai, cek panjang stack. Jika panjang stack tidak 0, maka akan mengembalikan false.
