(function () {
    'use strict';
    function solveDivision(dividend, divisor) {
        if (divisor === 0) {
            printSolution("Cannot divide by 0");
        }
        else {
            var quotient = dividend / divisor;
            printSolution(quotient);
        }
    }
    function printSolution(solution) {
        console.log(solution);
    }
    var numOfCandies = 36;
    var numOfChildren = {
        totalNum: 18
    };
    solveDivision(numOfCandies, numOfChildren.totalNum);
    ///////////////////////////////////////////
    var doMultiplication = /** @class */ (function () {
        function doMultiplication(candies, candymen) {
            this.candies = candies;
            this.candymen = candymen;
        }
        doMultiplication.prototype.solve = function () {
            return this.candies * this.candymen;
        };
        return doMultiplication;
    }());
    var product = new doMultiplication(12, 4);
    console.log(product.solve());
}());
