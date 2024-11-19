document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    const thankYouMessage = document.getElementById('thankYouMessage');

    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        // Simulate form submission
        setTimeout(() => {
            contactForm.reset();
            thankYouMessage.classList.remove('hidden');
        }, 500);
    });
});

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }