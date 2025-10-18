
class SpecialHeader extends HTMLElement {
    connectedCallback(){
        this.innerHTML = 
        ` 
        <nav>
            <ul class="theme-header">
                <li><a class="specialheading" href ="index.html"> Orbital Minds </a></li>
                <li><a class="navbar" href ="Work.html"> Work </a></li>
                <li><a class="navbar" href ="Projects.html"> Projects </a></li>
                <li><a class="navbar" href ="Research.html"> Research </a></li>
                <li><a class="navbar" href="files/AerosapceEngineering-PadenHall.pdf" target="_blank"> Resume </a></li>
                <li><a class="navbar" href ="About.html"> About/Contact </a></li>
            </ul>  
        </nav>
        <link rel="stylesheet "href="Formatting/header_style.css">
        `
    }
}


class SpecialFooter extends HTMLElement {
    connectedCallback(){
        this.innerHTML = 
        `
        <h1 class="theme-footer">Information</h1>
        <ul class="theme-footer">
            <p class="theme-footer">Orbital Minds | Aerospace Manufacturing & Engineering | Pomona, CA | BS Aerospace Engineer| Cal Poly Pomona Alumni </p>
        </ul>  
        <link rel="stylesheet "href="Formatting/footer_style.css"> 
        `
    }
}
customElements.define('special-header', SpecialHeader)
customElements.define('special-footer', SpecialFooter)
