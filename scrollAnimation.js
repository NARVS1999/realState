const animationLeftToRight = document.querySelectorAll('.animationLeftToRight');
const animationRightToLift = document.querySelectorAll('.animationRightToLift');
const animationTopToBottom = document.querySelectorAll('.animationTopToBottom');
const animationBottomToTop = document.querySelectorAll('.animationBottomToTop');


const observer1 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('scroll-animation1');
        } else {
            entry.target.classList.remove('scroll-animation1');
        }
    });
}, { threshold: 0.1 });

animationLeftToRight.forEach((element) => {
    observer1.observe(element);
});

const observer2 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('scroll-animation2');
        } else {
            entry.target.classList.remove('scroll-animation2');
        }
    });
}, { threshold: 0.1 });

animationRightToLift.forEach((element) => {
    observer2.observe(element);
});

const observer3 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('scroll-animation3');
        } else {
            entry.target.classList.remove('scroll-animation3');
        }
    });
}, { threshold: 0.1 });

animationTopToBottom.forEach((element) => {
    observer3.observe(element);
});

const observer4 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('scroll-animation4');
        } else {
            entry.target.classList.remove('scroll-animation4');
        }
    });
}, { threshold: 0.1 });

animationBottomToTop.forEach((element) => {
    observer4.observe(element);
});