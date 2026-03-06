let frequency = "rarely" ;
let impact = "minor" ;
let severity = "";

// if(frequency === "always" && impact=== "blocker" ){
//     severity = "P0";
// }else if((frequency === "always" && impact=== "major ") || (frequency === "often" && impact=== "blocker")){
//     severity = "P1";
// }else if((frequency === "often" && impact=== "major ") || (frequency === "rarely" && impact=== "blocker")){
//     severity = "P2";
// }else if((frequency === "often" && impact=== "minor ") || (frequency === "rarely" && impact=== "major")){
//     severity = "P3";
// }else  (frequency === "rarely" && impact=== "minor" );{
//         severity = "P4"; 
// }
// console.log(`bug title : Checkout page crashes on applying coupon : Frequency : ${frequency}  Impact : ${impact}  Severity : ${severity} `);


if(frequency === "always" ){
    if(impact === "blocker"){
        severity = "P0";
    }else if(impact === "major"){
        severity = "P1";
    }else {
        severity = "P2";
    }
}else if(frequency === "often" ){
    if(impact === "blocker"){
        severity = "P1";
    }else if(impact === "major"){
        severity = "P2";
    }else {
        severity = "P3";
    }
}else {
     if(impact === "blocker"){
        severity = "P2";
    }else if(impact === "major"){
        severity = "P3";
    }else {
        severity = "P4";
    }
}

console.log(`bug title : Checkout page crashes on applying coupon : Frequency : ${frequency}  Impact : ${impact}  Severity : ${severity} `);
