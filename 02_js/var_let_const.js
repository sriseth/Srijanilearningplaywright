// var , let , const

//var is fuction scoped and can be redeclared and updated
var a = 10;
console.log(a);


function printHello() {
    
    console.log("hello");
    var a = 20;
    console.log(a);
    if(true) {
        var a = 30;
        console.log(a);
    }
console.log("F ->",a);
}

printHello();


function printHello1() {
    
    console.log("hello");
    let a = 20;
    console.log(a);
    if(true) {
        let a = 30;
        console.log(a);
    }
console.log("F ->",a);
}

printHello1();


const PI = 3.14;
console.log(PI);
