(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();async function l(){const r="/partials/header.html",o="/partials/footer.html",n=document.getElementsByTagName("header")[0],a=document.getElementsByTagName("footer")[0];await c(s,n,r,"afterBegin",!1),await c(s,a,o);const e=document.getElementById("header-title");if(e)switch(window.location.pathname){case"/create-recipe/index.html":e.textContent="The CookBook : Create Recipe";break;case"/find-recipe/index.html":e.textContent="The CookBook : Find Recipe";break;default:e.textContent="The CookBook : Home"}}async function c(r,o,n,a="afterBegin",e=!1,t){e&&(o.innerHTML="");const i=await r(n);o.insertAdjacentHTML(a,i.innerHTML)}async function s(r){let o=await fetch(r).then(d),n=document.createElement("template");return n.innerHTML=o,n}function d(r){if(r.ok)return r.text();throw new Error("Bad Response")}l();
