
// Navbar motion on scroll
const header = document.querySelector('header');
const menu = document.querySelector('.menu');
const openMenuBtn = document.querySelector('.open-menu-btn');
const dropdowns = menu.querySelectorAll('.dropdown');
const ourServicesLink = menu.querySelector('.dropdown > a'); // Select the "Our Services" link
const subMenuLinks = menu.querySelectorAll('.sub-menu a'); // Select all submenu links

window.addEventListener("scroll", function() {
    header.classList.toggle("sticky", window.scrollY > 0);
});

// Check if the current page is index-services.html
const isServicesPage = window.location.pathname.includes('index-services.html');

// Function to handle transitions based on viewport width
function handleSubMenuTransition() {
    const viewportWidth = window.innerWidth;

    // Check if the viewport is ≤1070px
    if (viewportWidth <= 1070) {
        // Add click listeners for menu button and dropdowns
        openMenuBtn.addEventListener('click', toggleMenu);
        dropdowns.forEach(dropdown => {
            dropdown.addEventListener('click', handleDropdownClick);
        });

        // Disable href on "Our Services" link and add click listener to toggle submenu
        ourServicesLink.addEventListener('click', handleOurServicesClick);
        ourServicesLink.href = '#'; // Prevent redirection

        // If on index-services.html, close the menu when a submenu link is clicked
        if (isServicesPage) {
            subMenuLinks.forEach(link => {
                link.addEventListener('click', handleLinkClick);
            });
        } else {
            // For other pages, close the menu immediately when a link is clicked
            subMenuLinks.forEach(link => {
                link.addEventListener('click', closeMenu);
            });
        }
    } else {
        // Remove inline styles for larger viewports
        const subMenus = document.querySelectorAll('.sub-menu');
        subMenus.forEach(subMenu => {
            subMenu.style.transform = '';
            subMenu.style.opacity = '';
            subMenu.style.visibility = '';
        });

        // Remove click listeners to avoid duplication
        openMenuBtn.removeEventListener('click', toggleMenu);
        dropdowns.forEach(dropdown => {
            dropdown.removeEventListener('click', handleDropdownClick);
        });

        // Enable href on "Our Services" link
        ourServicesLink.removeEventListener('click', handleOurServicesClick);
        ourServicesLink.href = '/services/'; // Reset href for redirection
    }
}

function toggleMenu() {
    menu.classList.toggle('open');
    openMenuBtn.classList.toggle('open');

    if (menu.classList.contains('open')) {
        document.body.classList.add('menu-open');
    } else {
        document.body.classList.remove('menu-open');
    }
}

function handleDropdownClick() {
    this.classList.toggle('active');

    const subMenu = this.querySelector('.sub-menu');
    if (subMenu) {
        if (this.classList.contains('active')) {
            openSubMenu(subMenu);
        } else {
            closeSubMenu(subMenu);
        }
    }
}

function openSubMenu(subMenu) {
    // Ensure initial styles are set
    subMenu.style.visibility = 'visible';
    subMenu.style.opacity = '0';
    subMenu.style.transform = 'translateY(-20px)'; // Start above

    // Force a reflow to apply styles before transition
    subMenu.offsetHeight; // Trigger a reflow

    // Apply transition
    subMenu.style.transition = 'transform 0.5s ease, opacity 0.5s ease';
    subMenu.style.transform = 'translateY(0)'; // Move to final position
    subMenu.style.opacity = '1'; // Fade in
}

function closeSubMenu(subMenu) {
    // Apply transition for closing
    subMenu.style.transition = 'transform 0.5s ease, opacity 0.5s ease';
    subMenu.style.transform = 'translateY(-20px)'; // Move up
    subMenu.style.opacity = '0'; // Fade out

    // Add a transition end listener to hide submenu after transition ends
    subMenu.addEventListener('transitionend', function handleTransitionEnd() {
        if (subMenu.style.opacity === '0') {
            subMenu.style.visibility = 'hidden'; // Hide after transition
        }
        // Remove the event listener after it has fired
        subMenu.removeEventListener('transitionend', handleTransitionEnd);
    });
}

