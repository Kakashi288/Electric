document.addEventListener('DOMContentLoaded', function() {
    // Select elements by their classes
    const a1Elements = document.querySelectorAll('.a1');
    const a2Elements = document.querySelectorAll('.a2');
    const a3Elements = document.querySelectorAll('.a3');
    const a4Elements = document.querySelectorAll('.a4');
    const a5Elements = document.querySelectorAll('.a5');
    const a6Elements = document.querySelectorAll('.a6');
    const a7Elements = document.querySelectorAll('.a7'); // New selection for .a7

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
        // Apply transitions for .a1 elements (left to right)
        applyTransitions(a1Elements, 'translateX(0)', 'opacity 1.5s ease, transform 1.5s ease');
        
        // Apply transitions for .a2 elements (bottom to top)
        applyTransitions(a2Elements, 'translateY(0)', 'opacity 1.5s ease, transform 1.5s ease');
        
        // Apply transitions for .a3 elements (left to right)
        applyTransitions(a3Elements, 'translateX(0)', 'opacity 1.5s ease, transform 1.5s ease');
        
        // Apply transitions for .a4 elements (right to left)
        applyTransitions(a4Elements, 'translateX(0)', 'opacity 1.5s ease, transform 1.5s ease');
        
        // Apply transitions for .a5 elements (left to right)
        applyTransitions(a5Elements, 'translateX(0)', 'opacity 1.5s ease, transform 1.5s ease');
        
        // Apply transitions for .a6 elements (bottom to top)
        applyTransitions(a6Elements, 'translateY(0)', 'opacity 1.5s ease, transform 1.5s ease');
        
        // Apply transitions for .a7 elements (bottom to top)
        applyTransitions(a7Elements, 'translateY(0)', 'opacity 1.5s ease, transform 1.5s ease');
    };

    // Set initial styles
    setInitialStyles(a1Elements, 'translateX(-100px)'); // Start from left
    setInitialStyles(a2Elements, 'translateY(100px)'); // Start from bottom
    setInitialStyles(a3Elements, 'translateX(-100px)'); // Start from left
    setInitialStyles(a4Elements, 'translateX(100px)'); // Start from right
    setInitialStyles(a5Elements, 'translateX(-100px)'); // Start from left
    setInitialStyles(a6Elements, 'translateY(100px)'); // Start from bottom
    setInitialStyles(a7Elements, 'translateY(100px)'); // Start from bottom

    // Initial transition check
    handleScroll();

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
});

