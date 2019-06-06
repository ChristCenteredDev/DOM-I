const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])


let navItem = document.querySelectorAll('a');

navItem.forEach((element, index) => {
  element.textContent = navFunc(index);
});

function navFunc(index) {
  let value;
  switch(index+1) {
    case 1:
      value = "nav-item-1";
      break;
    case 2:
      value = "nav-item-2";
      break;
    case 3:
      value = "nav-item-3";
      break;
    case 4:
      value = "nav-item-4";
      break;
    case 5:
      value = "nav-item-5";
      break;
    case 6:
      value = "nav-item-6";
      break;
    default:
      break;
  }

  return siteContent.nav[value];
}

let logo_img = document.querySelector('#logo-img');
let h1 = document.querySelector('h1');
let button = document.querySelector('button');
let cta_img = document.querySelector('#cta-img');

logo_img.setAttribute('src', siteContent.nav["img-src"]);
cta_img.setAttribute('src', siteContent.cta["img-src"]);

h1.textContent = siteContent.cta.h1;
button.textContent = siteContent.cta.button;

let top_content_h4s = document.querySelectorAll('.top-content .text-content h4');
top_content_h4s[0].textContent = siteContent["main-content"]["features-h4"];
top_content_h4s[1].textContent = siteContent["main-content"]["about-h4"];

let top_content_p = document.querySelectorAll('.top-content .text-content p');
top_content_p[0].textContent = siteContent["main-content"]["features-content"];
top_content_p[1].textContent = siteContent["main-content"]["about-content"];

let middle_img = document.querySelector('#middle-img');
middle_img.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

let bottom_content_h4s = document.querySelectorAll('.bottom-content .text-content h4');
let bottom_content_p = document.querySelectorAll('.bottom-content .text-content p');

bottom_content_h4s[0].textContent = siteContent["main-content"]["services-h4"];
bottom_content_h4s[1].textContent = siteContent["main-content"]["product-h4"];
bottom_content_h4s[2].textContent = siteContent["main-content"]["vision-h4"];

bottom_content_p[0].textContent = siteContent["main-content"]["services-content"];
bottom_content_p[1].textContent = siteContent["main-content"]["product-content"];
bottom_content_p[2].textContent = siteContent["main-content"]["vision-content"];

let contact_h4 = document.querySelector('.contact h4');
let contact_p = document.querySelectorAll('.contact p');

contact_h4.textContent = siteContent.contact["contact-h4"];

contact_p[0].textContent = siteContent.contact["address"];
contact_p[1].textContent = siteContent.contact['phone'];
contact_p[2].textContent = siteContent.contact['email'];

let footer_p = document.querySelector('footer p');
footer_p.textContent = siteContent.footer.copyright;