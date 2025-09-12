function generateRecipe(event) {
  event.preventDefault();

  new Typewriter("#recipe-response", {
    strings: "Ropa Vieja Recipe",
    autoStart: true,
    delay: 10,
    cursor: "",
  });
}

let recipeFormElement = document.querySelector("#recipe-generator-form");
recipeFormElement.addEventListener("submit", generateRecipe);
