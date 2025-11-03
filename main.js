/* show menu & hidden*/

const navMenu= document.getElementById("nav-menu"),
navToggle= document.getElementById("nav-toggle"),
navClose = document.getElementById("nav-close")

/* show menu */
/* Valida si la constante existe */
if(navToggle){
  navToggle.addEventListener("click", () =>{
    navMenu.classList.add("show-menu");
  });
}

/* show hidden */
/* Valida si la constante existe */
if(navClose){
  navClose.addEventListener("click", () =>{
    navMenu.classList.remove("show-menu");
  });
}


/* email js */

const contactForm = document.getElementById("contact-form"),
    contactName= document.getElementById("contact-name"),
    contactEmail= document.getElementById("contact-email"),
    contactMessage= document.getElementById("contact-message"),
    message= document.getElementById("message");

const sendEmail = (e) => {
    e.preventDefault();

    if(
        contactName.value === ""  || 
        contactEmail.value === "" || 
        contactMessage.value === ""
    ){
        message.textContent = "Completa todos los campos correctamente."

        setTimeout(() => {
            message.textContent ="";
        }, 3000);
    } else {
        emailjs.sendForm('service_r0ssyng', 'template_azvtpcc', '#contact-form', "a6JOQUBuQ4369n3wD")
        .then(
            () => {
            message.textContent = "Mensaje enviado correctamente";

            setTimeout(() => {
                    message.textContent ="";
                }, 5000);
            },
        (error) => {
            alert("Oops! Algo salio mal...", error);
        }
    );

contactName.value = "";
contactEmail.value = "";
contactMessage.value = "";
    }
};

contactForm.addEventListener("submit", sendEmail);

/* dark-light theme */

window.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.getElementById("theme-toggle");

  function applyTheme(theme) {
    if (theme === "light") {
      document.body.classList.add("light-theme");
      toggleBtn.classList.remove("ri-sun-line");
      toggleBtn.classList.add("ri-moon-line");
    } else {
      document.body.classList.remove("light-theme");
      toggleBtn.classList.add("ri-sun-line");
      toggleBtn.classList.remove("ri-moon-line");
    }
    localStorage.setItem("theme",theme);
  }

  const savedTheme = localStorage.getItem("theme") || "dark";
  applyTheme(savedTheme);

  toggleBtn.addEventListener("click", () => {
    const isLight = document.body.classList.contains("light-theme");
    applyTheme(isLight ? "dark" : "light");
  });
});

/* typewriter effect */
const jobElement = document.querySelector('.home-job');
const text = "Soy Desarrolladora Web";
let i = 0;

function typeWriter() {
    if (i < text.length) {
        jobElement.innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, 100); 
    }
}

jobElement.innerHTML = '';
typeWriter();

/* scroll reveal */

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('reveal-show');
            observer.unobserve(entry.target); 
        }
    });
}, { threshold: 0.2 }); 

document.querySelectorAll('.reveal-hidden').forEach(el => observer.observe(el));


