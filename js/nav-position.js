// Onscroll, check the position of the nav bars; if necessary, toggle them to sticky
window.onscroll = function () 
{
    toggleNav(navDesktop);
    toggleNav(navMobile);
}

function toggleNav(nav) 
{
    if (document.documentElement.scrollTop > hero.offsetHeight) {
        nav.classList.add("fix-nav");
    } else {
        nav.classList.remove("fix-nav");
    }
}

// Utility: calculate vh in pixels
function vh(percent) 
{
    let h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    return (percent * h) / 100;
}