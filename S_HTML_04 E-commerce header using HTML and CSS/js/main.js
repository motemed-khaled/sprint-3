//  add active class in the link
let allLi = document.querySelectorAll(".left .links ul li");
allLi.forEach((li) => {
    li.addEventListener("click", (e) => {
        e.target.parentElement.querySelectorAll(".active").forEach(ele => {
            ele.classList.remove("active");
        })
        e.target.classList.add("active");
    })
});
// end add active class in the link


// start toggle menu
let toggleButton = document.querySelector(".mobile");
toggleButton.addEventListener("click", () => {
document.querySelector(".left .links ul").classList.toggle("show");
})
// end toggle menu


// start catogry menu
document.querySelector(".catDown").addEventListener("click", () => {
    if (document.querySelector(".catLinks").classList.contains("show")) {
        document.querySelector(".catLinks").classList.remove("show");
    } else {
        document.querySelector(".catLinks").classList.add("show");
    }
})
// end catogry menu


// close toggle menu when user click in body
document.addEventListener("click", (e) => {
    if (e.target.classList.contains("catDown")) {
        return false;
    } else {
        if (document.querySelector(".catLinks").classList.contains("show")) {
        document.querySelector(".catLinks").classList.remove("show");
    }
    }
    if (e.target.classList.contains("mobile")) {
        return false;
    } else {
        if (document.querySelector(".left .links ul").classList.contains("show")) {
            document.querySelector(".left .links ul").classList.remove("show")
        }
    }

})
// end close toggle menu when user click in body
