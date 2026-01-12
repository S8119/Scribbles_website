"use strict";

let lastUpdated = new Date("January 3, 2025 13:10:51");
let currentDay = new Date();
let dayDifference = Math.round((currentDay - lastUpdated)/(1000*60*60*24));

window.addEventListener("load", setDate);

function setDate() {
    document.getElementById("modifiedDate").textContent = lastUpdated.toLocaleDateString();
    document.getElementById("currentDate").textContent = currentDay.toLocaleDateString();
    document.getElementById("difference").textContent = dayDifference;
}