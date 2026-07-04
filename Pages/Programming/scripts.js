window.expand = expand;
window.collapse = collapse;

function expand(img, contentToDisplay, description, gitLink)
{
    let expandedVideo = document.querySelector(".expandedMedia");
    let expandedHeader = document.querySelector(".desc");
    let expandedGitLink = document.querySelector(".gitLink");

    expandedVideo.src = contentToDisplay;
    expandedVideo.parentElement.style.display = "block";
    expandedVideo.load();
    expandedVideo.play();

    if (window.matchMedia("(max-width: 800px)").matches) // Mobile View
    {
        img.parentElement.appendChild(expandedVideo.parentElement);

        expandedVideo.width = "320"
        expandedVideo.height = "180"

        expandedGitLink.href = gitLink;
        expandedHeader.innerHTML = description;
    }
    else // Desktop View
    {
        expandedGitLink.href = gitLink;
        expandedHeader.innerHTML = description;

        if ((window.scrollX + img.getBoundingClientRect().left) - 8 >= window.innerWidth/2){
            expandedVideo.parentElement.style.marginLeft = String((window.scrollX + img.getBoundingClientRect().right) - expandedVideo.parentElement.offsetWidth).concat("px");
        }
        else {
            expandedVideo.parentElement.style.marginLeft = String((window.scrollX + img.getBoundingClientRect().left) - 8).concat("px");
        }
    }
}
    
   
function collapse(btn)
{
    let expandedVideo = document.querySelector(".expandedMedia");

    btn.parentElement.style.display='none'
    expandedVideo.pause();
    expandedVideo.currentTime = 0;
}