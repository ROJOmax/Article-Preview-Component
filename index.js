//Desktop Share Button Toggle
const desktopShareBtn = document.getElementById("desktop-share-btn")

desktopShareBtn.addEventListener("click", toggleDesktopShare)

function toggleDesktopShare() {

    const shareShapeContainer = document.querySelector(".share-shape-container");


    shareShapeContainer.classList.toggle("display-none")

}

// Mobile Share Toggle

const mobileAuthorArea = document.querySelector(".mobile-author-area")

const mobileSocialSharingBar = document.querySelector(".mobile-social-sharing-bar")

const mobileShareBtnContainer = document.querySelector(".mobile-share-btn-container")

mobileShareBtnContainer.addEventListener("click", function () {



    mobileAuthorArea.style.display = "none"
    mobileSocialSharingBar.style.display = "flex"

})


const mobileSocialSharingBtn = document.querySelector(".mobile-social-sharing-btn-container")

mobileSocialSharingBtn.addEventListener("click", function () {

    mobileAuthorArea.style.display = "flex"
    mobileSocialSharingBar.style.display = "none"

})
