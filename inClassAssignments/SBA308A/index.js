document.addEventListener('DOMContentLoaded', () => {
const jokes = document.getElementById("jokes")
const btn = document.getElementById("btn")
const newJokeInput = document.getElementById("newJoke");
const addJokeForm = document.getElementById("addJokeForm");
const url = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single"
const postURL =' https://api.humorapi.com/jokes'
let getJoke = async () => {
    jokes.classList.remove("fade")
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data.joke);
    jokes.textContent = `${data.joke}`
    jokes.classList.add("fade")
  } catch (error) {
    console.error('Error fetching joke:', error);
  }
}
btn.addEventListener('click', getJoke)

 // Function to add a joke
const addJoke = async (joke) => {
  try {
    const response = await fetch(postURL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ content: joke })
    });
    const data = await response.json();
    console.log('Joke added successfully:', data);
    alert('Joke added successfully!');
  } catch (error) {
    console.error('Error adding joke:', error);
    alert('Error adding joke. Please try again.');
  }
};

// Event listener for the submit event of the addJokeForm
addJokeForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const newJoke = newJokeInput.value.trim();
  if (newJoke !== '') {
    addJoke(newJoke);
    newJokeInput.value = '';
  } else {
    alert('Please enter a joke.');
  }
});
})