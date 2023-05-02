//toggle icon navbar
let menuIcon = document.querySelector('#menu-icon')
let navbar = document.querySelector('.navbar')

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x')
    navbar.classList.toggle('active')
}

//scroll sections active link
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150
        let height = sec.offsetHeight
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active')
            })
        }
    })

    // sticy navbar
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100)

    // remove icon and navbar when click navbar link
    menuIcon.classList.remove('bx-x')
    navbar.classList.remove('active')
};
// Scroll reveal

ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' })
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact, form', { origin: 'bottom' })
ScrollReveal().reveal('.about-img, .home-content h1', { origin: 'left' })
ScrollReveal().reveal('.about-content, .home-content p', { origin: 'right' })

//typed js
const typed = new Typed('.multiple-text', {
    strings: ['Front-end Developer', 'Junior Web Developer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
})

// emailjs 
function sendMail() {
    var params = {
        from_name: document.getElementById('from_name').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value,
        email_sub: document.getElementById('email_sub').value,
        phone: document.getElementById('mobile').value
    }
    emailjs.send('service_ya2etjq', 'template_2417asb',params)
        .then(function (res) {
            if (res.status === 200) {
                    document.getElementById('from_name').value='',
                    document.getElementById('email').value='',
                    document.getElementById('message').value='',
                    document.getElementById('email_sub').value='',
                    document.getElementById('mobile').value=''
                console.log('success');
            }
        }, function (error) {
            console.log('FAILED...', error);
        });
}