function init () {
    document.querySelector('#dark_mode_toggler').addEventListener('click', changeLightMode)
}

/**
 * Show the navbar as a responsive menu (mobile: hamburger icon / desktop: list of text)
 */
function showResponsiveMenu() {
    const menu = document.getElementById("topnav_responsive_menu");
    const icon = document.getElementById("topnav_hamburger_icon");
    const root = document.getElementById("root");
    if (menu.className === "") {
        menu.className = "open";
        icon.className = "open";
        root.style.overflowY = "hidden";
    } else {
        menu.className = "";                    
        icon.className = "";
        root.style.overflowY = "";
    }
}

/**
 * Function to change background colors and images when user click on sun / moon icons
 */
function changeLightMode() {

    document.querySelector("body").classList.toggle("dark-theme")
    if (document.querySelector("body").classList.contains("dark-theme")) {
        document.querySelector('#dark_mode_toggler').src = "assets/images/sun-svgrepo-com.svg"
        document.querySelector('#github_logo_white').hidden = true
        document.querySelector('#github_logo_dark').hidden = false
        document.querySelector('#twitter_logo_white').hidden = true
        document.querySelector('#twitter_logo_dark').hidden = false

    } else 
    icon.src = "assets/images/dark-mode-svgrepo-com.svg"

}

document.addEventListener("DOMContentLoaded", init);