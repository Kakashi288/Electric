document.addEventListener('DOMContentLoaded', function() {
    // Select elements by their classes
    const c1Elements = document.querySelectorAll('.c1');
    const c2Elements = document.querySelectorAll('.c2');
    const c3Elements = document.querySelectorAll('.c3');
    const c4Elements = document.querySelectorAll('.c4');
    const c5Elements = document.querySelectorAll('.c5');
    const c6Elements = document.querySelectorAll('.c6');
    const c7Elements = document.querySelectorAll('.c7');

    // Helper function to apply transition styles
    const applyTransitionStyles = (element, opacity, transform, transition) => {
        element.style.opacity = opacity;
        element.style.transform = transform;
        element.style.transition = transition;
        element.classList.add('visible'); // Mark as visible to avoid reapplying the transition
    };

    // Check if an element is in the viewport
    const isElementInViewport = (element) => {
        const rect = element.getBoundingClientRect();
        return (
            rect.top <= window.innerHeight &&
            rect.bottom >= 0
        );
    };

    // Apply initial styles to elements
    const setInitialStyles = (elements, initialTransform) => {
        elements.forEach(element => {
            element.style.opacity = 0;
            element.style.transform = initialTransform;
        });
    };

    // Apply transitions to elements in the viewport
    const applyTransitions = (elements, transform, transition) => {
        elements.forEach(element => {
            if (isElementInViewport(element) && !element.classList.contains('visible')) {
                applyTransitionStyles(element, 1, transform, transition);
            }
        });
    };

    // Function to handle scroll events
    const handleScroll = () => {
        // Apply transitions for .c1 elements (bottom to top)
        applyTransitions(c1Elements, 'translateY(0)', 'opacity 1.5s ease, transform 1.5s ease');
        
        // Apply transitions for .c2 elements (left to right)
        applyTransitions(c2Elements, 'translateX(0)', 'opacity 1.5s ease, transform 1.5s ease');
        
        // Apply transitions for .c3 elements (bottom to top)
        applyTransitions(c3Elements, 'translateY(0)', 'opacity 1.5s ease, transform 1.5s ease');
        
        // Apply transitions for .c4 elements (bottom to top)
        applyTransitions(c4Elements, 'translateY(0)', 'opacity 1.5s ease, transform 1.5s ease');
        
        // Apply transitions for .c5 elements (right to left)
        applyTransitions(c5Elements, 'translateX(0)', 'opacity 1.5s ease, transform 1.5s ease');
        
        // Apply transitions for .c6 elements (bottom to top)
        applyTransitions(c6Elements, 'translateY(0)', 'opacity 1.5s ease, transform 1.5s ease');
        
        // Apply transitions for .c7 elements (left to right)
        applyTransitions(c7Elements, 'translateX(0)', 'opacity 1.5s ease, transform 1.5s ease');
    };

    // Set initial styles

        setInitialStyles(c1Elements, 'translateY(100px)'); // Start from left
        setInitialStyles(c2Elements, 'translateX(-100px)'); // Start from bottom
        setInitialStyles(c3Elements, 'translateX(-100px)'); // Start from left
        setInitialStyles(c4Elements, 'translateY(100px)'); // Start from right
        setInitialStyles(c5Elements, 'translateY(-100px)'); // Start from left
        setInitialStyles(c6Elements, 'translateY(100px)'); // Start from bottom
        setInitialStyles(c7Elements, 'translateX(-100px)'); // Start from bottom

    // Initial transition check
    handleScroll();

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
});