// Function to handle "Our Services" click behavior in smaller viewports
function handleOurServicesClick(event) {
    // Prevent the default behavior if the viewport width is ≤ 1070px
    event.preventDefault();
    
    const subMenu = document.querySelector('.dropdown.active .sub-menu'); // Adjust selector as needed
    if (subMenu) {
        // Toggle submenu visibility
        if (subMenu.style.visibility === 'visible') {
            closeSubMenu(subMenu);
        } else {
            openSubMenu(subMenu);
        }
    }
}

// Function to close the menu
function closeMenu() {
    menu.classList.remove('open');
    openMenuBtn.classList.remove('open');
    document.body.classList.remove('menu-open');
}

// Function to handle link clicks
function handleLinkClick(event) {
    closeMenu();

    // Allow the link to process immediately
    const target = event.target.getAttribute('href');
    if (target && target.startsWith('#')) {
        // If the link is an anchor link, scroll to the target
        const section = document.querySelector(target);
        if (section) {
            // Instant jump to the section without smooth scrolling
            section.scrollIntoView({ behavior: 'auto', block: 'start' });
            event.preventDefault(); // Prevent default to ensure this behavior
        }
    }
}

// Initial setup
handleSubMenuTransition();
window.addEventListener('resize', handleSubMenuTransition);

// Initialize transitions and handle window resize
handleSubMenuTransition();
window.addEventListener('resize', handleSubMenuTransition);

//Whatsapp Chatbot
let hasLoaded = false; // Track if chatbox has loaded

// Function to toggle the chatbox and handle message display
function toggleChatbox() {
    const chatbox = document.querySelector('.chatbot-chatbox');
    const loadingIndicator = document.querySelector('.loading-indicator');
    chatbox.classList.toggle('chatbox-show');
    const showChatbox = chatbox.classList.contains('chatbox-show');

    if (showChatbox) {
        chatbox.style.opacity = '0';
        chatbox.style.transform = 'translateY(20px)';
        chatbox.style.display = 'flex';
        
        if (!hasLoaded) {
            loadingIndicator.style.display = 'flex';
            setTimeout(() => {
                loadingIndicator.style.display = 'none';
                if (!document.querySelector('.chatbox-message')) {
                    addMessage('Hello! 👋<br><br> How can I assist you today?');
                }
                hasLoaded = true; // Mark chatbox as loaded
            }, 2000); // Show loading indicator for 2 seconds
        }
        
        setTimeout(() => {
            chatbox.style.opacity = '1';
            chatbox.style.transform = 'translateY(0)';
        }, 10); // Delay to ensure style changes are applied
    } else {
        chatbox.style.opacity = '0';
        chatbox.style.transform = 'translateY(20px)';
        setTimeout(() => {
            chatbox.style.display = 'none';
        }, 300); // Delay to match the transition duration
    }
}

// Function to dynamically add a message to the chatbox
function addMessage(message) {
    const chatboxBody = document.getElementById('chatboxBody');
    const messageDiv = document.createElement('div');
    messageDiv.className = 'chatbox-message';
    messageDiv.innerHTML = `${message}<div class="chatbox-time" id="chatboxTime"></div>`;
    chatboxBody.appendChild(messageDiv);
    chatboxBody.scrollTop = chatboxBody.scrollHeight;
    updateTime();
}

// Function to update the time in the latest message
function updateTime() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const timeText = `${hours}:${minutes}`;
    const timeElements = document.querySelectorAll('.chatbox-time');
    timeElements.forEach(timeElem => timeElem.textContent = timeText);
}

// Initialize time on load and set an interval to update time every second
updateTime();
setInterval(updateTime, 1000); // Update time every second

