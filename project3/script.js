/*
  Investment Growth Calculator
  Calculates future value using the compound interest formula.
*/

document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("investmentForm");
    const InvestmentInput = document.getElementById("Investment");
    const IntrestInput = document.getElementById("Interest");
    const RetirementInput = document.getElementById("Retirement");
    
    
    const resultBox = document.getElementById("resultBox");
    const resultText = document.getElementById("resultText");

    form.addEventListener("submit", function (event) {
        event.preventDefault();
        const initialAmount = parseFloat(InvestmentInput.value);
        const rate = parseFloat(IntrestInput.value);
        const retirementYear = parseInt(RetirementInput.value);

        const currentYear = new Date().getFullYear();
        const years = retirementYear - currentYear;
        const compound = initialAmount * (Math.pow((1 + rate / 100), years));

        resultText.innerText = "Estimated Growth by the time of retirement: $" + compound.toFixed(2);
        resultBox.style.display = "block";

        console.log("Calculation complete: " + compound);
    });
});