const menuIcon = document.querySelector("#menu");
const closeIcon = document.querySelector("#close");
const nav = document.querySelector("nav");
const faqChild = document.querySelectorAll(".faq-child")


menuIcon.addEventListener("click",()=> {
    nav.classList.add("show");
    menuIcon.style.display = "none";
    closeIcon.style.display = "block";

    closeIcon.addEventListener("click", () => {
        nav.classList.remove("show");
        menuIcon.style.display = "block";
        closeIcon.style.display = "none";
    })
});

faqChild.forEach((div)=> {
    const showMore = div.querySelector("#ex-more");
    const showLess = div.querySelector("#con-less");
    const faqAns = div.querySelector(".fc-para");

    showMore.addEventListener("click",()=> {
        showMore.style.display = "none";
        showLess.style.display = "flex";
        faqAns.style.display = "block"

        showLess.addEventListener("click", ()=> {
            showMore.style.display = "flex";
            showLess.style.display = "none";
            faqAns.style.display = "none"
        })
    })
})