//Cookie
document.addEventListener("DOMContentLoaded", function() {
    // Helper function to set a cookie
    function setCookie(name, value, days) {
        const date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000)); // Set expiration date
        const expires = "expires=" + date.toUTCString();
        document.cookie = `${name}=${value};${expires};path=/`;
    }

    // Helper function to get a cookie
    function getCookie(name) {
        const nameEQ = `${name}=`;
        const ca = document.cookie.split(';');
        for (let i = 0; i < ca.length; i++) {
            let c = ca[i].trim();
            if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
        }
        return null;
    }

    // Function to close both the banner and modal
    function closeAll() {
        document.getElementById("cookieConsent").style.display = "none";
        const modal = document.getElementById("cookieSettingsModal");
        modal.classList.remove('show'); // Remove show class to start fade-out transition
        setTimeout(() => modal.style.display = "none", 500); // Hide modal after transition
    }

    // Function to handle cookie acceptance
    function acceptCookies() {
        setCookie("cookiesAccepted", "true", 365); // Set the cookie for 1 year
        closeAll(); // Hide both banner and modal
    }

    // Check if cookies have already been accepted
    if (getCookie("cookiesAccepted")) {
        closeAll(); // If the cookie is set, hide the banner and modal
    } else {
        document.getElementById("cookieConsent").style.display = "flex"; // Show the banner if no cookie
    }

    // Event listener for "Accept All" button in banner and modal
    document.querySelectorAll("#acceptCookies").forEach(button => {
        button.onclick = function() {
            acceptCookies(); // Handle cookie acceptance and close banner and modal
        };
    });

    // Show the modal when any "Cookie Settings" button is clicked
    document.querySelectorAll("#cookieSettingsabout, #cookieSettingsservice, #cookieSettingsproject, #cookieSettingscontact, #cookieSettingshome, #cookieSettingshomepage").forEach(button => {
        button.onclick = function() {
            const modal = document.getElementById("cookieSettingsModal");
            modal.style.display = "flex"; // Ensure display is set to flex
            setTimeout(() => modal.classList.add('show'), 10); // Add show class with slight delay for transition
        };
    });

    // Close the modal when the close button is clicked
    document.querySelector(".cookie-settings-close").onclick = function() {
        const modal = document.getElementById("cookieSettingsModal");
        modal.classList.remove('show'); // Remove show class to start fade-out transition
        setTimeout(() => modal.style.display = "none", 500); // Hide modal after transition
    };

    // Handle optional cookies header click
    document.getElementById("optionalCookiesHeader").onclick = function() {
        const details = document.getElementById("optionalCookies");
        const header = this;
        if (details.classList.contains('show')) {
            details.classList.remove('show');
            header.classList.remove('active');
        } else {
            details.classList.add('show');
            header.classList.add('active');
        }
    };

    // Handle the toggle switch for Analytics Cookies
    const analyticsToggle = document.getElementById('analyticsCookiesToggle');
    const toggleStatus = document.getElementById('toggleStatus');

    // Function to update the toggle status text (On/Off)
    function updateToggleStatus() {
        if (analyticsToggle.checked) {
            toggleStatus.textContent = 'On';
            setCookie('analyticsCookies', 'enabled', 365); // Set analytics cookie to 'enabled' for 1 year
        } else {
            toggleStatus.textContent = 'Off';
            setCookie('analyticsCookies', 'disabled', 365); // Set analytics cookie to 'disabled' for 1 year
        }
    }

    // Set initial toggle status based on the cookie, or default to 'On' if no cookie is set
    const analyticsCookie = getCookie('analyticsCookies');
    if (analyticsCookie === 'enabled' || analyticsCookie === null) {
        analyticsToggle.checked = true;  // Default to checked if no cookie is set or if it was enabled
    } else {
        analyticsToggle.checked = false;
    }

    updateToggleStatus(); // Call this function to set the initial status

    // Add event listener to toggle the status when clicked
    analyticsToggle.addEventListener('change', updateToggleStatus);
});


