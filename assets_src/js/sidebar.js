export function sidebar() {
    const header = document.querySelector(".header")
    const sidebar = document.querySelector(".sidebar")
    const footer = document.querySelector(".footer")

    if (sidebar == null) return
    
    /** 
     * Gestion de l'affichage / masquage de la sidebar en fonction de la position de scroll
     * Affiche le menu uniquement si le header et le footer ne sont pas apparents. 
     */
    function toggleSidebar(entries, registry) {
        let isIntersecting = false
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                isIntersecting = true
            }
        });
        if (!isIntersecting) {
            sidebar.style.display = "block"
            setTimeout(() => {
                sidebar.style.opacity = 1
            }, 50)
        } else {
            sidebar.style.opacity = 0
            setTimeout(() => {
            sidebar.style.display = "none"
            }, 400);
        }
    }
    
    const observer = new IntersectionObserver(toggleSidebar, {})
    if (window.innerWidth >= 700) {
        observer.observe(header)
        observer.observe(footer)
    } 
    
    window.onresize = function(event) {
        if (window.innerWidth <= 700) {
            sidebar.removeAttribute("style")
            observer.unobserve(header)
            observer.unobserve(footer)
        } else {
            observer.observe(header)
            observer.observe(footer)
        }
    }

}


export function cleanSidebar() {
    window.removeEventListener("resize", function(event) {
        if (window.innerWidth <= 700) {
            sidebar.removeAttribute("style")
            observer.unobserve(header)
            observer.unobserve(footer)
        } else {
            observer.observe(header)
            observer.observe(footer)
        }
    })
}
