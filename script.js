    const punchlineButton = document.getElementById("punchlineButton")
    const jokeSetup = document.getElementById("jokeSetup")
    const jokePunchline = document.getElementById("jokePunchline")
    const newJokeButton = document.getElementById("newJokeButton")
    const audio = document.getElementById("punchlineAudio")
    let punchline = "";
       
    
    async function getData() {
        try {
            // Clear the previous joke while loading a new one
            jokeSetup.textContent = "Loading...";
            jokePunchline.textContent = "";

            //calls api and returns joke
            const response = await fetch("https://official-joke-api.appspot.com/random_joke");
            
            if (!response.ok) {
                throw new Error("The request got fucked up :(")
            }
            

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
