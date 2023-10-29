const imgElements = document.querySelectorAll(".img");
const fullSizeImageContainer = document.getElementById("fullSizeImageContainer");
const fullSizeImage = document.getElementById("fullSizeImage");

imgElements.forEach(imgElement => {
    imgElement.addEventListener("click", function(event) {
        const elementName = imgElement.getAttribute("src");
        fullSizeImage.src = elementName;
        fullSizeImageContainer.style.display = "block";
    });
});

fullSizeImageContainer.addEventListener("click", function() {
    fullSizeImageContainer.style.display = "none";
});