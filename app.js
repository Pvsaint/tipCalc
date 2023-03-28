const billAmount = document.getElementById('billInput');
const billOutPut = document.getElementById('bill');
const tipAmont = document.getElementById('tip');
const total = document.getElementById('total');
const button = document.getElementById('calcBtn');
const result = document.querySelector('.infoDisplay');



calcBtn.addEventListener('click', function calculateTip() {

    const tip = billAmount.value <= 300 && billAmount.value >= 50 ? billAmount.value * 0.15 : billAmount.value * 0.2;
    billOutPut.innerHTML = billAmount.value;
    tipAmont.innerHTML = tip;
    total.innerText = billAmount.value + tip;
    billAmount.value = "";
    result.style.display = block
});