let button = document.getElementById("click-button");
let modal = document.getElementById("normal-modal");
button.onclick = function () {
    modal.style.display = "block";
}
let close_cross = document.querySelector('#close');
close_cross.onclick = function () {
    modal.style.display = "none";
}

window.onclick = function (event) {
    console.log("clicked normal")
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


// for Right side slide

let slide_open_button = document.getElementById("Open-Right-Model");
let slide_modal = document.getElementById("slide-modal");

slide_open_button.onclick = function () {
    slide_modal.style.display = "block";
}

let slide_close_cross = document.querySelector('#close-rightModel');
slide_close_cross.onclick = function () {
    slide_modal.style.display = "none";
}


//JS for hybrid model.

let hybrid_model_button = document.getElementById("hybrid-button");

let Hybrid_modal = document.getElementById("hybrid-modal");
hybrid_model_button.onclick = function () {
    Hybrid_modal.style.display = "block";
}

let hybrid_close_cross = document.querySelector('#hybridModel-close');
hybrid_close_cross.onclick = function () {
    Hybrid_modal.style.display = "none";
}


let Hybrid_slide_open_button = document.getElementById("open-slide-Hybrid");
let hybrid_slide_modal = document.getElementById("hybrid-slide-modal");

Hybrid_slide_open_button.onclick = function () {
    hybrid_slide_modal.style.display = "block";
}

let hybrid_slide_close_cross = document.querySelector('#close-Hybrid-rightModel');
hybrid_slide_close_cross.onclick = function () {
    hybrid_slide_modal.style.display = "none";
}