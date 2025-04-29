// Flight Data (Mock)
const flights = [
    { id: 1, flightNo: "BA123", destination: "New York", status: "On Time", gate: "A12" },
    { id: 2, flightNo: "LH456", destination: "Berlin", status: "Delayed", gate: "B05" },
    { id: 3, flightNo: "EK789", destination: "Dubai", status: "Cancelled", gate: "C10" },
  ];
  
  // Initialize Flight Table
  function loadFlightTable() {
    const tableBody = document.querySelector("#flight-table tbody");
    tableBody.innerHTML = "";
  
    flights.forEach(flight => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${flight.flightNo}</td>
        <td>${flight.destination}</td>
        <td><span class="status-${flight.status.toLowerCase().replace(' ', '-')}">${flight.status}</span></td>
        <td>${flight.gate}</td>
      `;
      tableBody.appendChild(row);
    });
  }
  
  // Check-In Form Submission
  document.getElementById("checkin-form").addEventListener("submit", function(e) {
    e.preventDefault();
    const bookingRef = document.getElementById("booking-ref").value;
    const lastName = document.getElementById("last-name").value;
    
    // Simulate check-in (replace with API call later)
    const resultDiv = document.getElementById("checkin-result");
    resultDiv.innerHTML = `<p>Check-in successful for booking ${bookingRef} (${lastName}). Boarding pass sent to email.</p>`;
    resultDiv.style.display = "block";
    
    // Reset form
    this.reset();
  });
  
  // Tab Navigation
  document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", function(e) {
      e.preventDefault();
      const targetId = this.getAttribute("href").substring(1);
      
      // Hide all tabs
      document.querySelectorAll(".tab-content").forEach(tab => {
        tab.classList.remove("active");
      });
      
      // Show selected tab
      document.getElementById(targetId).classList.add("active");
    });
  });
  
  // Initialize Analytics Chart (using Chart.js)
  function initAnalyticsChart() {
    const ctx = document.getElementById('delay-chart').getContext('2d');
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        datasets: [{
          label: 'Flight Delays (mins)',
          data: [12, 19, 8, 24, 16, 32, 10],
          backgroundColor: 'rgba(0, 99, 132, 0.6)',
        }]
      },
      options: {
        responsive: true,
        scales: {
          y: { beginAtZero: true }
        }
      }
    });
  }
  
  // Initialize Page
  document.addEventListener("DOMContentLoaded", function() {
    loadFlightTable();
    initAnalyticsChart();
  });