const toggles = document.querySelectorAll('.faq-toggle');
toggles.forEach(toggle => {
  toggle.addEventListener('click', () => {
    const content = toggle.nextElementSibling;
    content.style.display = content.style.display === 'block' ? 'none' : 'block';
    toggle.classList.toggle('active');
  });
});
document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');

  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('mobile-active');
    menuToggle.classList.toggle('open');
  });
});

// Select elements
const images = document.querySelectorAll('.story-img');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeBtn = document.querySelector('.close');

// Show Lightbox
images.forEach((img) => {
  img.addEventListener('click', () => {
    lightbox.style.display = 'flex';
    lightboxImg.src = img.src; // Set the clicked image as the lightbox image
  });
});

// Close Lightbox
closeBtn.addEventListener('click', () => {
  lightbox.style.display = 'none';
});

// Close Lightbox on Outside Click
lightbox.addEventListener('click', (e) => {
  if (e.target === lightbox) {
    lightbox.style.display = 'none';
  }
});

//popup form
// Function to show the popup
function showPopup() {
  document.getElementById("holidayPopup").style.display = "flex";
}

// Function to close the popup
function closePopup() {
  document.getElementById("holidayPopup").style.display = "none";
}

// Automatically show the popup after 5 seconds
window.onload = function () {
  setTimeout(showPopup, 5000);
};

//blueprint
document.addEventListener("DOMContentLoaded", () => {
  const collapsibles = document.querySelectorAll(".collapsible");

  collapsibles.forEach((collapsible) => {
    collapsible.addEventListener("click", function () {
      // Toggle active class for styling
      this.classList.toggle("active");

      // Handle collapsible content
      const content = this.nextElementSibling;

      if (content.style.maxHeight) {
        content.style.maxHeight = null; // Collapse content
      } else {
        content.style.maxHeight = content.scrollHeight + "px"; // Expand content
      }
    });
  });
});

// Animation for Lifestyle Section
document.addEventListener('DOMContentLoaded', () => {
  const lifestyleItems = document.querySelectorAll('.lifestyle-item');

  const revealOnScroll = () => {
    const scrollY = window.scrollY + window.innerHeight - 100; // Trigger 100px before view
    lifestyleItems.forEach((item) => {
      const itemTop = item.getBoundingClientRect().top + window.scrollY;
      if (scrollY >= itemTop) {
        item.style.opacity = 1;
        item.style.transform = 'translateY(0)';
      }
    });
  };

  window.addEventListener('scroll', revealOnScroll);

  // Initial check on page load
  revealOnScroll();
});
