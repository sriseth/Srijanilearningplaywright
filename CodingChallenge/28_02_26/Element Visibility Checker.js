let isPresent = true, isDisplayed = true, isEnabled = true;


let sts = (isPresent && isDisplayed && isEnabled) ? "Ready" : (isPresent && isDisplayed) ? "Disabled" : isPresent ? "Hidden" : "Not Found" 

if( sts === "Ready"){
    console.log(`Status : ${sts} Severity : OK Action: All Good`);
} else if( sts === "Disabled"){
    console.log(`Status : ${sts} Severity : WARNING  Action: Element is visible but disabled. Wait for enable state or check preconditions.`);

} else if( sts === "Hidden"){
    console.log(`Status : ${sts} Severity : WARNING  Action: Element is not displayed. Wait for enable state or check preconditions.`)
} else{
    console.log(`Status : ${sts} Severity : Critical Action: Not present`);
}



