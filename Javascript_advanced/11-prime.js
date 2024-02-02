function countPrimeNumbers() {
    let sieve = [];
    let primesCount = 0;
    for (let i = 2; i <= 100; i++) {
        if (!sieve[i]) {
            primesCount++;
            for (let j = i * i; j <= 100; j += i) {
                sieve[j] = true;
            }
        }
    }
    return primesCount;
}

let totalExecutions = 100;
let executionsCompleted = 0;
let startTime = performance.now();

for (let i = 0; i < totalExecutions; i++) {
    setTimeout(() => {
        countPrimeNumbers();
        executionsCompleted++;

        if (executionsCompleted === totalExecutions) {
            let endTime = performance.now();
            console.log(`Execution time of calculating prime numbers 100 times was ${endTime - startTime} milliseconds.`);
        }
    }, 0);
}
