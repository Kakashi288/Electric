document.addEventListener('DOMContentLoaded', function() {
    const s1 = document.querySelector('.s1');
    const s2 = document.querySelector('.s2');
    const s3 = document.querySelector('.s3');
    const s4 = document.querySelector('.s4');
    const s5 = document.querySelector('.s5');
    const s6 = document.querySelector('.s6');
    const s7 = document.querySelector('.s7');
    const s8 = document.querySelector('.s8');
    const s9 = document.querySelector('.s9');
    const s10 = document.querySelector('.s10');
    const s11 = document.querySelector('.s11');
    const s12 = document.querySelector('.s12');
    const s13 = document.querySelector('.s13');
    const s14 = document.querySelector('.s14');
    const s15 = document.querySelector('.s15');
    const s16 = document.querySelector('.s16');
    const s17 = document.querySelector('.s17');
    const s18 = document.querySelector('.s18');
    const s19 = document.querySelector('.s19');
    const s20 = document.querySelector('.s20');
    const s21 = document.querySelector('.s21'); // Added .s21
    const s22 = document.querySelector('.s22'); // Added .s22

    // Helper function to apply transition styles
    const applyTransitionStyles = (element, opacity, transform, transition) => {
        element.style.opacity = opacity;
        element.style.transform = transform;
        element.style.transition = transition;
        element.classList.add('visible'); // Add class to mark as visible
    };

    // Check if an element is in the viewport
    const isElementInViewport = (element) => {
        const rect = element.getBoundingClientRect();
        return (
            rect.top <= window.innerHeight &&
            rect.bottom >= 0
        );
    };

    // Function to apply initial transitions
    const applyInitialTransitions = () => {
        // Handle s1 element
        if (s1 && isElementInViewport(s1)) {
            applyTransitionStyles(s1, 1, 'translateY(0)', 'opacity 1.5s ease, transform 1.5s ease');
        }

        // Handle s2 element
        if (s2 && isElementInViewport(s2)) {
            applyTransitionStyles(s2, 1, 'translateX(0)', 'opacity 1.5s ease, transform 1.5s ease');
        }

        // Handle s3 element
        if (s3 && isElementInViewport(s3)) {
            applyTransitionStyles(s3, 1, 'translateX(0)', 'opacity 1.5s ease, transform 1.5s ease');
        }

        // Handle s4 element
        if (s4 && isElementInViewport(s4)) {
            applyTransitionStyles(s4, 1, 'translateY(0)', 'opacity 1.5s ease, transform 1.5s ease');
        }

        // Handle s5 element
        if (s5 && isElementInViewport(s5)) {
            applyTransitionStyles(s5, 1, 'translateY(0)', 'opacity 1.5s ease, transform 1.5s ease');
        }

        // Handle s6 element
        if (s6 && isElementInViewport(s6)) {
            applyTransitionStyles(s6, 1, 'translateX(0)', 'opacity 1.5s ease, transform 1.5s ease');
        }

        // Handle s7 element
        if (s7 && isElementInViewport(s7)) {
            applyTransitionStyles(s7, 1, 'translateX(0)', 'opacity 1.5s ease, transform 1.5s ease');
        }

        // Handle s8 element
        if (s8 && isElementInViewport(s8)) {
            applyTransitionStyles(s8, 1, 'translateY(0)', 'opacity 1.5s ease, transform 1.5s ease');
        }

        // Handle s9 element
        if (s9 && isElementInViewport(s9)) {
            applyTransitionStyles(s9, 1, 'translateX(0)', 'opacity 1.5s ease, transform 1.5s ease');
        }

        // Handle s10 element
        if (s10 && isElementInViewport(s10)) {
            applyTransitionStyles(s10, 1, 'translateY(0)', 'opacity 1.5s ease, transform 1.5s ease');
        }

        // Handle s11 element
        if (s11 && isElementInViewport(s11)) {
            applyTransitionStyles(s11, 1, 'translateX(0)', 'opacity 1.5s ease, transform 1.5s ease');
        }

        // Handle s12 element
        if (s12 && isElementInViewport(s12)) {
            applyTransitionStyles(s12, 1, 'translateY(0)', 'opacity 1.5s ease, transform 1.5s ease');
        }

        // Handle s13 element
        if (s13 && isElementInViewport(s13)) {
            applyTransitionStyles(s13, 1, 'translateY(0)', 'opacity 1.5s ease, transform 1.5s ease');
        }

        // Handle s14 element
        if (s14 && isElementInViewport(s14)) {
            applyTransitionStyles(s14, 1, 'translateX(0)', 'opacity 1.5s ease, transform 1.5s ease');
        }

        // Handle s15 element
        if (s15 && isElementInViewport(s15)) {
            applyTransitionStyles(s15, 1, 'translateX(0)', 'opacity 1.5s ease, transform 1.5s ease');
        }

        // Handle s16 element
        if (s16 && isElementInViewport(s16)) {
            applyTransitionStyles(s16, 1, 'translateY(0)', 'opacity 1.5s ease, transform 1.5s ease');
        }

        // Handle s17 element
        if (s17 && isElementInViewport(s17)) {
            applyTransitionStyles(s17, 1, 'translateY(0)', 'opacity 1.5s ease, transform 1.5s ease');
        }

        // Handle s18 element
        if (s18 && isElementInViewport(s18)) {
            applyTransitionStyles(s18, 1, 'translateX(0)', 'opacity 1.5s ease, transform 1.5s ease');
        }

        // Handle s19 element
        if (s19 && isElementInViewport(s19)) {
            applyTransitionStyles(s19, 1, 'translateX(0)', 'opacity 1.5s ease, transform 1.5s ease');
        }

        // Handle s20 element
        if (s20 && isElementInViewport(s20)) {
            applyTransitionStyles(s20, 1, 'translateY(0)', 'opacity 1.5s ease, transform 1.5s ease');
        }

        // Handle s21 element
        if (s21 && isElementInViewport(s21)) {
            applyTransitionStyles(s21, 1, 'translateY(0)', 'opacity 1.5s ease, transform 1.5s ease');
        }

        // Handle s22 element
        if (s22 && isElementInViewport(s22)) {
            applyTransitionStyles(s22, 1, 'translateX(0)', 'opacity 1.5s ease, transform 1.5s ease');
        }
    };

    // Function to handle scroll events
    const handleScroll = () => {
        // Handle s1 element
        if (s1 && isElementInViewport(s1) && !s1.classList.contains('visible')) {
            applyTransitionStyles(s1, 1, 'translateY(0)', 'opacity 1.5s ease, transform 1.5s ease');
        }

        // Handle s2 element
        if (s2 && isElementInViewport(s2) && !s2.classList.contains('visible')) {
            applyTransitionStyles(s2, 1, 'translateX(0)', 'opacity 1.5s ease, transform 1.5s ease');
        }

        // Handle s3 element
        if (s3 && isElementInViewport(s3) && !s3.classList.contains('visible')) {
            applyTransitionStyles(s3, 1, 'translateX(0)', 'opacity 1.5s ease, transform 1.5s ease');
        }

        // Handle s4 element
        if (s4 && isElementInViewport(s4) && !s4.classList.contains('visible')) {
            applyTransitionStyles(s4, 1, 'translateY(0)', 'opacity 1.5s ease, transform 1.5s ease');
        }

        // Handle s5 element
        if (s5 && isElementInViewport(s5) && !s5.classList.contains('visible')) {
            applyTransitionStyles(s5, 1, 'translateY(0)', 'opacity 1.5s ease, transform 1.5s ease');
        }

        // Handle s6 element
        if (s6 && isElementInViewport(s6) && !s6.classList.contains('visible')) {
            applyTransitionStyles(s6, 1, 'translateX(0)', 'opacity 1.5s ease, transform 1.5s ease');
        }

        // Handle s7 element
        if (s7 && isElementInViewport(s7) && !s7.classList.contains('visible')) {
            applyTransitionStyles(s7, 1, 'translateX(0)', 'opacity 1.5s ease, transform 1.5s ease');
        }

        // Handle s8 element
        if (s8 && isElementInViewport(s8) && !s8.classList.contains('visible')) {
            applyTransitionStyles(s8, 1, 'translateY(0)', 'opacity 1.5s ease, transform 1.5s ease');
        }

        // Handle s9 element
        if (s9 && isElementInViewport(s9) && !s9.classList.contains('visible')) {
            applyTransitionStyles(s9, 1, 'translateX(0)', 'opacity 1.5s ease, transform 1.5s ease');
        }

        // Handle s10 element
        if (s10 && isElementInViewport(s10) && !s10.classList.contains('visible')) {
            applyTransitionStyles(s10, 1, 'translateY(0)', 'opacity 1.5s ease, transform 1.5s ease');
        }

        // Handle s11 element
        if (s11 && isElementInViewport(s11) && !s11.classList.contains('visible')) {
            applyTransitionStyles(s11, 1, 'translateX(0)', 'opacity 1.5s ease, transform 1.5s ease');
        }

        // Handle s12 element
        if (s12 && isElementInViewport(s12) && !s12.classList.contains('visible')) {
            applyTransitionStyles(s12, 1, 'translateY(0)', 'opacity 1.5s ease, transform 1.5s ease');
        }

        // Handle s13 element
        if (s13 && isElementInViewport(s13) && !s13.classList.contains('visible')) {
            applyTransitionStyles(s13, 1, 'translateY(0)', 'opacity 1.5s ease, transform 1.5s ease');
        }

        // Handle s14 element
        if (s14 && isElementInViewport(s14) && !s14.classList.contains('visible')) {
            applyTransitionStyles(s14, 1, 'translateX(0)', 'opacity 1.5s ease, transform 1.5s ease');
        }

        // Handle s15 element
        if (s15 && isElementInViewport(s15) && !s15.classList.contains('visible')) {
            applyTransitionStyles(s15, 1, 'translateX(0)', 'opacity 1.5s ease, transform 1.5s ease');
        }

        // Handle s16 element
        if (s16 && isElementInViewport(s16) && !s16.classList.contains('visible')) {
            applyTransitionStyles(s16, 1, 'translateY(0)', 'opacity 1.5s ease, transform 1.5s ease');
        }

        // Handle s17 element
        if (s17 && isElementInViewport(s17) && !s17.classList.contains('visible')) {
            applyTransitionStyles(s17, 1, 'translateY(0)', 'opacity 1.5s ease, transform 1.5s ease');
        }

        // Handle s18 element
        if (s18 && isElementInViewport(s18) && !s18.classList.contains('visible')) {
            applyTransitionStyles(s18, 1, 'translateX(0)', 'opacity 1.5s ease, transform 1.5s ease');
        }

        // Handle s19 element
        if (s19 && isElementInViewport(s19) && !s19.classList.contains('visible')) {
            applyTransitionStyles(s19, 1, 'translateX(0)', 'opacity 1.5s ease, transform 1.5s ease');
        }

        // Handle s20 element
        if (s20 && isElementInViewport(s20) && !s20.classList.contains('visible')) {
            applyTransitionStyles(s20, 1, 'translateY(0)', 'opacity 1.5s ease, transform 1.5s ease');
        }

        // Handle s21 element
        if (s21 && isElementInViewport(s21) && !s21.classList.contains('visible')) {
            applyTransitionStyles(s21, 1, 'translateY(0)', 'opacity 1.5s ease, transform 1.5s ease');
        }

        // Handle s22 element
        if (s22 && isElementInViewport(s22) && !s22.classList.contains('visible')) {
            applyTransitionStyles(s22, 1, 'translateX(0)', 'opacity 1.5s ease, transform 1.5s ease');
        }
    };

    // Set initial opacity and transform for elements
    const setInitialStyles = () => {
        if (s1) {
            s1.style.opacity = 0;
            s1.style.transform = 'translateY(100px)'; // Initial vertical translation from the bottom
        }

        if (s2) {
            s2.style.opacity = 0;
            s2.style.transform = 'translateX(-100px)'; // Initial horizontal translation from the right
        }

        if (s3) {
            s3.style.opacity = 0;
            s3.style.transform = 'translateX(-100px)'; // Initial horizontal translation from the left
        }

        if (s4) {
            s4.style.opacity = 0;
            s4.style.transform = 'translateY(100px)'; // Initial vertical translation from the bottom
        }

        if (s5) {
            s5.style.opacity = 0;
            s5.style.transform = 'translateY(100px)'; // Initial vertical translation from the bottom
        }

        if (s6) {
            s6.style.opacity = 0;
            s6.style.transform = 'translateX(-100px)'; // Initial horizontal translation from the right
        }

        if (s7) {
            s7.style.opacity = 0;
            s7.style.transform = 'translateX(-100px)'; // Initial horizontal translation from the left
        }

        if (s8) {
            s8.style.opacity = 0;
            s8.style.transform = 'translateY(100px)'; // Initial vertical translation from the bottom
        }

        if (s9) {
            s9.style.opacity = 0;
            s9.style.transform = 'translateX(-100px)'; // Initial horizontal translation from the right
        }

        if (s10) {
            s10.style.opacity = 0;
            s10.style.transform = 'translateY(100px)'; // Initial vertical translation from the bottom
        }

        if (s11) {
            s11.style.opacity = 0;
            s11.style.transform = 'translateX(-100px)'; // Initial horizontal translation from the left
        }

        if (s12) {
            s12.style.opacity = 0;
            s12.style.transform = 'translateY(100px)'; // Initial vertical translation from the bottom
        }

        if (s13) {
            s13.style.opacity = 0;
            s13.style.transform = 'translateY(100px)'; // Initial vertical translation from the bottom
        }

        if (s14) {
            s14.style.opacity = 0;
            s14.style.transform = 'translateX(-100px)'; // Initial horizontal translation from the right
        }

        if (s15) {
            s15.style.opacity = 0;
            s15.style.transform = 'translateX(-100px)'; // Initial horizontal translation from the left
        }

        if (s16) {
            s16.style.opacity = 0;
            s16.style.transform = 'translateY(100px)'; // Initial vertical translation from the bottom
        }

        if (s17) {
            s17.style.opacity = 0;
            s17.style.transform = 'translateY(100px)'; // Initial vertical translation from the bottom
        }

        if (s18) {
            s18.style.opacity = 0;
            s18.style.transform = 'translateX(-100px)'; // Initial horizontal translation from the right
        }

        if (s19) {
            s19.style.opacity = 0;
            s19.style.transform = 'translateX(-100px)'; // Initial horizontal translation from the left
        }

        if (s20) {
            s20.style.opacity = 0;
            s20.style.transform = 'translateY(100px)'; // Initial vertical translation from the bottom
        }

        if (s21) {
            s21.style.opacity = 0;
            s21.style.transform = 'translateY(100px)'; // Initial vertical translation from the bottom
        }

        if (s22) {
            s22.style.opacity = 0;
            s22.style.transform = 'translateX(-100px)'; // Initial horizontal translation from the right
        }
    };

    // Initialize styles and handle scroll
    setInitialStyles();
    applyInitialTransitions(); // Check initial visibility
    window.addEventListener('scroll', handleScroll);
});


