function showPoem(response) {
    console.log(response.data);

    let generatedPoem = (response.data.answer);
    generatedPoem = generatedPoem.toLowerCase(); // used to get rid of capitalisation at start of each line
    generatedPoem = generatedPoem.charAt(0).toUpperCase() + generatedPoem.slice(1);
    
    new Typewriter('#poem', {
        strings: generatedPoem, // response contains \n for formatting - how to use this in displayed poem?
        autoStart: true,
        cursor: "",
        delay: 60,
      });
}

function generatePoem(event) {
    event.preventDefault();

    let userPrompt = document.querySelector("#user-input");
    
    let apiKey = "acbbefb303a70144ef2f13t2a94oef9a";
    let apiPrompt = `Please tell me a haiku about ${userPrompt.value}`; /* Need .value to get the content*/
    let context = "You are a helpful assistant and a haiku poet.  Please provide a succinct answer.";

    let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${apiPrompt}&context=${context}&key=${apiKey}`;

    axios.get(apiUrl).then(showPoem);
    
}

let poemFormElement = document.querySelector("#poem-generator");
poemFormElement.addEventListener("submit", generatePoem);