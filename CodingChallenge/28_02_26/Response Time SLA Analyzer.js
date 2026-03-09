let responseTimes = [120, 230, 450, 510, 180, 620];

const SLA_LIMIT = 500;

console.log("Total Requests: " + responseTimes.length);

let minNum = responseTimes[0];
let maxNum = responseTimes[0];
let i = 1; 
let count = 0;
let sum =0;


while(i < responseTimes.length){
    let currentNum = responseTimes[i];
    if (currentNum < minNum) {
      minNum = currentNum;
    }

    // Update maximum if the current element is larger
    if (currentNum > maxNum) {
      maxNum = currentNum;
    }

    if(currentNum >= SLA_LIMIT){
        count++
    }

     sum += currentNum;

    // Increment the counter
    i++;

}

let average = sum/responseTimes.length;

let breachp = (count/responseTimes.length)*100;
console.log(`Max Response: ${maxNum}ms , Min Response: ${minNum}ms , SLA Breaches: ${count} (${breachp.toFixed(2)}) , ${average.toFixed(2)} `);

