"use strict";
var greet;
greet = function (name, greeting) {
    console.log(name + " " + greeting);
};
var calc;
calc = function (numOne, numTwo, action) {
    if (action === "add") {
        return numOne + numTwo;
    }
    else {
        return numOne - numTwo;
    }
};
