// Flight Delays Chart
const delayCtx = document.getElementById('delayChart').getContext('2d');
new Chart(delayCtx, {
  type: 'line',
  data: {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [{
      label: 'Average Delay (mins)',
      data: [15, 22, 8, 17, 25, 12, 10],
      borderColor: 'rgba(0, 99, 132, 1)',
      backgroundColor: 'rgba(0, 99, 132, 0.2)',
      fill: true,
      tension: 0.3
    }]
  },
  options: {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Weekly Flight Delays',
        font: { size: 16 }
      }
    }
  }
});

// Passenger Traffic Chart
const trafficCtx = document.getElementById('trafficChart').getContext('2d');
new Chart(trafficCtx, {
  type: 'bar',
  data: {
    labels: ['Terminal 1', 'Terminal 2', 'Terminal 3', 'Terminal 4'],
    datasets: [{
      label: 'Passenger Traffic',
      data: [4200, 5800, 5100, 3300],
      backgroundColor: [
        'rgba(0, 99, 132, 0.7)',
        'rgba(0, 158, 96, 0.7)',
        'rgba(255, 159, 64, 0.7)',
        'rgba(231, 76, 60, 0.7)'
      ]
    }]
  },
  options: {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Passenger Traffic by Terminal',
        font: { size: 16 }
      }
    }
  }
});

// Responsive Tableau Graph
const divElement = document.getElementById('viz1745956724057');
const vizElement = divElement.getElementsByTagName('object')[0];

function adjustTableauSize() {
  const containerWidth = divElement.offsetWidth;

  if (containerWidth > 800) {
    vizElement.style.width = '100%';
    vizElement.style.height = '850px';
  } else if (containerWidth > 500) {
    vizElement.style.width = '100%';
    vizElement.style.height = '600px';
  } else {
    vizElement.style.width = '100%';
    vizElement.style.height = '400px';
  }
}

// Adjust size on load and when the window is resized
adjustTableauSize();
window.addEventListener('resize', adjustTableauSize);