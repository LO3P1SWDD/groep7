function setCookieConsent() {
  const cookiePopup = document.querySelector('.cookie-popup');
  const acceptCookies = document.querySelector('#accept-cookies');
  const denyCookies = document.querySelector('#deny-cookies');

  acceptCookies.addEventListener('click', () => {
    cookiePopup.style.display = 'none';
    document.cookie = 'cookieConsent=true; expires=30d; path=/';
  });

  denyCookies.addEventListener('click', () => {
    cookiePopup.style.display = 'none';
    document.cookie = 'cookieConsent=false; expires=30d; path=/';
    window.location.href = 'denied.html';
  });

  const cookieConsent = document.cookie.includes('cookieConsent=true');
  if (cookieConsent) {
    cookiePopup.style.display = 'none';
  } else {
    cookiePopup.style.display = 'block';
  }
}

setCookieConsent();

const body = document.querySelector('body');
const images = ['url(img/18f8262341b337e7d3f714e41cef7a09.jpg)', 'url(img/Nox+Singapore+5.JPG)', 'url(img/nieuwe-restaurants-amsterdam-ventuno-skylounge.jpg)', 'url(img/NOX-Pickup029.jpg)'];
let currentImageIndex = 1;

function changeBackgroundImage() {
  body.classList.add('fade-out');
  body.style.backgroundImage = images[currentImageIndex];
  currentImageIndex = (currentImageIndex + 1) % images.length;
  setTimeout(() => {
    body.classList.remove('fade-out');
  }, 1000);
}

setInterval(changeBackgroundImage, 4000);

