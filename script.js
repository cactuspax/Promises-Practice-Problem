// Name: Paxton Robertson
// Desc: Pull and populate each respective card with data pulled from the corresponding API

// const dogAPI = "https://dog.ceo/api/breeds/image/random";
// const adviceAPI = "https://api.adviceslip.com/advice";
// const jokeAPI = "https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single"

async function getDog() {
    let result = await fetch("https://dog.ceo/api/breeds/image/random")
    let json = await result.json();
    document.querySelector("#dog-img").src = json.message;
}

async function getAdvice() {
    let result = await fetch("https://api.adviceslip.com/advice")
    let { slip } = await result.json();
    document.querySelector("#advice-output").innerText = slip.advice;
}

async function getJoke() {
    let result = await fetch("https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single")
    let { joke } = await result.json();
    document.querySelector("#joke-output").innerText = joke;
}

document.querySelector("#dog-btn").addEventListener("click", getDog);
document.querySelector("#advice-btn").addEventListener("click", getAdvice);
document.querySelector("#joke-btn").addEventListener("click", getJoke);