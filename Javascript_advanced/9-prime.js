function countPrimeNumbers() {
	let sieve = [];
	let primesCount = 0;

	for (let i = 2; i <= 100; i++) {
		if (sieve[i] = false) {
			primesCount++;
			for (let j = i * i; j <= 100; j += i) {
				sieve[j] = true;
			}
		}
	}

    return primesCount;
}

let startTime = performance.now();
let primeCount = countPrimeNumbers();
let endTime = performance.now();

console.log(`Number of primes found: ${primeCount}`);
console.log(`Execution time of printing countPrimeNumbers was ${endTime - startTime} milliseconds.`);
