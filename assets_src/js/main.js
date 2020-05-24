import { setOrder, cleanSetOrder } from "./articles"
import { sidebar, cleanSidebar } from "./sidebar"
import { hamburger } from "./hamburger"
import Swup from "swup"

const options = {
    linkSelector: 'a:not([href^="http"]):not([href^="#"])',
    containers: [".swup-container", ".swup-header", ".swup-sidebar"],
}

function checkPortfolioClass() {
    if (window.location.pathname == "/portfolio/") {
        document.querySelector("body").classList.add("portfolio")
    } else {
        document.querySelector("body").classList.remove("portfolio")
    }
}

window.onload = () => {
    
    checkPortfolioClass()
    setOrder()
    hamburger()
    sidebar()

    const swup = new Swup(options);
    swup.on("contentReplaced", () => {
        checkPortfolioClass()
        setOrder()
        hamburger()
        sidebar()
    })
    swup.on('willReplaceContent', () => { 
        cleanSetOrder()
        cleanSidebar()
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    })

}
