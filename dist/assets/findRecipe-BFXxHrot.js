import"./style-C6L-mt3c.js";document.getElementById("searchRecipes").addEventListener("click",function(){const t=document.getElementById("recipeType").value;t?(p(),o(t)):alert("Please select a recipe type.")});function o(t){const n=`https://api.spoonacular.com/recipes/complexSearch?type=${t}&apiKey=3ddcfd3d04ac4d039c0afbca04615927`;fetch(n).then(e=>{if(!e.ok)throw new Error("Network response was not ok "+e.statusText);return e.json()}).then(e=>{i(),r(e.results)}).catch(e=>{i(),console.error("Error fetching data:",e)})}function r(t){const c=document.getElementById("recipeResults");if(c.innerHTML="",t.length===0){c.innerHTML="<p>No recipes found for this type.</p>";return}t.forEach(n=>{const e=document.createElement("div");e.className="recipe-item",e.innerHTML=`<h3>${n.title}</h3>`,e.addEventListener("click",()=>a(n.id)),c.appendChild(e)})}function a(t){const n=`https://api.spoonacular.com/recipes/${t}/card?apiKey=3ddcfd3d04ac4d039c0afbca04615927`;fetch(n).then(e=>{if(!e.ok)throw new Error("Network response was not ok "+e.statusText);return e.json()}).then(e=>{s(e.url,t)}).catch(e=>console.error("Error fetching recipe card:",e))}function s(t,c){const n=document.getElementById("recipeResults");n.innerHTML=`<img src="${t}" alt="Recipe Card">`;const e=document.createElement("button");e.textContent="Add to Home",e.addEventListener("click",()=>d(t,c)),n.appendChild(e)}function d(t,c){const n=JSON.parse(localStorage.getItem("recipes"))||[];n.push({cardUrl:t,recipeId:c,type:"find-recipe"}),localStorage.setItem("recipes",JSON.stringify(n)),alert("Recipe added to Home!")}function p(){document.getElementById("loadingSpinner").style.display="block"}function i(){document.getElementById("loadingSpinner").style.display="none"}