    const punchlineButton = document.getElementById("punchlineButton")
    const jokeSetup = document.getElementById("jokeSetup")
    const jokePunchline = document.getElementById("jokePunchline")
    const newJokeButton = document.getElementById("newJokeButton")
    const audio = document.getElementById("punchlineAudio")
    let punchline = "";
       
    //calls api and returns joke
    async function getData() {
        try {
            // Clear the previous joke while loading a new one
            jokeSetup.textContent = "Loading...";
            jokePunchline.textContent = "";

            //api call
            //const response = await fetch("https://official-joke-api.appspot.com/random_joke");
            response = "Knock Knock"

            /*if (!response.ok) {
                throw new Error("Error during request")
            }*/

            const data = await response.json();
            
            jokeSetup.textContent = data.setup;
            punchline = data.punchline;
            
        }   
        catch (error) {
            console.error(error);
            jokeSetup.textContent = "Could not load a joke. Try again later."
        }
    }
    getData()

    //reveals punchline and plays audio
    punchlineButton.addEventListener("click", function() {
        jokePunchline.textContent = punchline;
        audio.play();
    });

    newJokeButton.addEventListener("click", getData)
