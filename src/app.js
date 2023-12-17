function generatePoem(event) {
    event.preventDefault();
    
    new Typewriter('#poem', {
        strings: "In the autumn night, breaking into a pleasant chat.",
        autoStart: true,
        cursor: "",
        delay: 90,
      });
}

let poemFormElement = document.querySelector("#poem-generator");
poemFormElement.addEventListener("submit", generatePoem);