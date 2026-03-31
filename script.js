const ctx = document.getElementById('barChart');

new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['AP', 'TS', 'UP', 'TN'],
    datasets: [{
      label: 'Disbursement (Lakhs)',
      data: [50, 75, 30, 60],
      backgroundColor: ['#3498db','#2ecc71','#e74c3c','#9b59b6']
    }]
  }
});