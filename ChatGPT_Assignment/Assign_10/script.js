const imgElements = document.querySelectorAll(".img");
const fullScaleImage = document.getElementById("fullScaleImage");
const fullScaleImageContainer = document.getElementById("fullScaleImageContainer");
const closeContainer = document.getElementById("closeContainer");
const closeButton = document.getElementById("close");

imgElements.forEach((imgElement)=>{
    imgElement.addEventListener("click",function(event){
        const imgSource = imgElement.getAttribute("src");
        fullScaleImage.src = imgSource;
        closeContainer.style.display = "flex";
        fullScaleImageContainer.style.display = "flex";
        document.body.style.overflow = "hidden";
    });
});

closeButton.addEventListener("click",function(event){
    closeContainer.style.display = "none";
    fullScaleImageContainer.style.display = "none";
    document.body.style.overflow = "auto";
});