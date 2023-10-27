const imageElements = document.querySelectorAll(".img");

imageElements.forEach((imageElement)=>{
    imageElement.addEventListener("click",(event) => {
        const imageSource = event.target.src;
        console.log("Clicked on:"+imageSource);
    });
});