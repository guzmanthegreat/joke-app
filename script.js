const punchlineButton = document.getElementById("punchlineButton");
const jokeSetup = document.getElementById("jokeSetup");
const jokePunchline = document.getElementById("jokePunchline");
const newJokeButton = document.getElementById("newJokeButton");
const audio = document.getElementById("punchlineAudio");
const newJokeButtonText = document.getElementById("newJokeButtonText");
let punchline = "";

//calls api and returns joke
async function getData() {
  try {
    //clear the previous joke while loading a new one
    jokeSetup.textContent = "Loading...";
    jokePunchline.textContent = "";
    punchlineButton.hidden = false;

    //api call
    const response = await fetch(
      "https://official-joke-api.appspot.com/random_joke",
    );

    //Prints message in console if error in http status code and jumps to catch block
    if (!response.ok) {
      throw new Error("Error during request");
    }

    // runs if status code sucessful

    //parses response from api to json js object
    //'await' tells program to pause at this line until data is received
    const data = await response.json();

    //look at api documentation to know how to access keys (e.g. 'setup' and punchline)
    jokeSetup.textContent = data.setup;
    punchline = data.punchline;
  } catch (error) {
    console.error(error);
    jokeSetup.textContent = "Could not load a joke. Try again later.";
    punchlineButton.hidden = true;
    newJokeButtonText.textContent = "Reload";

    document.getElementById("newJokeButton").addEventListener("click", () => {
      location.reload();
    });
  }
}
getData();

//reveals punchline and plays audio
punchlineButton.addEventListener("click", function () {
  jokePunchline.textContent = punchline;
  punchlineButton.hidden = true;
  audio.play();
});

newJokeButton.addEventListener("click", getData);
