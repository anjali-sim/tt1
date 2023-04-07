"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var utils11_1 = require("./utils11");
//array to perform the memory operations
var memoryStack = [];
// variable used to toggle between degree and radian buttons
var degree = 0;
// console.log()
// for changing the dropdowns
var dropdownChange = 0;
//to take the input
var inputField = document.getElementById("input");
/**
 * @function fixedToExponent
 * @description to display the answer in scientific notation
 * @param none
 * @returns void
 */
function fixedToExponent() {
    var input = document.getElementById("input");
    input.value = Number(input.value).toExponential().toString();
}
/**
 * @function degreeToRadian
 * @description  to toggle the button between degree(DEG) and radian(RAD)
 * @params  none
 * @returns void
 */
function degreeToRadian() {
    // if the degree variable is set to 0, then display the RAD(radian) button else DEG(degree) button
    if (degree === 0) {
        degree = 1;
        var degreeElement = document.querySelector("#degree");
        degreeElement.innerHTML = "RAD";
    }
    else {
        degree = 0;
        var degreeElement = document.querySelector("#degree");
        degreeElement.innerHTML = "DEG";
    }
}
/**
 * @description  validating to restrict the alphabets and special characters in the input field using event listener based on the ASCII code
 * Examples: if the user enters alphabets or special characters from keyboard, then restrict it from entering into the input field
 * - asfhjk to 0
 * - #&;} to 0
 * - 5869*2 to 5869*2
 * */
inputField.addEventListener("keypress", function (event) {
    var allowedKeyCodes = [
        "33",
        "34",
        "35",
        "36",
        "38",
        "39",
        "58",
        "59",
        "60",
        "61",
        "62",
        "63",
        "64",
        "91",
        "92",
        "93",
        "95",
        "96",
        "123",
        "124",
        "125",
        "126",
    ];
    var i;
    for (i = 65; i <= 90; i++) {
        allowedKeyCodes.push(i.toString());
    }
    for (i = 97; i <= 122; i++) {
        allowedKeyCodes.push(i.toString());
    }
    var keyCode = event.keyCode.toString();
    if (allowedKeyCodes.indexOf(keyCode) > -1) {
        event.preventDefault();
    }
});
var obj = new utils11_1.TrigonometryCalculatorImplement(inputField);
console.log(obj);
// import { obj } from "../../utils/utils11";
var sineFunction = function () {
    // console.log(obj.degree, "<<degree");
    obj.sine();
};
var cosineFunction = function () {
    obj.cosine();
};
var tangentFunction = function () {
    obj.tangent();
};
var cotangentFunction = function () {
    obj.cotangent();
};
var secantFunction = function () {
    obj.secant();
};
var cosecantFunction = function () {
    obj.cosecant();
};
var obj2 = new utils11_1.FunctionCalculatorImplement(inputField);
var floorFunction = function () {
    obj2.floor();
};
var ceilFunction = function () {
    obj2.ceil();
};
var randomFunction = function () {
    obj2.random();
};
var modulusFunction = function () {
    obj2.modulus();
};
/**
 * @function  calculate
 * @description  to evaluate the basic expressions
 * @params  none
 */
function calculate() {
    var input = document.getElementById("input");
    // input.value = input.value.replaceAll("^", "**");
    input.value = input.value;
    var result = input.value;
    // Error handling
    /**
     * this try catch handles the error when user enters invalid input
     * Examples:
     * 9-6+5 = 8
     * 5-6/5* = Invalid Input!
     */
    function cal(user) {
        return new Function("return " + user)();
    }
    try {
        // function cal(user: string) {
        //   return new Function("return " + user)();
        // }
        var output = cal("".concat(result));
        var inputEl = document.getElementById("input");
        inputEl.value = output.toString();
    }
    catch (err) {
        var errDiv_1 = document.getElementById("errorDiv");
        errDiv_1.textContent = "Invalid Input!";
        setTimeout(function () {
            errDiv_1.textContent = "";
            var inputEl = document.getElementById("input");
            inputEl.value = "";
        }, 2000);
    }
}
/**
 * @function  changeDropdown
 * @description  to toggle the buttons
 * @params  none
 * @returns void
 */