//Service Information Accordian

document.addEventListener('DOMContentLoaded', function () {
    const serviceInfoItems = document.querySelectorAll('.service-info-accordion');

    serviceInfoItems.forEach(item => {
        const serviceInfoQuestion = item.querySelector('.service-info-question');
        const serviceIconContainer = item.querySelector('.service-icon-container');
        const serviceInfoAnswer = item.querySelector('.service-info-answer');

        serviceInfoQuestion.addEventListener('click', function () {
            const isActive = item.classList.contains('active');
            serviceInfoItems.forEach(i => {
                i.classList.remove('active');
                i.querySelector('.service-info-answer').style.maxHeight = null;
                i.querySelector('.service-icon-container').classList.remove('active');
                i.querySelector('.service-icon-container .service-toggle-icon').classList.remove('ri-subtract-fill');
                i.querySelector('.service-icon-container .service-toggle-icon').classList.add('ri-add-line');
            });
            if (!isActive) {
                item.classList.add('active');
                serviceInfoAnswer.style.maxHeight = serviceInfoAnswer.scrollHeight + "px";
                serviceIconContainer.classList.add('active');
                const icon = serviceIconContainer.querySelector('.service-toggle-icon');
                icon.classList.remove('ri-add-line');
                icon.classList.add('ri-subtract-fill');
            }
        });
    });
});




