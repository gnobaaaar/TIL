// var x;
//변수선언은 let 사용(이유 : 유효범위 구분)
//상수선언은 const(값 변경없이 read Only로 사용)
x =6;
const constVariable = 10;

let globalVariable = 5;
{
    let localVariable = 5;
    var y=5;
    console.log("localVariable ", localVariable);
	console.log("globalVariable ", globalVariable);
    console.log("var x", x);
    console.log("var y", y);
}

//constVariable = 100; 상수는 값할당X
console.log("localVariable ", localVariable);
console.log("globalVariable ", globalVariable);
console.log("var x", x);
console.log("var y", y);


document.getElementById("data").innerHTML = "<h3>variable x = " +x+ "</h3>";


// 2. DataType
let intV =10;
let floatV = 10.5;
let stringV = "10";
let booleanV = true;
console.log("data type", intV, floatV, stringV, booleanV);
