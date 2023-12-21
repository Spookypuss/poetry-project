function showPoem(response) {

    let generatedPoem = (response.data.answer);
    let formattedPoem = generatedPoem.replace(/\n/g, '<br/>'); //Need the /.../g to accept the \, and the '' to inject the html
    
    new Typewriter('#poem', {
        strings: formattedPoem, // response contains \n for formatting - how to use this in displayed poem?
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

    let poemElement = document.querySelector("#poem");
    poemElement.innerHTML = `Generating a haiku about ${userPrompt.value} for you now...`;
}

let poemFormElement = document.querySelector("#poem-generator");
poemFormElement.addEventListener("submit", generatePoem);