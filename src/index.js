function displayRecipe(response) {
  console.log("recipe generated");
  new Typewriter("#recipe-response", {
    strings: response.data.answer,
    autoStart: true,
    delay: 10,
    cursor: "",
  });
}

function generateRecipe(event) {
  event.preventDefault();
  let receipeQuery = document.querySelector("#recipe-query");
  let apiKey = "84ob6879a3t305ff0c4b95aea130d3b6";
  let context =
    "You are a chef specializing in traditional cuban cuisine. Provide one recipe using the imperial system of measurements. Make sure to create a recipe based on the user dish from the user instructions. format your response with an ingredients list and an instructions list, for example <p>these are the ingredients</p> </br> <p>these are the instructions</p>. seperate each line with a <br /> and provide the ingredients and the instructions in paragraph form.";
  let prompt = `User instructions: generate a traditional cuban recipe for ${receipeQuery.value}`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  console.log("Generating recipe");
  console.log(`Prompt: ${prompt}`);
  console.log(`Context: ${context}`);

  axios.get(apiUrl).then(displayRecipe);
}

let recipeFormElement = document.querySelector("#recipe-generator-form");
recipeFormElement.addEventListener("submit", generateRecipe);
