// This script handles the hover effect for the location cards
document.querySelectorAll('.location-card').forEach(card => {
    card.addEventListener('mouseover', () => {
      const address = card.querySelector('.location-content p');
      address.style.display = 'block'; // Show address on hover
    });
  
    card.addEventListener('mouseleave', () => {
      const address = card.querySelector('.location-content p');
      address.style.display = 'none'; // Hide address when hover out
    });
  });

  //calender
  flatpickr("#date", {
    altInput: true,
    altFormat: "F j, Y",
    dateFormat: "Y-m-d",
    minDate: "today",
    disable: [
      function(date) {
        return (date.getDay() === 0); // Disable Sundays
      }
    ],
    // Optional: highlight specific available dates
    // enable: ["2025-05-20", "2025-05-22"]
  });
  