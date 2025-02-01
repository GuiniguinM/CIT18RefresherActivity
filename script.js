document.addEventListener("DOMContentLoaded", function () {
    
    const sections = document.querySelectorAll("section");

    
    function fadeInOnScroll() {
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const sectionHeight = section.clientHeight;

            
            if (sectionTop <= window.innerHeight - sectionHeight / 2) {
                section.classList.add("fade-in");
            }
        });
    }

    
    window.addEventListener("scroll", fadeInOnScroll);

    
    fadeInOnScroll();
});


const styles = document.createElement("style");
styles.innerHTML = `
    .fade-in {
        opacity: 1;
        transform: translateY(0);
        transition: opacity 1s ease-out, transform 1s ease-out;
    }

    section {
        opacity: 0;
        transform: translateY(50px);
    }
`;
document.head.appendChild(styles);
