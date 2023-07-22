function denseRanking(scores) {
	// Clone the scores array and sort it in descending order
	const sortedScores = [...scores].sort((a, b) => b - a);

	// Create a map to store player's rank based on their score
	const rankMap = new Map();

	// Initialize variables for tracking rank
	let currentRank = 1;
	let prevScore = null;

	// Calculate the rank and store it in the map
	for (const score of sortedScores) {
		if (score !== prevScore) {
			rankMap.set(score, currentRank);
			currentRank++;
		}
		prevScore = score;
	}

	// Create an array of ranks corresponding to the input scores
	const ranks = scores.map((score) => rankMap.get(score));

	return ranks;
}

// Example usage:
const playerScores = [85, 92, 78, 92, 90, 78, 85, 90];
const rankedScores = denseRanking(playerScores);
console.log(rankedScores);
