// JavaScript to handle miner purchase and display miner information
function purchaseMiner(minerType, cost, dailyRate) {
    let minerDetails = document.getElementById('miner-details');
    let minerStatus = document.getElementById('miner-status');
    
    // Calculate earnings
    let totalEarnings = (cost * dailyRate * 20).toFixed(2); // Earnings after 20 days
    let dailyEarnings = (cost * dailyRate).toFixed(2); // Daily earnings

    // Update miner info display
    minerDetails.innerHTML = `<strong>Miner Purchased:</strong> ${minerType.charAt(0).toUpperCase() + minerType.slice(1)}<br>
                              <strong>Cost:</strong> $${cost}<br>
                              <strong>Daily Earnings:</strong> $${dailyEarnings}<br>
                              <strong>Total Earnings after 20 days:</strong> $${totalEarnings}`;

    // Show mining status and countdown timer
    startMiningCountdown();
}

// Countdown timer function for mining timer
function startMiningCountdown() {
    let timerElement = document.createElement('div');
    timerElement.classList.add('timer');