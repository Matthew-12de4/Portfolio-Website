window.expand = expand;
window.collapse = collapse;

function expand(img, contentToDisplay, description, gitLink)
{
    let expandedVideo = document.querySelector(".expandedMedia");
    let expandedHeader = document.querySelector(".desc");
    let expandedGitLink = document.querySelector(".gitLink");

    let xPos = (window.scrollX + img.getBoundingClientRect().left) - 8;

    expandedGitLink.href = gitLink;
    expandedHeader.innerHTML = description;

    expandedVideo.parentElement.style.marginLeft = String(xPos).concat("px");

    expandedVideo.src = contentToDisplay;
    expandedVideo.parentElement.style.display = "block";
    expandedVideo.load();
    expandedVideo.play();
}
function collapse(btn)
{
    let expandedVideo = document.querySelector(".expandedMedia");

    btn.parentElement.style.display='none'
    expandedVideo.pause();
    expandedVideo.currentTime = 0;
}