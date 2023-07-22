// Soal Test 1
// Buatlah sebuah program dengan output sebagai berikut.
// Input bisa dinamis yang menghasilkan output yang berbeda-beda sesuai input yang dimasukan.
// Gunakan rumus A000124 of Sloane’s OEIS.

function deretAngka(n) {
	const deret = [];
	let angka = 1;

	for (let i = 0; i < n; i++) {
		deret.push(angka);
		angka += 1 + i;
	}

	return deret.join('-');
}

// Test
console.log(deretAngka(7)); // Output should be 1-2-4-7-11-16-22
console.log(deretAngka(10)); // Output should be 1-2-4-7-11-16-22-29-37-46
console.log(deretAngka(20)); // Output should be 1-2-4-7-11-16-22-29-37-46-56-67-79-92-106-121-137-154-172-191
