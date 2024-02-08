navbar = document.querySelector('.header .flex .navbar');

document.querySelector('#menu-btn').onclick = () => {
    navbar.classList.toggle('active');
}

// Add closing parenthesis here

Profile = document.querySelector('.header .flex .profile');

document.querySelector('#user-btn').onclick = () => {
    Profile.classList.toggle('active');
}

window.onscroll = () => {
    navbar.classList.remove('active');
    Profile.classList.remove('active');
}

let slideIndex = 0;
showSlider();

function showSlider() {
    let slides = document.getElementsByClassName('slide');
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }

    slideIndex++;

    if(slideIndex > slides.length) {
        slideIndex = 1;
    }
    slides[slideIndex-1].style.display = 'block';
    setTimeout(showSlider, 2000);
}
