document.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');
    const chck = document.getElementById('check');
    // Radios here
    const GPay = document.getElementById('GPay');
    const Net = document.getElementById('Net');
    const card = document.getElementById('card');
    const stock = document.getElementById('stock');

    const btn = document.getElementById('btn');

    let subscribe = document.getElementById('subscribe');
    let bank = document.getElementById('bank');

    console.log('Elements:', { chck, GPay, Net, card, stock, btn, subscribe, bank });

    btn.onclick = function () {
        console.log('Button clicked');
        if (chck.checked) {
            console.log('Checkbox is checked');
            chck.style.backgroundColor = 'green';
            chck.style.color = 'red';

            subscribe.textContent = `You have Subscribed to Mithool Services`;
        } else {
            console.log('Checkbox is not checked');
            subscribe.textContent = `Please Subscribe to Mithool Services`;
        }
        if (GPay.checked) {
            bank.textContent = `You have paid via Google Pay`;

        } else if (Net.checked) {
            bank.textContent = `You have paid via Net Banking`;
        }
        else if (card.Checked) {
            bank.textContent = `You have paid via Card`;

        } else if (stock.Checked) {
            bank.textContent = `You have paid in form of your equities`;
        }
        else {
            bank.textContent = `Please pay via the given options`;
        }
    }
});