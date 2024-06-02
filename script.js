function calculate() {
    const buyPrice = parseFloat(document.getElementById('buyPrice').value);
    const sellPrice = parseFloat(document.getElementById('sellPrice').value);
    const investedAmount = parseFloat(document.getElementById('investedAmount').value);

    if (isNaN(buyPrice) || isNaN(sellPrice)) {
        alert("Please enter valid numbers for Buy and Sell prices.");
        return;
    }

    const percentageChange = ((sellPrice - buyPrice) / buyPrice) * 100;

    if (isNaN(investedAmount)) {
        document.getElementById('result').innerHTML = `
            <p><b>Percentage Change:</b> ${percentageChange.toFixed(2)}%</p>
        `;
    } else {
        const netProfitLoss = (percentageChange / 100) * investedAmount;
        const finalBalance = investedAmount + netProfitLoss;

        document.getElementById('result').innerHTML = `
            <p><b>Percentage Change:</b> ${percentageChange.toFixed(2)}%</p>
            <p><b>Net Profit/Loss:</b> ${netProfitLoss.toFixed(2)}</p>
            <p><b>Final Balance:</b> ${finalBalance.toFixed(2)}</p>
        `;
    }
}

function resetForm() {
    document.getElementById('buyPrice').value = '';
    document.getElementById('sellPrice').value = '';
    document.getElementById('investedAmount').value = '';
    document.getElementById('result').innerHTML = '';
}

function handleEnterKeyPress(event) {
    if (event.keyCode === 13) {
        event.preventDefault(); // Prevent default action of Enter key
        calculate(); // Call calculate function
    }
    if (event.keyCode === 27) {
        event.preventDefault();
        resetForm(); // Call resetForm function
    }
}

// Event listeners for input fields
document.getElementById('buyPrice').addEventListener('keydown', handleEnterKeyPress);
document.getElementById('sellPrice').addEventListener('keydown', handleEnterKeyPress);
document.getElementById('investedAmount').addEventListener('keydown', handleEnterKeyPress);
document.getElementById('calculateBtn').addEventListener('click', calculate);
document.getElementById('resetBtn').addEventListener('click', resetForm);

// // Prevent scrolling on mobile devices
// document.addEventListener('touchmove', function (event) {
//     event.preventDefault();
// }, { passive: false });
