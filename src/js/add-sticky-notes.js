document.addEventListener('DOMContentLoaded', () => {
    const stickyNotesContainer = document.getElementById('stickyNotesContainer');

    const recipes = JSON.parse(localStorage.getItem('recipes')) || [];
    
    recipes.forEach(recipe => {
        const note = document.createElement('div');
        note.classList.add('sticky-note');
        note.style.backgroundColor = recipe.type === 'create' ? 'lightblue' : 'lightgreen';

        // Check the type and display accordingly
        if (recipe.type === 'create') {
            // Display the created recipe
            note.innerHTML = `
                <h3>${recipe.title || ''}</h3>
                <p>${recipe.description || 'No description provided.'}</p>
                ${recipe.image ? `<img src="${recipe.image}" alt="${recipe.title} Image" class="sticky-image">` : ''}
                <button class="delete-btn">Delete</button>
            `;
        } else {
            // Show the card image for recipes fetched from the API
            note.innerHTML = `
                ${recipe.title ? `<h3>${recipe.title}</h3>` : ''}
                ${recipe.cardUrl ? `<img src="${recipe.cardUrl}" alt="${recipe.title} Card Image" class="sticky-image">` : ''}
                <button class="delete-btn">Delete</button>
            `;
        }

        // Append each sticky note to the stickyNotesContainer
        stickyNotesContainer.appendChild(note);

        // Attach event listener to delete button for each note to remove from local storage
        const deleteButton = note.querySelector('.delete-btn');
        deleteButton.addEventListener('click', () => {
            deleteSticky(recipe.title);
            note.remove();
        });
    });
});

// Function to delete a sticky note from local storage
function deleteSticky(title) {
    let recipes = JSON.parse(localStorage.getItem('recipes')) || [];
    recipes = recipes.filter(recipe => recipe.title !== title);
    localStorage.setItem('recipes', JSON.stringify(recipes));
}
