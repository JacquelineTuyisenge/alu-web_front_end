function countPrimeNumbers() {
    let count = 0;
  
    // Function to check if a number is prime
    function isPrime(num) {
      if (num <= 1) return false;
      if (num === 2) return true;
      if (num % 2 === 0) return false;
      for (let i = 3; i <= Math.sqrt(num); i += 2) {
        if (num % i === 0) return false;
      }
      return true;
    }
  
    // Counting prime numbers from 2 to 100
    for (let i = 2; i <= 100; i++) {
      if (isPrime(i)) {
        count++;
      }
    }
  
    return count;
  }
  
  const totalStartTime = performance.now();
  
  for (let i = 0; i < 100; i++) {
    countPrimeNumbers();
  }
  
  const totalEndTime = performance.now();
  const totalExecutionTime = totalEndTime - totalStartTime;
  
  console.log(`Execution time of calculating prime numbers 100 times was ${totalExecutionTime} milliseconds.`);
  