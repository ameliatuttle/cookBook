import"./style-C6L-mt3c.js";document.addEventListener("DOMContentLoaded",()=>{document.getElementById("saveRecipe").addEventListener("click",function(){const e=document.getElementById("title").value,t=document.getElementById("description").value,i=document.getElementById("image").files[0];if(e&&t){const a=new FileReader;a.onload=function(l){const o=l.target.result,c={title:e,description:t,image:o,type:"create"};let n=JSON.parse(localStorage.getItem("recipes"))||[];n.push(c),localStorage.setItem("recipes",JSON.stringify(n)),alert("Recipe saved! Go to the homepage to see your recipe."),window.location.href="src/index.html"},i?a.readAsDataURL(i):alert("Please upload an image.")}else alert("Please fill in all fields.")})});
