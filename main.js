
// second animation

document.addEventListener('DOMContentLoaded', () => {
    // ScrollTrigger animation
    gsap.registerPlugin(ScrollTrigger);

    const wrapper = document.querySelector('.wrapper');

    ScrollTrigger.create({
        trigger: wrapper,
        start: 'bottom 50%',
        end: 'bottom 0%',
        onEnter: () => {
            gsap.to(wrapper, {
                opacity: 0,
                y: -70,
                duration: 1,
                ease: 'power2.out'
            });
        },
        onLeaveBack: () => {
            gsap.to(wrapper, {
                opacity: 1,
                y: 0,
                duration: 1,
                ease: 'power2.out'
            });
        }
    });
});


//  first-section animation vertical line

document.addEventListener('DOMContentLoaded', () => {
    //  ScrollTrigger animation
    gsap.registerPlugin(ScrollTrigger);

    // Animation for the wrapper child elements
    const wrapper = document.querySelector('.wrapper');
    const firstSection = document.querySelector('#first-section');

    ScrollTrigger.create({
        trigger: wrapper,
        start: 'bottom 50%',
        end: 'bottom 0%',
        onEnter: () => {
            gsap.to(wrapper, {
                opacity: 0,
                y: -70,
                duration: 1,
                ease: 'power2.out'
            });
            gsap.to(firstSection, {
                y: -200,
                duration: 1,
                ease: 'power2.out'
            });
        },
        onLeaveBack: () => {
            gsap.to(wrapper, {
                opacity: 1,
                y: 0,
                duration: 1,
                ease: 'power2.out'
            });

            gsap.to(firstSection, {
                y: 0, // Reset it to its original position
                duration: 1,
                ease: 'power2.out'
            });
        }
    });
});



// third section


document.addEventListener('DOMContentLoaded', () => {

    gsap.registerPlugin(ScrollTrigger);


    const firstSection = document.querySelector('#first-section');
    const thirdSection = document.querySelector('#third-section');

    ScrollTrigger.create({
        trigger: firstSection,
        start: 'top 75%',
        end: 'bottom top',
        onEnter: () => {
            gsap.to(firstSection, {
                opacity: 1,
                y: -100,
                duration: 1,
                ease: 'power2.out'
            });

            gsap.to(thirdSection, {
                y: -200, // Adjust as needed to move it correctly
                duration: 1,
                ease: 'power2.out'
            });
        },
        onLeaveBack: () => {
            // Reset 
            gsap.to(firstSection, {
                opacity: 1,
                y: 0,
                duration: 1,
                ease: 'power2.out'
            });
            gsap.to(thirdSection, {
                y: 0, // Reset to the original position
                duration: 1,
                ease: 'power2.out'
            });
        }
    });
});



//first section image animation

gsap.registerPlugin(ScrollTrigger);

gsap.to(".first-section-img .girl-image", {
    scrollTrigger: {
        trigger: "#first-section",
        start: "bottom 1200px",
        end: "bottom top",
        scrub: true, // Smooth animation as scroll
    },
    y: () => document.querySelector(".first-section-p").getBoundingClientRect().top - document.querySelector(".first-section-img").getBoundingClientRect().top, // Move the image to align with the content
    duration: 2,
    ease: "power2.out",
});

gsap.to(".first-section-img .girl-image", {
    scrollTrigger: {
        trigger: "#first-section",
        start: "bottom 800px",
        end: "bottom top",
        scrub: true,
    }
});

