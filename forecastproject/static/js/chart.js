const ctx = document.getElementById('chart').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Dec 25', 'Dec 26', 'Dec 27', 'Dec 28', 'Dec 29', 'Dec 30', 'Dec 31'],
        datasets: [{
            label: 'Price of Coconut Copra',
            data: [31.50, 29.8, 32, 32.3, 28, 31, 26],
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
