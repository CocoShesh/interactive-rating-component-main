var numberPick = document.getElementById("number-pick").value;

function handleNumbers(numberValue) {
  if (
    numberValue === "1" ||
    numberValue === "2" ||
    numberValue === "3" ||
    numberValue === "4" ||
    numberValue === "5"
  ) {
    document.getElementById("number" + numberValue).style.backgroundColor =
      "hsl(217, 12%, 63%)";
    document.getElementById("number" + numberValue).style.color = "white";
    document.getElementById("number-pick").textContent = numberValue;
  }
  document.getElementById("number-pick").textContent = numberValue;
}

function handleClick1() {
  handleNumbers("1");
}

function handleClick2() {
  handleNumbers("2");
}

function handleClick3() {
  handleNumbers("3");
}

function handleClick4() {
  handleNumbers("4");
}

function handleClick5() {
  handleNumbers("5");
}

document.addEventListener("DOMContentLoaded", function () {
  const ratingSection = document.getElementById("rating-section");
  const thankYouResponse = document.getElementById("thankyou-response");

  ratingSection.addEventListener("submit", function (event) {
    event.preventDefault();

    ratingSection.style.display = "none";
    thankYouResponse.style.display = "block";
  });

  thankYouResponse.addEventListener("submit", function (event) {
    event.preventDefault();
    thankYouResponse.submit();
  });
});
