const h2Elem = document.querySelector("h2");
const buttons = document.querySelectorAll(".btn");
let counter = 0;
h2Elem.innerHTML = 0;

buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    const status = event.target.dataset.status;
    if (status === "increase") {
      counter++;
    } else if (status === "decrease") {
      counter--;
    } else {
      counter = 0;
    }
    h2Elem.innerHTML = counter;
    switch (true) {
      case counter > 0:
        h2Elem.style.color = "green";
        break;
      case counter < 0:
        h2Elem.style.color = "red";
        break;
      case counter == 0:
        h2Elem.style.color = "rgb(31, 29, 29)";
        break;
    }
  });
});
