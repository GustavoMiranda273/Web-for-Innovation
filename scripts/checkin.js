document.getElementById("checkinForm").addEventListener("submit", function(e) {
    e.preventDefault();
    
    const bookingRef = document.getElementById("bookingRef").value;
    const lastName = document.getElementById("lastName").value;
    
    // Simulate check-in
    document.getElementById("passengerName").textContent = lastName.toUpperCase();
    document.getElementById("flightNumber").textContent = bookingRef.slice(0, 2) + " " + bookingRef.slice(2, 5);
    
    // Show boarding pass
    document.getElementById("boardingPass").style.display = "block";
    
    // Scroll to boarding pass
    document.getElementById("boardingPass").scrollIntoView({ behavior: "smooth" });
  });