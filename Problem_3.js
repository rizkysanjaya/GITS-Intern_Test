// Soal Test 3
// 1. Buat fungsi untuk menemukan Balanced Bracket dengan kompleksitas paling rendah!

function balancedBracket(input) {
	const stack = [];
	const kurungBuka = new Set(['(', '[', '{']);
	const kurungTutup = new Set([')', ']', '}']);
	const pair = {
		')': '(',
		']': '[',
		'}': '{',
	};

	for (const kurung of input) {
		if (kurungBuka.has(kurung)) {
			stack.push(kurung);
		} else if (kurungTutup.has(kurung)) {
			if (stack.length === 0 || stack[stack.length - 1] !== pair[kurung]) {
				return 'NO';
			}
			stack.pop();
		}
	}

	return stack.length === 0 ? 'YES' : 'NO';
}

// Test
console.log(balancedBracket('{[()]}')); // Output should be "YES"
console.log(balancedBracket('{[(])}')); // Output should be "NO"
console.log(balancedBracket('{{[[(())]]}}')); // Output should be "YES"
