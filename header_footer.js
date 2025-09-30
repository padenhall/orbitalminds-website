
class SpecialHeader extends HTMLElement {
    connectedCallback(){
        this.innerHTML = 
        `
        <h1 class="theme-header">Orbital Minds</h1> 
        <nav>
            <ul class="theme-header">
            <li></li><a href ="Home.html"> Home </a>
            <li></li><a href ="About.html"> About </a>
            <li></li><a href ="Contact.html"> Contact</a>
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
        <h1 class="theme-footer">Contact Information</h1>
        <ul class="theme-footer">
            <p>Orbital Minds | Aerospace Manufacturing & Engineering | Pomona, CA | </p>
        </ul>  
        <link rel="stylesheet "href="Formatting/footer_style.css"> 
        `
    }
}
customElements.define('special-header', SpecialHeader)
customElements.define('special-footer', SpecialFooter)
