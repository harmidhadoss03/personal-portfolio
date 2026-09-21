

window.addEventListener("load", function () {
    console.log("Portfolio website loaded successfully!");
});


const form = document.querySelector("form");

form.addEventListener("submit", function (event) {

    event.preventDefault();

    const name = document.querySelector(
        'input[placeholder="Your Name"]'
    ).value;

    const email = document.querySelector(
        'input[placeholder="Your Email"]'
    ).value;

    const message = document.querySelector(
        'textarea[placeholder="Your Message"]'
    ).value;

    if (name === "" || email === "" || message === "") {
        alert("Please fill in all the fields.");
        return;
    }

    alert("Thank you, " + name + "! Your message has been submitted.");

    form.reset();
});

const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(
    function (entries) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
            }

        });

    },
    {
        threshold: 0.15
    }
);


sections.forEach(function (section) {

    section.style.opacity = "0";
    section.style.transform = "translateY(30px)";
    section.style.transition = "all 0.8s ease";

    observer.observe(section);

});

const footerText = document.querySelector("footer p");

const currentYear = new Date().getFullYear();

footerText.innerHTML =
    "© " + currentYear + " Your Name. All Rights Reserved.";