// Creating cart with positions

// Get the block where the data will be displayed
let positionsOut = document.querySelector('.vacancies__row');
console.log(positionsOut);

// Fetch data from json file
fetch('/js/positions.json')
  .then((response) => response.json())
  .then((json) => json.map((item) => {
    // console.log(json);
    // Creating the cart element
    positionsOut.innerHTML += `
    <div class="vacancies__row-top">
      <div class="vacancies__row-article">
        <h4 class="vacancies__row-article-title">${item.name}</h4>
        <p class="vacancies__row-article-text">${item.location}</p>
        </div>
        <div class="vacancies__row-button">
        <button>Apply</button>
      </div>
    </div>
    `
  }))