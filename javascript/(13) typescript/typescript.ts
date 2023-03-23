(function () {
    'use strict';

    function solveDivision(dividend: number, divisor: number) {
        if (divisor === 0) {
            printSolution("Cannot divide by 0");
        }
        else {
            let quotient: number = dividend / divisor;
            printSolution(quotient);
        }
    }

    function printSolution(solution: number | string) {
        console.log(solution);
    }

    type candyAmounts = 100 | 50 | 36 | 12;
    let numOfCandies: candyAmounts = 36;

    interface groupOfChildren {
        age?;
        totalNum;
    }

    let numOfChildren: groupOfChildren = {
        totalNum: 18
    }

    solveDivision(numOfCandies, numOfChildren.totalNum);


    class doMultiplication {
        constructor(public candies: candyAmounts, public candymen: number) {
        }

        solve() {
            return this.candies * this.candymen;
        }
    }

    const product = new doMultiplication(12, 4);
    console.log(product.solve());

}());