let waterProgressChartInstance = null; // Variable to store chart instance

document.getElementById('logWater').addEventListener('click', function () {
    const waterAmount = parseInt(document.getElementById('waterAmount').value);
    const waterDate = document.getElementById('waterDate').value || moment().format('YYYY-MM-DD');

    if (!isNaN(waterAmount) && waterAmount > 0) {
        const entry = {
            amount: waterAmount,
            timestamp: waterDate + " " + moment().format('HH:mm:ss') //Add time to date
        };

        let waterEntries = Lockr.get('waterEntries') || [];
        waterEntries.push(entry);
        Lockr.set('waterEntries', waterEntries);

        const days = 7;   //Number of days to be tracket (can be adjusted)
        updateMultiDayWaterProgressChart(days);
    } else {
        alert('Please enter a valid water amount.');
    }
});

// Function to calculate water totals for multiple days
function calculateMultiDayTotal(days = 7) {
    let waterEntries = Lockr.get('waterEntries') || [];
    let startDate = moment().subtract(days - 1, 'days');  //Calculate start date based on number of days

    const dailyTotals = [];

    for (let i = 0; i < days; i++) {
        const date = startDate.format('YYYY-MM-DD');   
        const dailyTotal = waterEntries
            .filter(entry => entry.timestamp.startsWith(date))   
            .reduce((total, entry) => total + entry.amount, 0) //Sum up amounts for that day

        dailyTotals.push({
            date, 
            total: dailyTotal
        });

        startDate = startDate.add(1, 'days');  //Move to next day
    }

    return dailyTotals;
}


// Function to update charts for multiple days with water-filling effect
function updateMultiDayWaterProgressChart(days = 7) {
    const ctx = document.getElementById('waterProgressChart').getContext('2d');
    const dailyTotals = calculateMultiDayTotal(days);

    const labels = dailyTotals.map(entry => entry.date); //
    const data = dailyTotals.map(entry => entry.total); //water intake totals for each day

    // Create a gradient for the "water filling" effect
    const gradient = ctx.createLinearGradient(0, 0, 0, 400);
    gradient.addColorStop(0, 'rgba(54, 162, 235, 0.8)'); // Darker blue
    gradient.addColorStop(1, 'rgba(54, 162, 235, 0.2)'); // Light blue

    // Clear the previous chart
    if (waterProgressChartInstance) {
        waterProgressChartInstance.destroy();
    }

    // Create the chart for multiple days
    waterProgressChartInstance = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labels,   //Use dates as labels
            datasets: [{
                label: 'Water Intake (ml)',
                data: data, // Use daily totals as data
                backgroundColor: gradient, // Apply the gradient for water-filling effect
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true,
                    max: Lockr.get('dailyGoal') || 2000 // Set the max value to the daily goal
                }
            },
            plugins: {
                // Custom animations to make it look like the bar is filling
                animation: {
                    duration: 1500,
                    easing: 'easeOutQuart'
                }
            }
        }
    });
}

// Reset Button
document.getElementById('resetWater').addEventListener('click', function () {
    const today = moment().format('YYYY-MM-DD');

    // Clear water entries and total for today
    Lockr.set('waterEntries', []);
    Lockr.set(today, 0);

    // Reset the UI
    document.getElementById('dailyTotal').textContent = 'Total: 0 ml';

    // Reset the chart
    if (waterProgressChartInstance) {
        waterProgressChartInstance.destroy(); //Destroy chart befor resetting
        updateMultiDayWaterProgressChart(7); //Re-initialize for the last 7 days
    }

    alert('Water intake has been reset for today.');
});

// Initialize daily totals and chart on page load
window.onload = function() {
    const days = 7; 
    updateMultiDayWaterProgressChart(days);    //Initialize chart with multi-day data
};
