"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExtraFunctionImplement = exports.SecondCalculator1Implement = exports.SecondCalculatorImplement = exports.FunctionCalculatorImplement = exports.TrigonometryCalculatorImplement = void 0;
var inputField = document.getElementById("input");
var TrigonometryCalculatorImplement = /** @class */ (function () {
    function TrigonometryCalculatorImplement(input) {
        this.degree = 0;
        this.input = input;
    }
    /**
     * @function  sine
     * @description   evaluates the sine of a number in degrees or radians
     * @params  none
     * @returns void
     * Examples:
     * - sin(90 radian) to 0.8939966636005579
     * - sin(90 degree) to 1
     */
    TrigonometryCalculatorImplement.prototype.sine = function () {
        if (this.degree === 0) {
            this.input.value = Math.sin((Math.PI / 180) * parseFloat(this.input.value)).toString();
        }
        else {
            this.input.value = Math.sin(parseFloat(this.input.value)).toString();
        }
    };
    /**
     * @function  cosine
     * @description  evaluates the cosine of a number in degrees or radians
     * @params  none
     * @returns void
     * Examples:
     * - cos(45 radian) to 0.5253219888177297
     * - cos(45 degree) to 0.7071067811865476
     */
    TrigonometryCalculatorImplement.prototype.cosine = function () {
        if (this.degree === 0) {
            this.input.value = Math.cos((Math.PI / 180) * parseFloat(this.input.value)).toString();
        }
        else {
            this.input.value = Math.cos(parseFloat(this.input.value)).toString();
        }
    };
    /**
     * @function  tangent
     * @description  evaluates the tangent of a number in degrees or radians
     * @params  none
     * @returns void
     * Examples:
     * - tan(60 radian) to 0.320040389379563
     * - tan(60 degree) to 1.7320508075688767
     */
    TrigonometryCalculatorImplement.prototype.tangent = function () {
        if (this.degree === 0) {
            this.input.value = Math.tan((Math.PI / 180) * parseFloat(this.input.value)).toString();
        }
        else {
            this.input.value = Math.tan(parseFloat(this.input.value)).toString();
        }
    };
    /**
     * @function  cotangent
     * @description  evaluates the cotangent of a number in degrees or radians
     * @params  none
     * @returns void
     * Examples:
     * - cot(30 radian) to -0.15611995216165922
     * - cot(30 degree) to 1.7320508075688774
     */
    TrigonometryCalculatorImplement.prototype.cotangent = function () {
        if (this.degree === 0) {
            this.input.value = (1 / Math.tan((Math.PI / 180) * parseFloat(this.input.value))).toString();
        }
        else {
            this.input.value = (1 / Math.tan(parseFloat(this.input.value))).toString();
        }
    };
    /**
     * @function  secant
     * @description  evaluates the secant of a number in degrees or radians
     * @params  none
     * @returns void
     * Examples:
     * - sec(45 radian) to 1.9035944074044246
     * - sec(45 degree) to 1.414213562373095
     */
    TrigonometryCalculatorImplement.prototype.secant = function () {
        if (this.degree === 0) {
            this.input.value = (1 / Math.cos((Math.PI / 180) * parseFloat(this.input.value))).toString();
        }
        else {
            this.input.value = (1 / Math.cos(parseFloat(this.input.value))).toString();
        }
    };
    /**
     * @function  cosecant
     * @description  evaluates the cosecant of a number in degrees or radians
     * @params  none
     * @returns void
     * Examples:
     * - cosec(60 radian) to -3.280725574403968
     * - cosec(60 degree) to 1.1547005383792517
     */
    TrigonometryCalculatorImplement.prototype.cosecant = function () {
        if (this.degree === 0) {
            this.input.value = (1 / Math.sin((Math.PI / 180) * parseFloat(this.input.value))).toString();
        }
        else {
            this.input.value = (1 / Math.sin(parseFloat(this.input.value))).toString();
        }
    };
    return TrigonometryCalculatorImplement;
}());
exports.TrigonometryCalculatorImplement = TrigonometryCalculatorImplement;
var FunctionCalculatorImplement = /** @class */ (function () {
    function FunctionCalculatorImplement(input) {
        this.input = input;
    }
    /**
     * @function  floor
     * @description  to round down and evaluates the largest integer less than or equal to a given number
     * @params  none
     * @returns void
     * Examples:
     * - 5.85 = 5
     */
    FunctionCalculatorImplement.prototype.floor = function () {
        this.input.value = Math.floor(parseFloat(this.input.value)).toString();
    };
    /**
     * @function  ceil
     * @description  to round up and evaluates the smaller integer greater than or equal to a given number
     * @params  none
     * @returns void
     * Examples:
     * - 5.23 = 6
     */
    FunctionCalculatorImplement.prototype.ceil = function () {
        this.input.value = Math.ceil(parseFloat(this.input.value)).toString();
    };
    /**
     * @function  random
     * @description  gives a random number from 0 up to but not including 1
     * @params  none
     * @returns void
     * Examples:
     * - 0.8535283651436478
     * - 0.6407613844878561
     * - 0.1827885058635727
     */
    FunctionCalculatorImplement.prototype.random = function () {
        this.input.value = Math.random().toString();
    };
    /**
     * @function  modulus
     * @description  evaluates the absolute value of a number
     * @params  none
     * @returns void
     * Examples:
     * - -6.235 = 6.235
     */
    FunctionCalculatorImplement.prototype.modulus = function () {
        this.input.value = Math.abs(parseFloat(this.input.value)).toString();
    };
    return FunctionCalculatorImplement;
}());
exports.FunctionCalculatorImplement = FunctionCalculatorImplement;
var SecondCalculatorImplement = /** @class */ (function () {
    function SecondCalculatorImplement(input, errorDiv) {
        this.input = document.getElementById(input);
        this.errorDiv = document.getElementById(errorDiv);
    }
    /**
     * @function  square
     * @description  performs square of a number
     * @params  none
     * @returns void
     * Examples:
     * - 5^2 to 25
     * - -6^2 to 36
     */
    SecondCalculatorImplement.prototype.square = function () {
        this.input.value = Math.pow(Number(this.input.value), 2).toString();
    };
    /**
     * @function  squareRoot
     * @description  performs the square root of a number
     * @params  none
     * @returns void
     * Examples:
     * - sqaureRoot(25) to 5
     * - squareRoot(-4) to Error!
     */
    SecondCalculatorImplement.prototype.squareRoot = function () {
        var inputNumber = Number(this.input.value);
        if (inputNumber < 0) {
            this.displayError();
        }
        else {
            this.input.value = Math.sqrt(inputNumber).toString();
        }
    };
    /**
     * @function  xRaiseY
     * @description  evaluates a number raised to another number
     * @params  none
     * @returns void
     * Examples:
     * - 6^3 to 216
     */
    SecondCalculatorImplement.prototype.xRaiseY = function () {
        this.input.value += "^";
    };
    /**
     * @function  raiseTo10
     * @description  gives 10 to the power of a number
     * @params  none
     * @returns void
     * Examples:
     * - 10^3 to 1000
     */
    SecondCalculatorImplement.prototype.raiseTo10 = function () {
        this.input.value = Math.pow(10, Number(this.input.value)).toString();
    };
    /**
     * @function  logarithm
     * @description  performs logarithm(log base 10) of a number
     * @params  none
     * @returns void
     * Examples:
     * - log(2) to 0.3010299956639812
     */
    SecondCalculatorImplement.prototype.logarithm = function () {
        var inputNumber = Number(this.input.value);
        if (inputNumber < 0) {
            this.displayError();
        }
        else {
            this.input.value = String(Math.log10(inputNumber));
        }
    };
    /**
     * @function  naturalLogarithm
     * @description  performs natural logarithm(ln base e) of a number
     * @params  none
     * @returns void
     * Examples:
     * - ln(2) to 0.6931471805599453
     */
    SecondCalculatorImplement.prototype.naturalLogarithm = function () {
        var inputNumber = Number(this.input.value);
        if (inputNumber < 0) {
            this.displayError();
        }
        else {
            this.input.value = Math.log(inputNumber).toString();
        }
    };
    /**
     * @function  displayError
     * @description  to display the error and hide it after 2 seconds
     * @params  none
     * @returns void
     */
    SecondCalculatorImplement.prototype.displayError = function () {
        var _this = this;
        this.errorDiv.textContent = "Error!";
        setTimeout(function () {
            _this.errorDiv.textContent = "";
            _this.input.value = "";
        }, 2000);
    };
    return SecondCalculatorImplement;
}());
exports.SecondCalculatorImplement = SecondCalculatorImplement;
var SecondCalculator1Implement = /** @class */ (function () {
    function SecondCalculator1Implement(input, errorDiv) {
        this.input = document.getElementById(input);
        this.errorDiv = document.getElementById(errorDiv);
    }
    /**
     * @function  cube
     * @description  to calculate the cube of a number
     * @params  none
     * @returns void
     * Examples:
     * - 2^3 to 8
     */
    SecondCalculator1Implement.prototype.cube = function () {
        this.input.value = Math.pow(Number(this.input.value), 3).toString();
    };
    /**
     * @function  cubeRoot
     * @description  to calculate the cube root
     * @params  none
     * @returns void
     * Examples:
     * - cubeRoot(125) to 5
     * - cubeRoot(-8) to Error!
     */
    SecondCalculator1Implement.prototype.cubeRoot = function () {
        var inputNumber = Number(this.input.value);
        if (inputNumber < 0) {
            this.displayError();
        }
        else {
            this.input.value = Math.cbrt(inputNumber).toString();
        }
    };
    /**
     * @function  raiseTo2
     * @description  to calculate 2 to power of a number
     * @params  none
     * @returns void
     * Examples:
     * - 2^5 to 32
     * - 2^54524 to Infinity
     */
    SecondCalculator1Implement.prototype.raiseTo2 = function () {
        this.input.value = Math.pow(2, Number(this.input.value)).toString();
    };
    /**
     * @function  logPlus
     * @description  to calculate logarithm of 1+p number
     * @params  none
     * @returns void
     * Examples:
     * - log1p(8) to 2.1972245773362196
     */
    SecondCalculator1Implement.prototype.logPlus = function () {
        var inputNumber = Number(this.input.value);
        if (inputNumber < 0) {
            this.displayError();
        }
        else {
            this.input.value = Math.log1p(inputNumber).toString();
        }
    };
    /**
     * @function  expMinus
     * @description  to calculate e^x-1 where x is number
     * @params  none
     * @returns void
     * Examples:
     * - expm1(2) to 6.38905609893065
     */
    SecondCalculator1Implement.prototype.expMinus = function () {
        this.input.value = Math.expm1(Number(this.input.value)).toString();
    };
    /**
     * @function  eRaisex
     * @description  to calculate e^x where x is number
     * @params  none
     * @returns void
     * Examples:
     * - e^2 to 7.3890560989306495
     */
    SecondCalculator1Implement.prototype.eRaisex = function () {
        this.input.value = Math.pow(Math.E, Number(this.input.value)).toString();
    };
    /**
     * @function  displayError
     * @description  to display the error and hide it after 2 seconds
     * @params  none
     * @returns void
     */
    SecondCalculator1Implement.prototype.displayError = function () {
        var _this = this;
        this.errorDiv.textContent = "Error!";
        setTimeout(function () {
            _this.errorDiv.textContent = "";
            _this.input.value = "";
        }, 2000);
    };
    return SecondCalculator1Implement;
}());
exports.SecondCalculator1Implement = SecondCalculator1Implement;
var ExtraFunctionImplement = /** @class */ (function () {
    function ExtraFunctionImplement(input, errorDiv) {
        this.input = document.getElementById(input);
        this.errorDiv = document.getElementById(errorDiv);
    }
    /**
     * @function  pi
     * @description  displays the value of PI
     * @params  none
     * @returns void
     * Examples:
     * - 3.141592653589793
     */
    ExtraFunctionImplement.prototype.pi = function () {
        this.input.value = Math.PI.toString();
    };
    /**
     * @function  euler
     * @description  displays the value of Euler's number
     * @params  none
     * @returns void
     * Examples:
     * - 2.718281828459045
     */
    ExtraFunctionImplement.prototype.euler = function () {
        this.input.value = Math.E.toString();
    };
    /**
     * @function  clearAll
     * @description  to entirely clear the input field
     * @params  none
     * @returns void
     */
    ExtraFunctionImplement.prototype.clearAll = function () {
        this.input.value = "";
    };
    /**
     * @function  removeOneElementFromEnd
     * @description  to remove one number from the right side end once clicking on it
     * @params  none
     * @returns void
     * Examples:
     * - 5.2893 to 5.289
     */
    ExtraFunctionImplement.prototype.removeOneElementFromEnd = function () {
        this.input.value = this.input.value.slice(0, -1);
    };
    /**
     * @function  byX
     * @description  performs inverse of a number
     * @params  none
     * @returns void
     * Examples:
     * - 1/2 to 0.5
     */
    ExtraFunctionImplement.prototype.byX = function () {
        var x = Number(this.input.value);
        this.input.value = (1 / x).toString();
    };
    /**
     * @function modulo
     * @description evaluates the remainder after dividing one number by another.
     * @params  none
     * @returns void
     * Examples:
     * - 9%7 to 2
     * - 2%2 to 0
     */
    ExtraFunctionImplement.prototype.modulo = function () {
        this.input.value += "%";
    };
    /**
     * @function  modulus
     * @description  evaluates the absolute value of a number
     * @params  none
     * @returns void
     * Examples:
     * - -6.235 = 6.235
     */
    ExtraFunctionImplement.prototype.modulus = function () {
        this.input.value = Math.abs(parseFloat(this.input.value)).toString();
    };
    /**
     * @function  exponent
     * @description  evaluates the value of E^x, where E is Euler's number
     * @params  none
     * @returns void
     * Examples:
     * - E^5 to 148.4131591025766
     */
    ExtraFunctionImplement.prototype.exponent = function () {
        var x = Number(this.input.value);
        this.input.value = Math.exp(x).toString();
    };
    /**
     * @function  factorial
     * @description  performs the factorial of a number
     * @params  none
     * @returns void
     * Examples:
     * - 5! to 120
     */
    ExtraFunctionImplement.prototype.factorial = function () {
        var _this = this;
        var number = Number(this.input.value);
        if (number < 0) {
            var errDiv = document.getElementById("errorDiv");
            this.errorDiv.textContent = "Error!";
            setTimeout(function () {
                _this.errorDiv.textContent = "";
                _this.input.value = "";
            }, 2000);
        }
        else if (number == 0 || number == 1) {
            this.input.value = "1";
        }
        else if (number > 1) {
            for (var i = number - 1; i > 1; i--) {
                number = number * i;
            }
            this.input.value = number.toString();
        }
    };
    /**
     * @function  signChange
     * @description  gives a number with its opposite sign
     * @params  none
     * @returns void
     * Examples:
     * - 7 to -7
     */
    ExtraFunctionImplement.prototype.signChange = function () {
        var x = Number(this.input.value);
        this.input.value = (-x).toString();
    };
    return ExtraFunctionImplement;
}());
exports.ExtraFunctionImplement = ExtraFunctionImplement;
var object = new TrigonometryCalculatorImplement(inputField);
console.log(object.sine());
