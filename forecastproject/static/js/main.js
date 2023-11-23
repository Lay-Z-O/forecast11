const ctx = document.getElementById('chart').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['November', 'December', 'January', 'Febrary', 'March', 'April'],
        datasets: [{
            label: 'Price of Coconut Copra',
            data: [29, 30.50, 28, 28, 26, 31],
            backgroundColor: 'blue',
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
