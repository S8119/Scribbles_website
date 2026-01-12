"use strict";

let button = document.createElement("div");
button.id = "aboutUsButton";
button.textContent = "About Scribbles";
document.body.insertBefore(button, document.getElementsByTagName("footer")[0]);
button.addEventListener("click", createOverlay);

function createOverlay() {
    let overlay = document.createElement("div");
    overlay.id = "aboutUsOverlay";

    let wordBackground = document.createElement("div");
    wordBackground.id = "overlayBackground";
    overlay.appendChild(wordBackground);

    let overlayHeader = document.createElement("header");
    let overlayHeaderText = document.createTextNode("About Scribbles");
    overlayHeader.appendChild(overlayHeaderText);
    wordBackground.appendChild(overlayHeader);

    let overlayContent = document.createElement("p");
    let overlayContentText = document.createTextNode("Scribbles was made by Adina Winograd and Shulamit Khayyat in Fall Semester, 2024."
        + "Our goal is to bring Torah to Jewish kids in a fun and creative way."
        + " (Our second goal is to do a good job on our assignment :).)"
        + " Hope you enjoy the Scribbles coloring books!");
    overlayContent.appendChild(overlayContentText);
    wordBackground.appendChild(overlayContent);

    let closeButton = document.createElement("div");
    closeButton.id = "closeButton";
    let closeButtonText = document.createTextNode("Close");
    closeButton.appendChild(closeButtonText);
    wordBackground.appendChild(closeButton);
    closeButton.addEventListener("click", function() {
        document.body.removeChild(overlay);
    });

    document.body.appendChild(overlay);
}