"use strict";

const displayContent = () => {
    const button = document.querySelector(".btn");
    const mainContent = document.querySelector(".main-content");

    button.hidden = true;
    mainContent.dataset.state = "shown";
};