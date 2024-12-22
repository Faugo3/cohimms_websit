//change navbar styles on scroll

window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle('window-scroll', window.scrollY > 0)
})




// show /hide faq answer

const faqs = document.querySelectorAll('.faq');

faqs.forEach(faq => {
    faq.addEventListener('click', () => {
        faq.classList.toggle('open');

        //change the icons when click
        const icons = faq.querySelector ('.faq_icon i');
        if(icons.className === 'uil uil-plus') {
            icons.className = 'uil uil-minus';
        }else{
             icons.className = 'uil uil-plus';
        }
    })
})


const menu = document.querySelector(".nav_menu");
const menuBtn = document.querySelector("#open-menu-btn");
const closeBtn = document.querySelector("#close-menu-btn");

menuBtn.addEventListener('click', () => {
    menu.style.display = "flex" ;
    closeBtn.style.display = "inline-blick";
    menuBtn.style.display ="none";
})


const closeNav = () => {
    menu.style.display = "none" ;
    closeBtn.style.display = "none";
    menuBtn.style.display ="inline-block";
}

closeBtn.addEventListener('click', closeNav)