//Booking
document.addEventListener('DOMContentLoaded', function() {
    // Modal related elements
    const bookNowButton = document.getElementById('booknow'); 
    const bookNowwButton = document.getElementById('bookNoww'); 
    const bookNowwwButton = document.getElementById('bookNowww'); 
    const requestQuoteButton = document.getElementById('quote');
    const requestQuoteButtonOne = document.getElementById('quoteone');
    const requestQuoteButtonTwo = document.getElementById('quotetwo');
    const requestQuoteButtonThree = document.getElementById('quotethree');
    const requestQuoteButtonFour = document.getElementById('quotefour');
    const requestQuoteButtonFive= document.getElementById('quotefive');
    const requestQuoteButtonSix = document.getElementById('quotesix');
    const requestQuoteButtonSeven = document.getElementById('quoteseven');
    const requestQuoteButtonEight = document.getElementById('quoteeight');
    const footerBookNowButton = document.getElementById('requestbook'); 
    const footerRequestQuoteButton = document.getElementById('requestquote'); 
    const bookingFormModal = document.getElementById('bookingFormModal');
    const quoteFormModal = document.getElementById('quoteFormModal');
    const closeBookingFormButton = document.getElementById('closeForm');
    const closeQuoteFormButton = document.getElementById('closeQuoteForm');
    const postCodeInput = document.getElementById('bookingPostCode');
    const input2 = document.getElementById('input2');
    const serviceSelect = document.getElementById('bookingService');
    let selectedService = ""; // Holds the selected service from the dropdown

    // Dropdown menu related elements
    const item1 = document.getElementById('item1');
    const dropdownMenu = document.getElementById('dropdownMenu');
    const displaySelection = document.getElementById('displaySelection');
    const defaultText = 'I need help with...';

    // Initialize the placeholder text
    if (displaySelection) {
        displaySelection.textContent = defaultText;
        displaySelection.classList.add('placeholder');
    }

    // Function to open modal
    const openModal = function(modal) {
        if (modal) {
            modal.style.display = 'flex';
            setTimeout(function() {
                modal.classList.add('show');
            }, 10);
            document.body.classList.add('modal-open');
        }
    };

    // Function to close modal
    const closeModal = function(modal) {
        if (modal) {
            modal.classList.remove('show');
            document.body.classList.remove('modal-open');
            setTimeout(function() {
                modal.style.display = 'none';
            }, 600); // Match this duration with the CSS transition duration
        }
    };

    // Function to populate booking form modal
    const populateBookingFormModal = function() {
        if (postCodeInput && input2) {
            postCodeInput.value = input2.value; // Copy value from input2 to postCodeInput
        }
        if (serviceSelect && selectedService) {
            let serviceFound = false;
            for (let i = 0; i < serviceSelect.options.length; i++) {
                if (serviceSelect.options[i].text === selectedService) {
                    serviceSelect.selectedIndex = i;
                    serviceFound = true;
                    break;
                }
            }
            // If the selectedService is not found, reset the select to default
            if (!serviceFound) {
                serviceSelect.selectedIndex = 0; // Default option
            }
        }
    };

    // Event listener for booking button
    if (bookNowButton) {
        bookNowButton.addEventListener('click', function() {
            populateBookingFormModal(); // Populate the form
            openModal(bookingFormModal); // Then open the modal
        });
    }

    // Event listener for new booking button
    if (bookNowwButton) {
        bookNowwButton.addEventListener('click', function() {
            openModal(bookingFormModal);
        });
    }

    if (bookNowwwButton) {
        bookNowwwButton.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent the default action (scroll to top)
            openModal(bookingFormModal);
        });
    }

    // Event listener for footer booking button
    if (footerBookNowButton) {
        footerBookNowButton.addEventListener('click', function() {
            openModal(bookingFormModal);
        });
    }

    // Event listener for request quote button
    if (requestQuoteButton) {
        requestQuoteButton.addEventListener('click', function() {
            openModal(quoteFormModal);
        });
    }
    if (requestQuoteButtonOne) {
        requestQuoteButtonOne.addEventListener('click', function() {
            openModal(quoteFormModal);
        });
    }
    if (requestQuoteButtonTwo) {
        requestQuoteButtonTwo.addEventListener('click', function() {
            openModal(quoteFormModal);
        });
    }
    if (requestQuoteButtonThree) {
        requestQuoteButtonThree.addEventListener('click', function() {
            openModal(quoteFormModal);
        });
    }
    if (requestQuoteButtonFour) {
        requestQuoteButtonFour.addEventListener('click', function() {
            openModal(quoteFormModal);
        });
    }
    if (requestQuoteButtonFive) {
        requestQuoteButtonFive.addEventListener('click', function() {
            openModal(quoteFormModal);
        });
    }
    if (requestQuoteButtonSix) {
        requestQuoteButtonSix.addEventListener('click', function() {
            openModal(quoteFormModal);
        });
    }
    if (requestQuoteButtonSeven) {
        requestQuoteButtonSeven.addEventListener('click', function() {
            openModal(quoteFormModal);
        });
    }
    if (requestQuoteButtonEight) {
        requestQuoteButtonEight.addEventListener('click', function() {
            openModal(quoteFormModal);
        });
    }

    // Event listener for footer request quote button
    if (footerRequestQuoteButton) {
        footerRequestQuoteButton.addEventListener('click', function() {
            openModal(quoteFormModal);
        });
    }

    // Event listener for closing booking form
    if (closeBookingFormButton) {
        closeBookingFormButton.addEventListener('click', function() {
            closeModal(bookingFormModal);
        });
    }

    // Event listener for closing quote form
    if (closeQuoteFormButton) {
        closeQuoteFormButton.addEventListener('click', function() {
            closeModal(quoteFormModal);
        });
    }

    // Event listener for clicking outside modals to close them
    if (bookingFormModal) {
        bookingFormModal.addEventListener('click', function(event) {
            if (event.target === bookingFormModal) {
                closeModal(bookingFormModal);
            }
        });
    }

    if (quoteFormModal) {
        quoteFormModal.addEventListener('click', function(event) {
            if (event.target === quoteFormModal) {
                closeModal(quoteFormModal);
            }
        });
    }

    // Event listener for item1 (dropdown toggle)
    if (item1) {
        item1.addEventListener('click', function(event) {
            event.stopPropagation(); // Prevent dropdown from closing when clicking on item1
            if (dropdownMenu.style.display === 'block') {
                dropdownMenu.style.display = 'none';
            } else {
                dropdownMenu.style.display = 'block';
            }
        });
    }

    // Event listener to close dropdown when clicking outside
    if (dropdownMenu) {
        document.addEventListener('click', function() {
            dropdownMenu.style.display = 'none';
        });

        dropdownMenu.addEventListener('click', function(event) {
            event.stopPropagation(); // Prevent dropdown from closing when clicking on menu items
            if (event.target.classList.contains('dropdown-item')) {
                const selectedText = event.target.textContent;
                displaySelection.textContent = selectedText;
                displaySelection.classList.remove('placeholder');
                selectedService = selectedText; // Update selectedService
                dropdownMenu.style.display = 'none';

                // Update serviceSelect in modal form
                if (serviceSelect) {
                    for (let i = 0; i < serviceSelect.options.length; i++) {
                        if (serviceSelect.options[i].text === selectedService) {
                            serviceSelect.selectedIndex = i;
                            break;
                        }
                    }
                }
            }
        });
    }
});


