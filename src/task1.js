function convert() {
    const bitcoinRate = parseFloat(document.getElementById('bitcoinRate').value);
    const usdAmount = parseFloat(document.getElementById('usdAmount').value);
    
    if (bitcoinRate > 0 && usdAmount > 0) {
        const bitcoinAmount = usdAmount / bitcoinRate;
        const resultElement = document.getElementById('result');
        resultElement.textContent = `You can buy ${bitcoinAmount.toFixed(7)} BTC.`;
    } else {
        const resultElement = document.getElementById('result');
        resultElement.textContent = '';
    }
}