// display all music
let showButton = document.querySelector(".showmore");
showButton.addEventListener("click", () => {
    showButton.style.display = "none";
    document.querySelector(".content").classList.add("show");
})
// end display all music

// start play music on click
let iconStart = document.querySelectorAll(".play");
iconStart.forEach(icon => {
    icon.addEventListener("click", (e) => {
        //trigger audio
        e.target.nextElementSibling.play()
        
        // set overlay 
        document.querySelector(".over-lay").style.display = "block";

        // start popup
        let popDiv = document.createElement("div");
        let imageDiv = document.createElement("div");
        let image = document.createElement("img");
        let settingDiv = document.createElement("div");
        let iconDiv = document.createElement("div");
        let iconPlay = document.createElement("i");
        let iconLike = document.createElement("i")
        let iconRight = document.createElement("i");
        let iconLeft = document.createElement("i");


        // add class to my div 
        popDiv.classList.add("popup");
        imageDiv.classList.add("image");
        settingDiv.classList.add("setting");
        iconDiv.classList.add("iconDiv");

        // add image in image div
        image.setAttribute("src", e.target.parentElement.getAttribute("data-src"));
        imageDiv.appendChild(image);

        // add all element in setting div
        iconPlay.classList.add("fa-solid", "fa-pause", "play");
        iconLeft.classList.add("fa-solid", "fa-arrow-left", "leftIcon");
        iconRight.classList.add("fa-solid", "fa-arrow-right", "rightIcon");
        iconLike.classList.add("fa-solid", "fa-heart", "like");

        // add action in icon play
        iconPlay.addEventListener("click", () => {
            if (e.target.nextElementSibling.duration > 0 && !e.target.nextElementSibling.paused) {
                e.target.nextElementSibling.pause();
                iconPlay.classList.replace( "fa-pause" , "fa-play" );
            } else {
                e.target.nextElementSibling.play();
                iconPlay.classList.replace("fa-play" , "fa-pause");
            }  
        });

        //left arrow action 
        iconLeft.addEventListener("click", () => {
            if (e.target.parentElement.previousElementSibling == null) {
                let allMusic = [...document.querySelectorAll(".music-data div")]
                allMusic[allMusic.length - 1].firstElementChild.click();
                let preMusic = [...document.querySelectorAll(".popup")];
                preMusic.forEach(pre => {
                    preMusic[0].firstElementChild.click();
                    document.querySelector(".over-lay").style.display = "block";
                    return false;
                });
            } else {
                e.target.parentElement.previousElementSibling.firstElementChild.click();
                let preMusic = [...document.querySelectorAll(".popup")];
                preMusic.forEach(pre => {
                    preMusic[0].firstElementChild.click();
                    document.querySelector(".over-lay").style.display = "block";
                    return false;
                })
            }
        });

        //  right arrow action

        iconRight.addEventListener("click", () => {
            if (e.target.parentElement.nextElementSibling == null) {
                let allMusic = [...document.querySelectorAll(".music-data div")]
                allMusic[0].firstElementChild.click();
                let preMusic = [...document.querySelectorAll(".popup")];
                preMusic.forEach(pre => {
                    preMusic[0].firstElementChild.click();
                    document.querySelector(".over-lay").style.display = "block";
                    return false;
                });
            } else {
                e.target.parentElement.nextElementSibling.firstElementChild.click();
                let preMusic = [...document.querySelectorAll(".popup")];
                preMusic.forEach(pre => {
                    preMusic[0].firstElementChild.click();
                    document.querySelector(".over-lay").style.display = "block";
                    return false;
                })
            }
        });

        // like click action 
        iconLike.addEventListener("click", () => {
            document.querySelector(".popup .setting  .like").classList.toggle("clicked");
        })


        iconDiv.appendChild(iconLeft);
        iconDiv.appendChild(iconPlay);
        iconDiv.appendChild(iconRight);
        settingDiv.appendChild(iconDiv);
        settingDiv.appendChild(iconLike);

        // create close span

        let closeSpan = document.createElement("span");
        closeSpan.classList.add("close-span");
        closeSpan.innerHTML = "<i class='fa-solid fa-xmark'></i>";

        // add action close
        closeSpan.addEventListener("click", () => {
            popDiv.remove();
            document.querySelector(".over-lay").style.display = "none";
              // check audio 
            if (e.target.nextElementSibling.duration > 0 && !e.target.nextElementSibling.paused) {
            e.target.nextElementSibling.pause();
            }
        });
      
        popDiv.appendChild(closeSpan);

         // append div in parent
         popDiv.appendChild(imageDiv);
        popDiv.appendChild(settingDiv);

        // add div in my page

        document.body.appendChild(popDiv);
    })
})
// end play music on click