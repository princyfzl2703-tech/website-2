document.addEventListener("DOMContentLoaded", () => {

    const paper = document.querySelector(".paper");

    // Small delay to make the entrance feel cinematic
    setTimeout(() => {

        paper.style.transform = "scale(1)";

    }, 100);



    // Optional: soft typing effect setup
    const message = document.querySelector(".message");

    message.addEventListener("click", () => {

        message.style.cursor = "text";

    });


});

function goHome(){

    window.location.href="homepage.html";

}