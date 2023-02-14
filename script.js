class Chance {
    constructor(chance, upside, downside) {
        this._chance = chance;
        this._upside = upside;
        this._downside = downside;
    }
    get chance() { return this._chance * 100 + "%"; }
    get upside() { return this._upside * 100 + "%"; }
    get downside() { return this._downside * 100 + "%"; }
}

function SetChanceCard(chance) {
    document.getElementById("chance").innerHTML = chance.chance;
    document.getElementById("upside").innerHTML = chance.upside;
    document.getElementById("downside").innerHTML = chance.downside;
}

function Bet(amount, chance) {
    balance -= amount;
    if (Math.random() < chance._chance) {
        var gain = amount * (1 + chance._upside);
        balance += gain;
        console.log("gain");//
    }
    else {
        var loss = amount * (1 - chance._downside);
        balance += loss;
        console.log("loss");
    }
}

chance = new Chance(0.5, 0.25, 0.3)
//SetChanceCard(chance);
balance = 10000;
const div1 = document.createElement('div');
const div2 = document.createElement('div');
const div3 = document.createElement('div');
const div4 = document.createElement('div');
const divStyle = 'display: inline-block; width: 100px; height: 100px; margin: 10px; background-color: #eee;';
div1.style = divStyle;
div2.style = divStyle;
div3.style = divStyle;
div4.style = divStyle;
const container = document.getElementById("chances");
container.appendChild(div1);
container.appendChild(div2);
container.appendChild(div3);
container.appendChild(div4);

function updateBalance() {
    var amount = parseFloat(document.getElementById("amount").value);
    if (amount <= balance) {
        Bet(amount, chance);
        updateBalanceHTML();
    }
    else {
        document.getElementById("balance").innerHTML = "Insufficient Fund";
    }
}

function updateBalanceHTML() {
    document.getElementById("balance").innerHTML = "Your balance is " + formatMoney(balance);
}
function formatMoney(number) {
    return number.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
}

function updateValue() {
    if (balance > 0.01) {
        balance *= 0.98;
        updateBalanceHTML();
    }
    else
        document.getElementById("balance").innerHTML = "Game Over!";
}


//updateBalanceHTML();

/*
function formatMoney(number) {
    return number.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
}

function updateBalanceHTML() {
    document.getElementById("balance").innerHTML = "Your new balance is " + formatMoney(value);
}

function updateBalance() {
    if (amount === "") {
        var balance = document.getElementById("balance");
        document.getElementById("balance").innerHTML = "Please enter an amount.";
        return;
    }

    updateBalanceHTML();
}

function updateValue() {
    if (value > 0.01) {
        value *= 0.98;
        updateBalanceHTML();
    }
    else
        document.getElementById("balance").innerHTML = "Game Over!";
}

updateBalanceHTML();
setInterval(updateValue, 1000);

*/

/*
function updateBalance() {
    var amount = parseFloat(document.getElementById("amount").value);
    var currentBalance = parseFloat(document.getElementById("balance").innerHTML);
    var updatedBalance = currentBalance + amount;
    document.getElementById("balance").innerHTML = updatedBalance;
}*/