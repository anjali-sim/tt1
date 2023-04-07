"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils11_1 = require("./utils11");
//array to perform the memory operations
let memoryStack = [];
// variable used to toggle between degree and radian buttons
let degree = 0;
// console.log()
// for changing the dropdowns
let dropdownChange = 0;
//to take the input
const inputField = document.getElementById("input");
/**
 * @function displayInputValue
 * @description to take the input from the input field entered by the user and display it on the display bar
 * @param value
 * value : string
 * @returns void
 */
function displayInputValue(value) {
    console.log("input");
    inputField.value += value;
}
/**
 * @function fixedToExponent
 * @description to display the answer in scientific notation
 * @param none
 * @returns void
 */
function fixedToExponent() {
    const input = document.getElementById("input");
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
        const degreeElement = document.querySelector("#degree");
        degreeElement.innerHTML = "RAD";
    }
    else {
        degree = 0;
        const degreeElement = document.querySelector("#degree");
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
    const allowedKeyCodes = [
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
    let i;
    for (i = 65; i <= 90; i++) {
        allowedKeyCodes.push(i.toString());
    }
    for (i = 97; i <= 122; i++) {
        allowedKeyCodes.push(i.toString());
    }
    const keyCode = event.keyCode.toString();
    if (allowedKeyCodes.indexOf(keyCode) > -1) {
        event.preventDefault();
    }
});
const obj = new utils11_1.TrigonometryCalculatorImplement(inputField);
console.log(obj);
// import { obj } from "../../utils/utils11";
const sineFunction = () => {
    // console.log(obj.degree, "<<degree");
    obj.sine();
};
const cosineFunction = () => {
    obj.cosine();
};
const tangentFunction = () => {
    obj.tangent();
};
const cotangentFunction = () => {
    obj.cotangent();
};
const secantFunction = () => {
    obj.secant();
};
const cosecantFunction = () => {
    obj.cosecant();
};
const obj2 = new utils11_1.FunctionCalculatorImplement(inputField);
const floorFunction = () => {
    obj2.floor();
};
const ceilFunction = () => {
    obj2.ceil();
};
const randomFunction = () => {
    obj2.random();
};
const modulusFunction = () => {
    obj2.modulus();
};
/**
 * @function  calculate
 * @description  to evaluate the basic expressions
 * @params  none
 */
function calculate() {
    const input = document.getElementById("input");
    // input.value = input.value.replaceAll("^", "**");
    input.value = input.value;
    const result = input.value;
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
        const output = cal(`${result}`);
        const inputEl = document.getElementById("input");
        inputEl.value = output.toString();
    }
    catch (err) {
        const errDiv = document.getElementById("errorDiv");
        errDiv.textContent = "Invalid Input!";
        setTimeout(() => {
            errDiv.textContent = "";
            const inputEl = document.getElementById("input");
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
    let dropdownChange = 1;
    const elements2 = document.querySelectorAll("display2");
    const elements1 = document.querySelectorAll("display1");
    if (typeof document !== "undefined") {
        // const elements2: HTMLElement[] = Array.from(
        //   document.getElementsByClassName("display2")
        // ) as HTMLElement[];
        // clElement[];
        if (dropdownChange === 1) {
            // elements2.forEach((x: HTMLElement) => {
            //   x.style.display = "inline-block";
            // });
            for (let i = 0; i < elements2.length; i++) {
                let btn = elements2[i];
                btn.style.display = "inline-block";
            }
            // elements1.forEach((x: HTMLElement) => {
            //   x.style.display = "none";
            // });
            for (let i = 0; i < elements1.length; i++) {
                let btn = elements1[i];
                btn.style.display = "none";
            }
            dropdownChange = 0;
        }
        else {
            // elements1.forEach((x: HTMLElement) => {
            //   x.style.display = "inline-block";
            // });
            for (let i = 0; i < elements1.length; i++) {
                let btn = elements1[i];
                btn.style.display = "inline-block";
            }
            // elements2.forEach((x: HTMLElement) => {
            //   x.style.display = "none";
            // });
            for (let i = 0; i < elements2.length; i++) {
                let btn = elements2[i];
                btn.style.display = "none";
            }
            dropdownChange = 1;
        }
    }
    else {
        console.log("Error: `document` is not defined");
    }
}
const obj3 = new utils11_1.SecondCalculatorImplement("input", "errorDiv");
const squareFunction = () => {
    obj3.square();
};
const squareRootFunction = () => {
    obj3.squareRoot();
};
const xRaiseYFunction = () => {
    obj3.xRaiseY();
};
const raiseTo10Function = () => {
    obj3.raiseTo10();
};
const logarithmFunction = () => {
    obj3.logarithm();
};
const naturalLogarithmFunction = () => {
    obj3.naturalLogarithm();
};
const obj4 = new utils11_1.SecondCalculator1Implement("input", "errorDiv");
const cubeFunction = () => {
    obj4.cube();
};
const cubeRootFunction = () => {
    obj4.cubeRoot();
};
const raiseTo2Function = () => {
    obj4.raiseTo2();
};
const logPlusFunction = () => {
    obj4.logPlus();
};
const expMinusFunction = () => {
    obj4.expMinus();
};
const eRaisexFunction = () => {
    obj4.eRaisex();
};
const obj5 = new utils11_1.ExtraFunctionImplement("input", "errorDiv");
const piFunction = () => {
    obj5.pi();
};
const eulerFunction = () => {
    obj5.euler();
};
const clearAllFunction = () => {
    obj5.clearAll();
};
const removeOneElementFromEndFunction = () => {
    obj5.removeOneElementFromEnd();
};
const byXFunction = () => {
    obj5.byX();
};
const moduloFunction = () => {
    obj5.modulo();
};
const modulusFunction1 = () => {
    obj5.modulus();
};
const exponentFunction = () => {
    obj5.exponent();
};
const factorialFunction = () => {
    obj5.factorial();
};
const signChangeFunction = () => {
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
//# sourceMappingURL=script2.js.map