//Responsive Carousel 
let currentIndex = 0;
const items = document.querySelectorAll('.carousel-item');
const indicators = document.querySelectorAll('.carousel-indicators input');
const carouselInner = document.querySelector('.carousel-inner');
const totalItems = items.length;

function showSlide(index) {
    carouselInner.style.transition = 'transform 0.5s ease';
    carouselInner.style.transform = `translateX(-${index * 100}%)`;
    indicators.forEach((indicator, i) => {
        indicator.checked = i === index;
    });
}

function nextSlide() {
    if (currentIndex === totalItems - 1) {
        carouselInner.style.transition = 'transform 0.5s ease';
        carouselInner.style.transform = `translateX(-${currentIndex * 100}%)`;
        setTimeout(() => {
            carouselInner.style.transition = 'none';
            currentIndex = 0;
            carouselInner.style.transform = `translateX(0)`;
            indicators.forEach((indicator, i) => {
                indicator.checked = i === currentIndex;
            });
        }, 500);
    } else {
        currentIndex++;
        showSlide(currentIndex);
    }
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + totalItems) % totalItems;
    showSlide(currentIndex);
}

function currentSlide(index) {
    currentIndex = index;
    showSlide(currentIndex);
}

let autoSlide = setInterval(nextSlide, 5000);

