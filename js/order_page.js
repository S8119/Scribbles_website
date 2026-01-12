"use strict";

let totalCost = 0;
let messageElement = document.getElementById("totalCost");

let shabbosForm = document.forms[0];
let yamimTovimForm = document.forms[1];
let mitzvosForm = document.forms[2];
let alefBeisForm = document.forms[3];

let shabbosAmount = shabbosForm.shabbos;
let yomTovAmount = yamimTovimForm.yamimTovim;
let mitzvosAmount = mitzvosForm.mitzvos;
let alefBeisAmount = alefBeisForm.alefBeis;

window.addEventListener("load", clearForm);

window.addEventListener("input", function() {
    try {
        calculateTotalCost();
    } catch(error) {
        messageElement.innerHTML = error;
    }

});

function clearForm() {
    shabbosAmount.value = 0;
    yomTovAmount.value = 0;
    mitzvosAmount.value = 0;
    alefBeisAmount.value = 0;
}

function calculateTotalCost() {
    totalCost = 0;
    for (let i = 0; i < document.forms.length; i++)
        if (document.forms[i].getElementsByTagName("input")[0].value < 0) throw "Please make sure all quantities are positive.";
    for (let i = 0; i < document.forms.length; i++)
        if (document.forms[i].getElementsByTagName("input")[1].checked) {
            totalCost += (.99 * document.forms[i].getElementsByTagName("input")[0].value);
        } else if (document.forms[i].getElementsByTagName("input")[2].checked) {
            totalCost += (1.49 * document.forms[i].getElementsByTagName("input")[0].value);
        } else if (document.forms[i].getElementsByTagName("input")[3].checked) {
            totalCost += (1.99 * document.forms[i].getElementsByTagName("input")[0].value);
        }
    totalCost = totalCost.toFixed(2);
    displayTotalCost();
}

function displayTotalCost() {
    messageElement.innerHTML = "$" + totalCost;
}