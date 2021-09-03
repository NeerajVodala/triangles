const inputAngles = document.querySelectorAll(".input-angle");
const checkButton = document.querySelector(".btn-check");
const result = document.querySelector(".result");

checkButton.addEventListener("click", function checkAngles() {
    const sum = sumOfAngles(inputAngles[0].value, inputAngles[1].value, inputAngles[2].value);
    if (inputAngles[0].value && inputAngles[1].value && inputAngles[2].value) {
        if (sum === 180) {
            result.innerText = "Yay! The angles form a Triangle";
        } else {
            result.innerText = "oops! The angles don't form a Triangle";
        }
    } else {
        result.innerText = "Please enter all the angles";
    }
});

function sumOfAngles() {
    const sum = Number(inputAngles[0].value) + Number(inputAngles[1].value) + Number(inputAngles[2].value);
    return sum;
}