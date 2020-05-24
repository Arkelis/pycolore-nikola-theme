export function hamburger() {
    const menuIcon = document.querySelector(".menu-icon")
    const menuNav = document.querySelector(".nav__links")
    const menuItems = document.querySelectorAll(".nav__item")
    let menuOpen = false;
    menuIcon.onclick = () => {
        menuIcon.classList.toggle("is-opened")
        menuNav.classList.toggle("is-opened")
        menuOpen = !menuOpen
        if (menuOpen) {
            document.querySelector("main")
        }
    }
    
    menuItems.forEach(element => {
        element.onclick = event => {
            // event.preventDefault()
            element.classList.toggle("is-opened")
            menuItems.forEach(el => {
                if (!el.isEqualNode(element)) {
                    el.classList.remove("is-opened")
                } 
            })
        }
    })
}

