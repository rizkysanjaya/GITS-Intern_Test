const readline = require('readline');

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

function sortPlayersByScore(players) {
	return players.sort((a, b) => b.score - a.score);
}

function findDenseRank(score, players) {
	const sortedPlayers = sortPlayersByScore(players);
	let rank = 1;
	let lastRank = 1;

	for (let i = 0; i < sortedPlayers.length; i++) {
		const player = sortedPlayers[i];
		if (player.score === score) {
			rank = lastRank;
			break;
		}
		rank += 1;
		lastRank = rank;
	}

	return lastRank;
}

function processInput() {
	rl.question('Input the number of players: ', (playerCount) => {
		playerCount = parseInt(playerCount);

		rl.question(
			'Input the scores (comma-separated values): ',
			(inputScores) => {
				const scores = inputScores.split(',').map(Number);
				const players = scores.map((score, index) => {
					return { name: `Player ${index + 1}`, score: score };
				});

				rl.question('Input your number of playing: ', (myPlayerCount) => {
					myPlayerCount = parseInt(myPlayerCount);

					rl.question(
						'Input each of your scores (comma-separated values): ',
						(myScoresInput) => {
							const myScores = myScoresInput.split(',').map(Number);

							console.log('Your Ranks:');
							console.log('------------');

							myScores.forEach((score) => {
								const lastRank = findDenseRank(score, players);
								console.log(`Your Score: ${score} - Rank: ${lastRank}`);
							});

							console.log('------------');
							rl.close();
						}
					);
				});
			}
		);
	});
}

// Start the program
processInput();