document.querySelector('.carousel').addEventListener('mouseenter', () => {
    clearInterval(autoSlide);
});

document.querySelector('.carousel').addEventListener('mouseleave', () => {
    autoSlide = setInterval(nextSlide, 5000);
});


//FAQ
document.addEventListener('DOMContentLoaded', function () {
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const faqQuestion = item.querySelector('.faq-question');
        const iconContainer = item.querySelector('.icon-container');
        const faqAnswer = item.querySelector('.faq-answer');

        faqQuestion.addEventListener('click', function () {
            const isActive = item.classList.contains('active');
            faqItems.forEach(i => {
                i.classList.remove('active');
                i.querySelector('.faq-answer').style.maxHeight = null;
                i.querySelector('.icon-container').classList.remove('active');
                i.querySelector('.icon-container .toggle-icon').classList.remove('ri-subtract-fill');
                i.querySelector('.icon-container .toggle-icon').classList.add('ri-add-line');
            });
            if (!isActive) {
                item.classList.add('active');
                faqAnswer.style.maxHeight = faqAnswer.scrollHeight + "px";
                iconContainer.classList.add('active');
                const icon = iconContainer.querySelector('.toggle-icon');
                icon.classList.remove('ri-add-line');
                icon.classList.add('ri-subtract-fill');
            }
        });
    });
});

//Contact Form

//Ordering of Service Content for index-services.html

document.addEventListener('DOMContentLoaded', function() {
    const ourServices = document.querySelectorAll('.our-service');
  
    ourServices.forEach(service => {
      // Check if the service has the 'white' class and if it's an even child
      if (service.classList.contains('white')) {
        const content = service.querySelector('.content');
        const image = service.querySelector('.image');
        
        // If the image is above the content, move the content above the image
        if (image && content && image.parentNode === service && content.previousElementSibling === image) {
          service.appendChild(content); // Move content to be after the image
        }
      }
    });
  });
  

//Transitions
//Index.html

