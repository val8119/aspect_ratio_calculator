// selectors
const ratioWidth = document.querySelector(".ratio-width");
const ratioHeight = document.querySelector(".ratio-height");
const pixelWidth = document.querySelector(".pixel-width");
const pixelHeight = document.querySelector(".pixel-height");
const calcButton = document.querySelector(".calc-button");

// listeners
calcButton.addEventListener("click", calcPixels)

// functions
function calcPixels() {
    var ratio = ratioWidth.value / ratioHeight.value;
    console.log(ratio);

    if (pixelHeight.value == "") {
        // calculate height given width
        pixelHeight.value = pixelWidth.value / ratio;
    } else {
        // calculate width given height
        pixelWidth.value = pixelHeight.value * ratio;
    }
}