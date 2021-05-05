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
const navLinks = document.querySelectorAll(".container nav a");
navLinks.forEach((lonk, i) => {lonk.textContent = siteContent.nav[`nav-item-${i+1}`]})

//Add new links
const navi = document.querySelector("nav")
let homeLink = document.createElement("a");
homeLink.href ="#";
homeLink.textContent = 'Home';
navi.prepend(homeLink);

let shopLink = document.createElement("a");
shopLink.href = "#";
shopLink.textContent = 'Shop';
navi.appendChild(shopLink)

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
const tex_con = document.querySelectorAll(".text-content");
tex_con[0].getElementsByTagName("h4")[0].textContent = siteContent["main-content"]["features-h4"];
tex_con[0].getElementsByTagName("p")[0].textContent = siteContent["main-content"]["features-content"];
tex_con[1].getElementsByTagName("h4")[0].textContent = siteContent["main-content"]["about-h4"];
tex_con[1].getElementsByTagName("p")[0].textContent = siteContent["main-content"]["about-content"];


//image
const mid_img = document.querySelector(".middle-img");
mid_img.src = siteContent["main-content"]["middle-img-src"];

//bottom content
tex_con[2].getElementsByTagName("h4")[0].textContent = siteContent["main-content"]["services-h4"];
tex_con[2].getElementsByTagName("p")[0].textContent = siteContent["main-content"]["services-content"];
tex_con[3].getElementsByTagName("h4")[0].textContent = siteContent["main-content"]["product-h4"];
tex_con[3].getElementsByTagName("p")[0].textContent = siteContent["main-content"]["product-content"];
tex_con[4].getElementsByTagName("h4")[0].textContent = siteContent["main-content"]["vision-h4"];
tex_con[4].getElementsByTagName("p")[0].textContent = siteContent["main-content"]["vision-content"];

//contact
const cont = document.querySelector(".contact");
const p_list = cont.querySelectorAll("p");
cont.querySelector("h4").textContent = siteContent.contact["contact-h4"];
p_list[0].textContent = siteContent.contact.address;
p_list[1].textContent = siteContent.contact.phone;
p_list[2].textContent = siteContent.contact.email;

//footer
const foot = document.querySelector("footer p");
foot.textContent = siteContent.footer.copyright;