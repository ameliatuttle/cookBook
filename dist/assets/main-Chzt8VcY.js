import"./style-BBMR6zam.js";document.addEventListener("DOMContentLoaded",()=>{const n=document.getElementById("stickyNotesContainer");(JSON.parse(localStorage.getItem("recipes"))||[]).forEach(t=>{const e=document.createElement("div");e.classList.add("sticky-note"),e.style.backgroundColor=t.type==="create"?"lightblue":"lightgreen",t.type==="create"?e.innerHTML=`
                <h3>${t.title||""}</h3>
                <p>${t.description||"No description provided."}</p>
                ${t.image?`<img src="${t.image}" alt="${t.title} Image" class="sticky-image">`:""}
                <button class="delete-btn">Delete</button>
            `:e.innerHTML=`
                ${t.title?`<h3>${t.title}</h3>`:""}
                ${t.cardUrl?`<img src="${t.cardUrl}" alt="${t.title} Card Image" class="sticky-image">`:""}
                <button class="delete-btn">Delete</button>
            `,n.appendChild(e),e.querySelector(".delete-btn").addEventListener("click",()=>{s(t.title),e.remove()})})});function s(n){let l=JSON.parse(localStorage.getItem("recipes"))||[];l=l.filter(t=>t.title!==n),localStorage.setItem("recipes",JSON.stringify(l))}
