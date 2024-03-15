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
    function countInRange(start, end) {
      let subCount = 0;
      for (let i = start; i <= end; i++) {
        if (isPrime(i)) {
          subCount++;
        }
      }
      return subCount;
    }
  
    // Split the range into chunks
    const chunkSize = 10;
    const numChunks = 10;
  
    // Keep track of the current chunk being processed
    let currentChunk = 0;
    
    // Process chunks sequentially using setTimeout
    function processChunk() {
      const start = currentChunk * chunkSize + 2;
      const end = (currentChunk + 1) * chunkSize;
      count += countInRange(start, end);
      currentChunk++;
  
      // If all chunks are processed, log the total count
      if (currentChunk < numChunks) {
        setTimeout(processChunk, 0);
      } else {
        const endTime = performance.now();
        const executionTime = endTime - startTime;
        console.log(`Execution time of calculating prime numbers 100 times was ${executionTime} milliseconds.`);
      }
    }
  
    processChunk();
  }
  
  const startTime = performance.now();
  countPrimeNumbers();
  