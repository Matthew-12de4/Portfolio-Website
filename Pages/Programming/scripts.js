window.expand = expand;
window.collapse = collapse;

function expand(contentDisplay, description, gitLink)
{
    let expandedVideo = document.querySelector(".expandedMedia");
    let expandedHeader = document.querySelector(".desc");
    let expandedGitLink = document.querySelector(".gitLink");

    expandedGitLink.href = gitLink;

    expandedHeader.innerHTML = description;

    expandedVideo.src = contentDisplay;
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