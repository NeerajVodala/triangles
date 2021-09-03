const inputs = document.querySelectorAll(".input");
const calcButton = document.querySelector(".btn-check");
const result = document.querySelector(".result");

calcButton.addEventListener("click", function calcArea() {
    const area = 1/2 * Number(inputs[0].value) * Number(inputs[1].value);
    result.innerText = "The area of the Triangle is " + area;
});