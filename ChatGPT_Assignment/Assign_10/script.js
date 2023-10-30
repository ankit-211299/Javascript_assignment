const imgContainerElement = document.getElementById("imgContainer");
const fullScaleImage = document.getElementById("fullScaleImage");
const fullScaleImageContainer = document.getElementById("fullScaleImageContainer");
const imgElements = document.querySelectorAll(".img");

imgElements.forEach((imgElement) => {
    imgElement.addEventListener("click",function(event){
        const imgSrc = event.target.src;
        fullScaleImage.src = imgSrc;
        fullScaleImageContainer.style.display = "flex";
    });
});

fullScaleImageContainer.addEventListener("click",function(event){
    fullScaleImageContainer.style.display = "none";
});