let hamburger = document.querySelector('.nav__icon--hamburger');
let menu = document.querySelector('.menu');
let closeBtn = document.querySelector('.menu__icon--close');
let overlay = document.querySelector('.overlay');
let closeContactFormBtn = document.querySelector('.form--contact .form__close-btn');
let closeCallFormBtn = document.querySelector('.form--call .form__close-btn');
let contactForm = document.querySelector('.form--contact');
let callForm = document.querySelector('.form--call');
let chatBtn = document.querySelector('.menu__icon--chat');
let chatBtn786 = document.querySelector('.nav__icon--chat');
let callBtn = document.querySelector('.menu__icon--phone');
let callBtn786 = document.querySelector('.nav__icon--call');



  hamburger.addEventListener('click', () => {
    menu.classList.add('open');
    overlay.classList.add('overlay-added');
  })

  closeBtn.addEventListener('click', () => {
    menu.classList.remove('open');
    overlay.classList.remove('overlay-added');
  })


  const closeContactForm = () => {
    contactForm.style.display = 'none';
    overlay.classList.remove('overlay-added');
  }
  
  const openContactForm = () => {
    contactForm.style.display = 'block';
    overlay.classList.add('overlay-added');
    menu.classList.remove('open');
  }
  
  const closeCallForm = () => {
    callForm.style.display = 'none';
    overlay.classList.remove('overlay-added');
  }
  
  const openCallForm = () => {
    callForm.style.display = 'block';
    overlay.classList.add('overlay-added');
    menu.classList.remove('open');
  }

  chatBtn.addEventListener('click', () => {
    openContactForm();
  })
  
  chatBtn786.addEventListener('click', () => {
    openContactForm();
  })
  
  callBtn.addEventListener('click', () => {
    openCallForm();
  })
  
  callBtn786.addEventListener('click', () => {
    openCallForm();
  })
  
  closeContactFormBtn.addEventListener('click', () => {
    closeContactForm();
  })
  
  closeCallFormBtn.addEventListener('click', () => {
    closeCallForm();
  })

  overlay.addEventListener('click', ()=> {
    menu.classList.remove('open');
    closeContactForm();
    closeCallForm();
  })