document.addEventListener('DOMContentLoaded', function() {
    const boxOver = document.querySelector('.boxover');
    const boxOverTwo = document.querySelector('.boxover2');
    const boxes = document.querySelectorAll('.box');
    const bookingSection = document.querySelector('.booking-section');
    const firstImage = document.querySelector('.first-image');
    const firstContent = document.querySelector('.first-content');
    const bannerrr = document.querySelector('.bannerrr');
    const horizontal = document.querySelector('.horizontal');
    const i1 = document.querySelector('.i1');
    const i2 = document.querySelector('.i2');
    const i3 = document.querySelector('.i3'); // Added .i3
    const i4 = document.querySelector('.i4'); // Added .i4
    const i5 = document.querySelector('.i5'); // Added .i5
    const i6 = document.querySelector('.i6'); // Added .i6

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

    // Function to apply transition immediately on load if in view
    const applyInitialTransitions = () => {
        // Handle box elements
        boxes.forEach(box => {
            if (isElementInViewport(box)) {
                applyTransitionStyles(box, 1, 'translateY(0)', 'opacity 1s ease, transform 1.5s ease');
            }
        });

        // Handle boxover element
        if (boxOver && isElementInViewport(boxOver)) {
            applyTransitionStyles(boxOver, 1, 'translateX(0)', 'opacity 1s ease, transform 1.5s ease');
        }

          // Handle boxover2 element
          if (boxOverTwo && isElementInViewport(boxOverTwo)) {
            applyTransitionStyles(boxOverTwo, 1, 'translateX(0)', 'opacity 1s ease, transform 1.5s ease');
        }

        // Handle first-image element
        if (firstImage && isElementInViewport(firstImage)) {
            applyTransitionStyles(firstImage, 1, 'translateX(0)', 'opacity 1s ease, transform 1.5s ease');
        }

        // Handle first-content element
        if (firstContent && isElementInViewport(firstContent)) {
            applyTransitionStyles(firstContent, 1, 'translateX(0)', 'opacity 1s ease, transform 1.5s ease');
        }

        // Handle booking-section element
        if (bookingSection && isElementInViewport(bookingSection)) {
            applyTransitionStyles(bookingSection, 1, 'none', 'opacity 3s ease');
        }

        // Handle bannerrr element
        if (bannerrr && isElementInViewport(bannerrr)) {
            applyTransitionStyles(bannerrr, 1, 'translateY(0)', 'opacity 1s ease, transform 1.5s ease');
        }

        // Handle horizontal element
        if (horizontal && isElementInViewport(horizontal)) {
            applyTransitionStyles(horizontal, 1, 'translateX(0)', 'opacity 1s ease, transform 1.5s ease');
        }

        // Handle i1 element
        if (i1 && isElementInViewport(i1)) {
            applyTransitionStyles(i1, 1, 'translateY(0)', 'opacity 1s ease, transform 1.5s ease');
        }

        // Handle i2 element
        if (i2 && isElementInViewport(i2)) {
            applyTransitionStyles(i2, 1, 'translateX(0)', 'opacity 1s ease, transform 1.5s ease');
        }

        // Handle i3 element
        if (i3 && isElementInViewport(i3)) {
            applyTransitionStyles(i3, 1, 'translateX(0)', 'opacity 1s ease, transform 1.5s ease');
        }

        // Handle i4 element
        if (i4 && isElementInViewport(i4)) {
            applyTransitionStyles(i4, 1, 'translateY(0)', 'opacity 1s ease, transform 1.5s ease');
        }

        // Handle i5 element
        if (i5 && isElementInViewport(i5)) {
            applyTransitionStyles(i5, 1, 'translateY(0)', 'opacity 1s ease, transform 1.5s ease'); // Added .i5 transition
        }

        // Handle i6 element
        if (i6 && isElementInViewport(i6)) {
            applyTransitionStyles(i6, 1, 'translateX(0)', 'opacity 1s ease, transform 1.5s ease'); // Added .i6 transition
        }
    };

    // Function to handle scroll events
    const handleScroll = () => {
        // Handle scroll-related transitions
        boxes.forEach(box => {
            if (isElementInViewport(box) && !box.classList.contains('visible')) {
                applyTransitionStyles(box, 1, 'translateY(0)', 'opacity 1s ease, transform 1.5s ease');
            }
        });

        if (boxOver && isElementInViewport(boxOver) && !boxOver.classList.contains('visible')) {
            applyTransitionStyles(boxOver, 1, 'translateX(0)', 'opacity 1s ease, transform 1.5s ease');
        }

        if (boxOverTwo && isElementInViewport(boxOverTwo) && !boxOverTwo.classList.contains('visible')) {
            applyTransitionStyles(boxOverTwo, 1, 'translateX(0)', 'opacity 1s ease, transform 1.5s ease');
        }

        if (firstImage && isElementInViewport(firstImage) && !firstImage.classList.contains('visible')) {
            applyTransitionStyles(firstImage, 1, 'translateX(0)', 'opacity 1s ease, transform 1.5s ease');
        }

        if (firstContent && isElementInViewport(firstContent) && !firstContent.classList.contains('visible')) {
            applyTransitionStyles(firstContent, 1, 'translateX(0)', 'opacity 1s ease, transform 1.5s ease');
        }

        if (bookingSection && isElementInViewport(bookingSection) && !bookingSection.classList.contains('visible')) {
            applyTransitionStyles(bookingSection, 1, 'none', 'opacity 3s ease');
        }

        if (bannerrr && isElementInViewport(bannerrr) && !bannerrr.classList.contains('visible')) {
            applyTransitionStyles(bannerrr, 1, 'translateY(0)', 'opacity 1s ease, transform 1.5s ease');
        }

        if (horizontal && isElementInViewport(horizontal) && !horizontal.classList.contains('visible')) {
            applyTransitionStyles(horizontal, 1, 'translateX(0)', 'opacity 1s ease, transform 1.5s ease');
        }

        if (i1 && isElementInViewport(i1) && !i1.classList.contains('visible')) {
            applyTransitionStyles(i1, 1, 'translateY(0)', 'opacity 1s ease, transform 1.5s ease');
        }

        if (i2 && isElementInViewport(i2) && !i2.classList.contains('visible')) {
            applyTransitionStyles(i2, 1, 'translateX(0)', 'opacity 1s ease, transform 1.5s ease');
        }

        if (i3 && isElementInViewport(i3) && !i3.classList.contains('visible')) {
            applyTransitionStyles(i3, 1, 'translateX(0)', 'opacity 1s ease, transform 1.5s ease');
        }

        if (i4 && isElementInViewport(i4) && !i4.classList.contains('visible')) {
            applyTransitionStyles(i4, 1, 'translateY(0)', 'opacity 1s ease, transform 1.5s ease');
        }

        // Handle i5 element
        if (i5 && isElementInViewport(i5) && !i5.classList.contains('visible')) {
            applyTransitionStyles(i5, 1, 'translateY(0)', 'opacity 1s ease, transform 1.5s ease'); // Added .i5 transition
        }

        // Handle i6 element
        if (i6 && isElementInViewport(i6) && !i6.classList.contains('visible')) {
            applyTransitionStyles(i6, 1, 'translateX(0)', 'opacity 1s ease, transform 1.5s ease'); // Added .i6 transition
        }
    };

    // Set initial opacity and transform for elements
    const setInitialStyles = () => {
        if (boxOver) {
            boxOver.style.opacity = 0;
            boxOver.style.transform = 'translateX(-100px)'; // Initial horizontal translation
        }

        if (boxOverTwo) {
            boxOverTwo.style.opacity = 0;
            boxOverTwo.style.transform = 'translateX(-100px)'; // Initial horizontal translation
        }

        boxes.forEach(box => {
            box.style.opacity = 0;
            box.style.transform = 'translateY(100px)'; // Initial vertical translation
        });

        if (firstImage) {
            firstImage.style.opacity = 0;
            firstImage.style.transform = 'translateX(-100px)'; // Initial horizontal translation from the left
        }

        if (firstContent) {
            firstContent.style.opacity = 0;
            firstContent.style.transform = 'translateY(100px)'; // Initial horizontal translation from the right
        }

        if (bookingSection) {
            bookingSection.style.opacity = 0;
        }

        if (bannerrr) {
            bannerrr.style.opacity = 0;
            bannerrr.style.transform = 'translateY(100px)'; // Initial vertical translation from the bottom
        }

        if (horizontal) {
            horizontal.style.opacity = 0;
            horizontal.style.transform = 'translateX(-100px)'; // Initial horizontal translation from the left
        }

        if (i1) {
            i1.style.opacity = 0;
            i1.style.transform = 'translateY(-100px)'; // Initial vertical translation from the bottom
        }

        if (i2) {
            i2.style.opacity = 0;
            i2.style.transform = 'translateX(-100px)'; // Initial horizontal translation from the left
        }

        if (i3) {
            i3.style.opacity = 0;
            i3.style.transform = 'translateY(100px)'; // Initial horizontal translation from the right
        }

        if (i4) {
            i4.style.opacity = 0;
            i4.style.transform = 'translateY(100px)'; // Initial vertical translation from the bottom
        }

        // Handle i5 element
        if (i5) {
            i5.style.opacity = 0;
            i5.style.transform = 'translateY(100px)'; // Initial vertical translation from the bottom
        }

        // Handle i6 element
        if (i6) {
            i6.style.opacity = 0;
            i6.style.transform = 'translateX(100px)'; // Initial horizontal translation from the right
        }
    };

    // Initialize styles and handle scroll
    setInitialStyles();
    applyInitialTransitions(); // Check initial visibility
    window.addEventListener('scroll', handleScroll);
});


document.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', (event) => {
        // Disable all CSS transitions
        document.body.style.transition = 'none';

        // If you want to remove specific transitions, you can target specific elements:
        // document.querySelector('.element').style.transition = 'none';

        // Optionally, prevent the default action and redirect manually
        // event.preventDefault();
        // window.location.href = link.href;
    });
});




