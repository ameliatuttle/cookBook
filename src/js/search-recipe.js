document.getElementById('searchRecipes').addEventListener('click', function() {
    const type = document.getElementById('recipeType').value;

    if (type) {
        showSpinner(); // Show the spinner when starting the fetch
        fetchRecipesByType(type);
    } else {
        alert('Please select a recipe type.');
    }
});

function fetchRecipesByType(type) {
    const apiKey = '3ddcfd3d04ac4d039c0afbca04615927';
    const url = `https://api.spoonacular.com/recipes/complexSearch?type=${type}&apiKey=${apiKey}`;

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json();
        })
        .then(data => {
            hideSpinner(); // Hide the spinner after fetching
            displayRecipes(data.results);
        })
        .catch(error => {
            hideSpinner(); // Hide the spinner in case of error
            console.error('Error fetching data:', error);
        });
}

function displayRecipes(recipes) {
    const resultsDiv = document.getElementById('recipeResults');
    resultsDiv.innerHTML = ''; // Clear previous results

    if (recipes.length === 0) {
        resultsDiv.innerHTML = '<p>No recipes found for this type.</p>';
        return;
    }

    recipes.forEach(recipe => {
        const recipeDiv = document.createElement('div');
        recipeDiv.className = 'recipe-item';
        recipeDiv.innerHTML = `<h3>${recipe.title}</h3>`;
        recipeDiv.addEventListener('click', () => fetchRecipeCard(recipe.id));
        resultsDiv.appendChild(recipeDiv);
    });
}

function fetchRecipeCard(recipeId) {
    const apiKey = '3ddcfd3d04ac4d039c0afbca04615927';
    const url = `https://api.spoonacular.com/recipes/${recipeId}/card?apiKey=${apiKey}`;

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json();
        })
        .then(data => {
            displayRecipeCard(data.url, recipeId);
        })
        .catch(error => console.error('Error fetching recipe card:', error));
}

function displayRecipeCard(cardUrl, recipeId) {
    const resultsDiv = document.getElementById('recipeResults');
    resultsDiv.innerHTML = `<img src="${cardUrl}" alt="Recipe Card">`;

    // Create the "Add to Home" button
    const addButton = document.createElement('button');
    addButton.textContent = 'Add to Home';
    addButton.addEventListener('click', () => saveRecipeToLocalStorage(cardUrl, recipeId));
    resultsDiv.appendChild(addButton);
}

function saveRecipeToLocalStorage(cardUrl, recipeId) {
    const storedRecipes = JSON.parse(localStorage.getItem('recipes')) || [];
    storedRecipes.push({ cardUrl: cardUrl, recipeId: recipeId, type: 'find-recipe' });
    localStorage.setItem('recipes', JSON.stringify(storedRecipes));
    alert('Recipe added to Home!');
}

function showSpinner() {
    document.getElementById('loadingSpinner').style.display = 'block';
}

function hideSpinner() {
    document.getElementById('loadingSpinner').style.display = 'none';
}
