function displayRecipe(response) {
  new Typewriter("#recipe-response", {
    strings: response.data.answer,
    autoStart: true,
    delay: 10,
    cursor: "",
  });
}

function generateRecipe(event) {
  event.preventDefault();
  let recipeQuery = document.querySelector("#recipe-query");
  let apiKey = "84ob6879a3t305ff0c4b95aea130d3b6";
  let context =
    "You are an AI chef specializing in traditional cuban cuisine. Provide one recipe using the imperial system of measurements. Make sure to create a recipe based on the user dish from the user instructions. format your response with an ingredients list a simplified instructions list, and ingredients list. Please generate a recipe in HTML, and only provide the basic HTML. Do not include ```html at the beginning or ``` at the end.";
  let prompt = `User instructions: generate a traditional cuban recipe for ${recipeQuery.value}`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let recipeResponse = document.querySelector("#recipe-response");
  recipeResponse.classList.remove("hidden");
  recipeResponse.innerHTML = `<div class="generating">Generating recipe for ${recipeQuery.value}..</div>`;

  axios.get(apiUrl).then(displayRecipe);
}

let recipeFormElement = document.querySelector("#recipe-generator-form");
recipeFormElement.addEventListener("submit", generateRecipe);
