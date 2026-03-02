let testResults = ['fail',  'fail', 'fail' , 'fail' , 'pass'];
let skip = 0
let pass = 0
let fail = 0
let total = testResults.length;
console.log("total :" , total);

for (let i in testResults) {
    if(testResults[i] === 'pass'){
        pass++;
    } else if(testResults[i] ==='fail'){
        fail++;
    } else if(testResults[i] === 'skip'){
        skip++;
    }
}

let percentage = (pass/total)*100;
console.log("passed : " , pass + " \nfailed : " , fail + " \nskipped : ", skip);
console.log("pass rate percentage is : " , percentage + "%");

if(pass === total){
    console.log("Verdict : ready for release");
} else if( fail <= 2){
    console.log("Verdict :  Minor failures. Review before release.");
} else {
    console.log("Verdict : Major failure.  block release");
}