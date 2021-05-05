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
    "h1": `DOM \nIs \nAwesome`,
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
logo.setAttribute('src', siteContent["nav"]["img-src"]);

//title change
const tich = document.querySelector("title")
tich.textContent = "Great Idea!"

//Nav Links
const navi = document.querySelectorAll(".container nav a");
const navi_links = Array.from(navi);
for (let i=0; i < navi_links.length; i++){
  navi_links[i].textContent = siteContent.nav[`nav-item-${i+1}`]
};

//cta h1
const cita = document.querySelector(".cta");
const ch1 = cita.querySelector("h1");
ch1.innerText = siteContent.cta.h1;

//button
const bot = cita.querySelector("button");
bot.textContent = siteContent.cta.button;

//image
const image = cita.querySelector("img");
image.src = siteContent.cta["img-src"];

//top content
const top_con = document.querySelectorAll(".text-content");
top_con[0].getElementsByTagName("h4")[0].textContent = siteContent["main-content"]["features-h4"]
top_con[0].getElementsByTagName("p")[0].textContent = siteContent["main-content"]["features-content"]
top_con[1].getElementsByTagName("h4")[0].textContent = siteContent["main-content"]["about-h4"]
top_con[1].getElementsByTagName("p")[0].textContent = siteContent["main-content"]["about-content"]
// const first_h4 = top_con.querySelector("h4:nth-of-type(1)");
// const sec_h4 = top_con.querySelector("h4:last-child");
// const first_con = top_con.querySelector("p:nth-of-type(1)");
// first_h4.textContent = siteContent["main-content"]["features-h4"];
// first_con.textContent = siteContent["main-content"]["features-content"];
// sec_h4.textContent = siteContent["main-content"]["about-h4"];