function changeDropdown(display1, display2) {
    var dropdownChange = 1;
    var elements2 = document.querySelectorAll("display2");
    var elements1 = document.querySelectorAll("display1");
    if (typeof document !== "undefined") {
        // const elements2: HTMLElement[] = Array.from(
        //   document.getElementsByClassName("display2")
        // ) as HTMLElement[];
        // clElement[];
        if (dropdownChange === 1) {
            // elements2.forEach((x: HTMLElement) => {
            //   x.style.display = "inline-block";
            // });
            for (var i = 0; i < elements2.length; i++) {
                var btn = elements2[i];
                btn.style.display = "inline-block";
            }
            // elements1.forEach((x: HTMLElement) => {
            //   x.style.display = "none";
            // });
            for (var i = 0; i < elements1.length; i++) {
                var btn = elements1[i];
                btn.style.display = "none";
            }
            dropdownChange = 0;
        }
        else {
            // elements1.forEach((x: HTMLElement) => {
            //   x.style.display = "inline-block";
            // });
            for (var i = 0; i < elements1.length; i++) {
                var btn = elements1[i];
                btn.style.display = "inline-block";
            }
            // elements2.forEach((x: HTMLElement) => {
            //   x.style.display = "none";
            // });
            for (var i = 0; i < elements2.length; i++) {
                var btn = elements2[i];
                btn.style.display = "none";
            }
            dropdownChange = 1;
        }
    }
    else {
        console.log("Error: `document` is not defined");
    }
}
var obj3 = new utils11_1.SecondCalculatorImplement("input", "errorDiv");
var squareFunction = function () {
    obj3.square();
};
var squareRootFunction = function () {
    obj3.squareRoot();
};
var xRaiseYFunction = function () {
    obj3.xRaiseY();
};
var raiseTo10Function = function () {
    obj3.raiseTo10();
};
var logarithmFunction = function () {
    obj3.logarithm();
};
var naturalLogarithmFunction = function () {
    obj3.naturalLogarithm();
};
var obj4 = new utils11_1.SecondCalculator1Implement("input", "errorDiv");
var cubeFunction = function () {
    obj4.cube();
};
var cubeRootFunction = function () {
    obj4.cubeRoot();
};
var raiseTo2Function = function () {
    obj4.raiseTo2();
};
var logPlusFunction = function () {
    obj4.logPlus();
};
var expMinusFunction = function () {
    obj4.expMinus();
};
var eRaisexFunction = function () {
    obj4.eRaisex();
};
var obj5 = new utils11_1.ExtraFunctionImplement("input", "errorDiv");
var piFunction = function () {
    obj5.pi();
};
var eulerFunction = function () {
    obj5.euler();
};
var clearAllFunction = function () {
    obj5.clearAll();
};
var removeOneElementFromEndFunction = function () {
    obj5.removeOneElementFromEnd();
};
var byXFunction = function () {
    obj5.byX();
};
var moduloFunction = function () {
    obj5.modulo();
};
var modulusFunction1 = function () {
    obj5.modulus();
};
var exponentFunction = function () {
    obj5.exponent();
};
var factorialFunction = function () {
    obj5.factorial();
};
var signChangeFunction = function () {
    obj5.signChange();
};
// import { MemoryImplement } from "../../utils/utils11";
// const obj6 = new MemoryImplement();
// const memoryClearFunction = () => {
//   obj6.memoryClear();
// };
// const memoryRecallFunction = () => {
//   obj6.memoryRecall();
// };
// const memoryAddFunction = () => {
//   obj6.memoryAdd();
// };
// const memorySubtractFunction = () => {
//   obj6.memorySubtract();
// };
// const memorySaveFunction = () => {
//   obj6.memorySave();
// };
