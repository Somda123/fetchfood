// const body = document.body;
// // const search = document.getElementById('Search').value;
// const search = document.getElementById('Search').value;

// const food = document.getElementById("food");
// console.log("search : ", search);


// // const response = fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=veg`)
// const response  =  fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
// .then((response)=>{
//    return response.json();
//     // console.log(response);
    
// })
// .then((data)=>{
//     console.log(data);
//     console.log(data.meals.length);
    
//     for(let i =0; i<data.meals.length; i++){
//     console.log(data.meals[i].strMeal);

//     const div = document.createElement('fd');
//     div.classList.add("fod")
//     div.innerHTML = '';
//     console.log(data.strYoutube);
//     let v = data.meals[i].strMealThumb;
//  var imgSrc= v
//  var vidhref = data.meals[i].strYoutube;
//     console.log("v:",String(v));

// // food.appendChild(di)

//     div.innerHTML = `<h2> Meal: ${data.meals[i].strMeal}</h2>
//     <h2>Category : ${data.meals[i].strCategory}</h2>
//     <img src ='${imgSrc}' alt="not loaded" style=" width:200px"></img>
//     <br>
// <details>
// <h3>Ingredient:</h3>

// <li>
// ${data.meals[i].strIngredient1}
// </li>
// <li>
// ${data.meals[i].strIngredient2}
// </li>
// <li>
// ${data.meals[i].strIngredient3}
// </li>
// <li>
// ${data.meals[i].strIngredient4}
// </li>
// <li>
// ${data.meals[i].strIngredient5}
// </li>
//     <a href="${vidhref}">video</a>

// </details>

   
//     <br>
    
//     `
//     food.appendChild(div)

//     }
// })
// .catch((error)=>{
//     console.log(`this here some ${error}`);
    
// })




// // fd.style.color = 'blue'








document.getElementById("sr").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevents the form from refreshing the page
  
    const search = document.getElementById("Search").value.trim();
    const food = document.getElementById("food");
  
    // Clear previous results
    food.innerHTML = `<form id="sr">
              <input type="text" id="Search" name="search" placeholder="search" required>
              <button type="submit" id="submit">Search</button>
          </form>`;
  fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        if (data.meals) {
          console.log(data);
          console.log(data.meals.length);
  
          for (let i = 0; i < data.meals.length; i++) {
            const meal = data.meals[i];
            const div = document.createElement("div");
            div.classList.add("fod");
            let imgSrc = meal.strMealThumb;
          let vidhref = meal.strYoutube;

          div.innerHTML = `
                    <h2>Meal: ${meal.strMeal}</h2>
                    <h2>Category: ${meal.strCategory}</h2>
                    <img src='${imgSrc}' alt="not loaded" style="width:200px"></img>
                    <br>
                    <details>
                        <h3>Ingredients:</h3>
                        <ul>
                            <li>${meal.strIngredient1}</li>
<li>${meal.strIngredient2}</li>
                            <li>${meal.strIngredient3}</li>
                            <li>${meal.strIngredient4}</li>
                            <li>${meal.strIngredient5}</li>
                        </ul>
                        <a href="${vidhref}" target="_blank">Watch Video</a>
                    </details>
                    <br>
                `;

          food.appendChild(div);
        }
} else {
        // Handle case where no meals are found
        const div = document.createElement("div");
        div.innerHTML = `<h3>No meals found for "${search}". Please try a different search.</h3>`;
        food.appendChild(div);
      }
    })
    .catch((error) => {
      console.log(`Error occurred: ${error}`);
    });
});