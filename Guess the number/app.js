// Defining the second Form
const innerHtml = `
  <form action="#">
    <input id="input2" type="text" placeholder="Enter your guess" />
    <button class="btn btn-primary submit">Submit</button>
  </form>
`;

// Defined the variables

const main = document.querySelector(".container");
const text = document.querySelector(".number");
const input = document.querySelector("#input");
const form = document.querySelector("form");
const popUp = document.querySelector(".popUp");
const popUpText = document.querySelector(".popUpText");
const restart = document.querySelector("#restart");

// Guess count variable

let count = 0;

form.addEventListener("submit", function (e) {
  //Form event listener on submission
  e.preventDefault();
  let value = parseInt(input.value); //storing the input value

  let randomVal = Math.floor(Math.random() * value) + 1; //generating random number

  text.innerText = `Guess any number between 0 to ${value}`; //Updating the main text

  form.remove(); //Removing Form

  const newForm = document.createElement("form"); //Creating New Form

  newForm.innerHTML = innerHtml; //Adding elements to the form

  text.insertAdjacentElement("afterend", newForm); //Adding the form in the HTML

  newForm.addEventListener("submit", function (e) {
    //Adding guess form event listener
    e.preventDefault();

    const guessInput = document.querySelector("#input2"); //storing the guess input element

    count++; //Updating count

    let guess = parseInt(guessInput.value); //storing the guess value

    if (guess === randomVal) {
      //checking if guess and random matches

      popUp.classList.remove("d-none"); //Updating the classes

      popUp.classList.add("d-flex");

      main.classList.add("active");

      popUpText.innerText = `Congrats. It took you ${count} tries`;

      restart.addEventListener("click", () => {
        //Restart button functionality
        location.reload();
      });
    } else if (guess > randomVal) {
      //If guess doesnt match
      text.innerText = "Too high Guess again";
    } else {
      text.innerText = "Too low Guess again";
    }

    guessInput.value = ""; //clearing guess input box
  });
});
