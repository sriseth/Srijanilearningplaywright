let attemptCount = 1;
let isSuccess = false;
const MAX_ATTEMPT = 5

do {
   
  
  let random = Math.random();
  
  if(random>0.6){
    isSuccess=true;
    console.log(`Attempt ${attemptCount} SUCCESS (Response 200 OK)`);
    break;
 }
  console.log(`Attempt ${attemptCount} FAILED (Timeout/Error)`);
  attemptCount++;

  

}while(attemptCount<=MAX_ATTEMPT)

if(isSuccess){
console.log(`API call PASSED after ${attemptCount} attempt(s).`);
}else{
console.log(`API call Failed after ${MAX_ATTEMPT} attempt(s).`);
}



