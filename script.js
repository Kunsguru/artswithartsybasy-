function toggleFooter() {
        var footer = document.getElementById('myFooter');
        footer.classList.toggle('show-footer');
    }
    
    
    
    
    
    
    // Disable right-click context menu
    window.addEventListener('contextmenu', function (e) {
        e.preventDefault();
    });
    
    // Disable dragging of images
    document.addEventListener('dragstart', function (e) {
        e.preventDefault();
    });
    	
    
    
    
    
    
    	
    
        

        function openContactForm() {
            var contactModal = document.getElementById("contactModal");
            contactModal.style.display = "block";
        }

        function closeModal(modalId) {
            var modal = document.getElementById(modalId);
            modal.style.display = "none";
        }
        
        function scrollToSection(sectionId) {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    }
    
    function submitForm(event) {
    event.preventDefault(); // Prevent form submission

    // Get form data
    var formData = new FormData(document.getElementById('registrationForm'));

    // Dummy code to display form data
    for (var pair of formData.entries()) {
        console.log(pair[0] + ': ' + pair[1]);
    }

    // Dummy code to simulate form submission acknowledgment
    alert('Thank you for registering! We have received your information.');

    // Clear form fields after submission
    document.getElementById('fullName').value = '';
    document.getElementById('email').value = '';
    document.getElementById('phone').value = '';

    // Convert prize amounts from dollars to naira
    var prizes = document.querySelectorAll('.prize');
    prizes.forEach(function(prize) {
        var amountInDollars = parseFloat(prize.textContent.replace('$', ''));
        var amountInNaira = amountInDollars * 1000; // Assuming 1 USD = 1000 NGN
        prize.textContent = '₦' + amountInNaira.toFixed(2);
    });
}



document.addEventListener("DOMContentLoaded", function() {
    const readMoreButtons = document.querySelectorAll('.read-more-btn');

    readMoreButtons.forEach(function(btn) {
        btn.addEventListener('click', function() {
            const targetId = this.getAttribute('data-target');
            const targetElement = document.getElementById(targetId);

            if (targetElement.classList.contains('hidden')) {
                targetElement.classList.remove('hidden');
                this.textContent = 'Read Less';
            } else {
                targetElement.classList.add('hidden');
                this.textContent = 'Read More';
            }
        });
    });
});



document.addEventListener('DOMContentLoaded', () => {
    // Open modal function
    window.openModal = function(modalId) {
        document.getElementById(modalId).classList.remove('hidden');
    };

    // Close modal function
    window.closeModal = function(modalId) {
        document.getElementById(modalId).classList.add('hidden');
    };

    // Contact form submission
    window.submitContactForm = function(event) {
        event.preventDefault();
        const form = document.getElementById('contactForm');
        const confirmationMessage = document.getElementById('confirmationMessage');
        
        // Clear form
        form.reset();
        
        // Show confirmation message
        confirmationMessage.classList.remove('hidden');
        
        // Hide confirmation message after 3 seconds
        setTimeout(() => {
            confirmationMessage.classList.add('hidden');
        }, 3000);
        
        // Close modal after 3 seconds
        setTimeout(() => {
            closeModal('contactFormModal');
        }, 3000);
    };


    

    // Live chat functionality
    window.sendMessage = function() {
        const chatInput = document.getElementById('chatInput');
        const chatContent = document.querySelector('.chat-content');
        const message = chatInput.value;
        if (message.trim()) {
            const messageElement = document.createElement('div');
            messageElement.textContent = message;
            chatContent.appendChild(messageElement);
            chatInput.value = '';
        }
    };
});




document.addEventListener('DOMContentLoaded', function() {
    const galleryOverlay = document.getElementById('gallery-overlay');
    const galleryItems = document.querySelectorAll('.gallery-item');

    function openGalleryModal() {
        galleryOverlay.style.display = 'flex';
    }

    function closeGalleryModal() {
        galleryOverlay.style.display = 'none';
    }

    window.openGalleryModal = openGalleryModal;
    window.closeGalleryModal = closeGalleryModal;
});












document.addEventListener('DOMContentLoaded', function() {
    let modal = document.getElementById('modal');
    let modalImg = document.getElementById('modal-img');
    let currentImageIndex = 0;
    const galleryItems = document.querySelectorAll('.gallery-item');
    const gallery = document.querySelector('.gallery');

    galleryItems.forEach((item, index) => {
        item.addEventListener('click', function() {
            openModal(index);
        });
    });

    document.querySelector('.close').addEventListener('click', closeModal);
    document.getElementById('back').addEventListener('click', closeModal);

    document.getElementById('prev').addEventListener('click', function() {
        showImage(currentImageIndex - 1);
    });

    document.getElementById('next').addEventListener('click', function() {
        showImage(currentImageIndex + 1);
    });

    modal.addEventListener('touchstart', handleTouchStart, false);
    modal.addEventListener('touchmove', handleTouchMove, false);

    let x1 = null;

    function handleTouchStart(evt) {
        const firstTouch = evt.touches[0];
        x1 = firstTouch.clientX;
    }

    function handleTouchMove(evt) {
        if (!x1) return;

        let x2 = evt.touches[0].clientX;
        let xDiff = x2 - x1;

        if (xDiff > 0) {
            showImage(currentImageIndex - 1); // swipe right
        } else {
            showImage(currentImageIndex + 1); // swipe left
        }
        x1 = null;
    }

    function openModal(index) {
        modal.style.display = "block";
        currentImageIndex = index;
        showImage(currentImageIndex);
    }

    function closeModal() {
        modal.style.display = "none";
    }

    function showImage(index) {
        if (index >= galleryItems.length) {
            currentImageIndex = 0;
        } else if (index < 0) {
            currentImageIndex = galleryItems.length - 1;
        } else {
            currentImageIndex = index;
        }
        modalImg.src = galleryItems[currentImageIndex].src;
    }

    window.opengalleryModal = function() {
        gallery.style.display = 'flex';
    }
});







document.addEventListener('DOMContentLoaded', function () {
            function showContent(sectionId) {
                var preloader = document.getElementById('preloader');
                var sections = document.querySelectorAll('.content-section');

                preloader.style.display = 'none';

                sections.forEach(function (section) {
                    section.style.display = 'none';
                });

                var activeSection = document.getElementById(sectionId);
                if (activeSection) {
                    activeSection.style.display = 'block';
                }
            }

            function hideContent() {
                var preloader = document.getElementById('preloader');
                var sections = document.querySelectorAll('.content-section');

                sections.forEach(function (section) {
                    section.style.display = 'none';
                });

                preloader.style.display = 'flex';
            }

            var navLinks = document.querySelectorAll('.nav-link');
            navLinks.forEach(function (link) {
                link.addEventListener('click', function (event) {
                    event.preventDefault(); // Prevent default anchor behavior

                    var targetSection = link.getAttribute('href').substring(1);

                    hideContent();

                    setTimeout(function () {
                        showContent(targetSection);
                    }, 1000); // Simulate loading delay
                });
            });

            // Show the initial content
            setTimeout(function () {
                showContent('home');
            }, 1000); // Initial load delay
        });

