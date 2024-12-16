



const ctx = document.getElementById('myChart');

  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Bots recomendados', 'Bots no recomendados', 'Bots y punto', 'Bots cantantes', 'Bots a favor del presidente', 'Bots en contra del presidente'],
      datasets: [{
        label: 'Probabilidad en % de bots en esta pagina',
        data: [5, 3, 6, 21, 12, 15],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });