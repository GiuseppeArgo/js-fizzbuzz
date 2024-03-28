"use strict";

const rowElem = document.querySelector(".row"); //object | null
console.log(rowElem);

for (let i = 1; i <= 100; i++) {
    console.log(i);
    const boxElem = document.createElement("div");
    console.log(boxElem);
    
    if ( i % 15 === 0) {
        console.log("fizzbuzz");
        boxElem.classList.add("fizzbuzz");
        boxElem.innerHTML = "fizzbuzz";

    } else if ( i % 5 === 0) {
        console.log("buzz");
        boxElem.classList.add("buzz");
        boxElem.innerHTML = "buzz";

    } else if ( i % 3 === 0) {
        console.log("fizz");
        boxElem.classList.add("fizz");
        boxElem.innerHTML = "fizz";

    } else {
        console.log("number");
        boxElem.classList.add("normal-number");
        boxElem.innerHTML = i;
    }
    
    boxElem.classList.add("box");
    rowElem.append(boxElem);
}   

