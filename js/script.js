const rowElem = document.querySelector(".row"); //object | null
console.log(rowElem);



for (let i = 1; i <= 100; i++) {
    console.log(i);
    const boxElem = document.createElement("div");
    if ( i % 15 === 0) {
        console.log("fizzbuzz");
        bgClass = "fizzbuzz";
        boxElem.innerHTML = "fizzbuzz";

    } else if ( i % 5 === 0) {
        console.log("buzz");
        bgClass = "buzz";
        boxElem.innerHTML = "buzz";

    } else if ( i % 3 === 0) {
        console.log("fizz");
        bgClass = "fizz";
        boxElem.innerHTML = "fizz";

    } else {
        console.log("number");
        bgClass = "normal-number";
        boxElem.innerHTML = i;
    }
    
    boxElem.classList.add("box");
    boxElem.classList.add(bgClass);
    console.log(boxElem);
    rowElem.append(boxElem);
}   

