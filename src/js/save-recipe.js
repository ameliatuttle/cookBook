document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('saveRecipe').addEventListener('click', function() {
        const title = document.getElementById('title').value;
        const description = document.getElementById('description').value;
        const image = document.getElementById('image').files[0];
        
        if (title && description) {
            const reader = new FileReader();
            
            reader.onload = function(e) {
                const imageUrl = e.target.result;
    
                const recipe = {
                    title,
                    description,
                    image: imageUrl,
                    type: 'create'
                };
    
                let recipes = JSON.parse(localStorage.getItem('recipes')) || [];
                recipes.push(recipe);
                localStorage.setItem('recipes', JSON.stringify(recipes));
    
                alert("Recipe saved! Go to the homepage to see your recipe.");
                window.location.href = '/index.html';
            };
    
            if (image) {
                reader.readAsDataURL(image);
            } else {
                alert("Please upload an image.");
            }
        } else {
            alert("Please fill in all fields.");
        }
    });    
});
