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



