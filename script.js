// assign the variables
 const jokeEl = document.getElementById("joke");
 const jokeBtn = document.getElementById("jokeBtn");

 generatejoke();

 jokeBtn.addEventListener('click' ,generatejoke)

 async function generatejoke() {
     const config = {
         headers: {
             Accept: 'application/json'
         }
     }
     const response = await fetch('https://icanhazdadjoke.com', config);
     const data = await response.json();

     jokeEl.innerHTML = data.joke;
 }