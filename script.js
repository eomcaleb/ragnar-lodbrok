class Chance {
    constructor(chance, upside, downside) {
        this._chance = chance;
        this._upside = upside;
        this._downside = downside;
    }

    html() {
        var p = document.createElement('p');
        p.innerHTML = "Chance: " + this.chance + "<br>";
        p.innerHTML += "Upside: " + this.upside + "<br>";
        p.innerHTML += "Downside: " + this.downside;
        return p;
    }
    get chance() { return this._chance * 100 + "%"; }
    get upside() { return this._upside * 100 + "%"; }
    get downside() { return this._downside * 100 + "%"; }
}

class Choice {
    constructor(chance) {
        this.chance = chance;
    }

    buildHTML(index) {
        this.div = document.createElement('div');
        this.div.style = 'display: inline-block; width: 300px; margin: 10px; background-color: #eee;'
        this.div.className = "chance";
        var header = document.createElement('h4');
        header.innerHTML = "Chance " + index;
        this.div.appendChild(header);
        this.div.appendChild(this.chance.html());
    }
}

function Bet(amount, chance) {
    balance -= amount;
    if (Math.random() < chance._chance) {
        var gain = amount * (1 + chance._upside);
        balance += gain;
        console.log("gain");
    }
    else {
        var loss = amount * (1 - chance._downside);
        balance += loss;
        console.log("loss");
    }
}


var balance = 10000;
var choices = [];

const container = document.getElementById("chances");


function addToContainer(choice) {
    container.appendChild(choice.div);
}

for (i = 1; i <= 4; i++) {
    chance = new Chance(0.5, 0.22, 0.3);
    choice = new Choice(chance);
    choice.buildHTML(i);
    choices.push(choice);
}

choices.forEach(addToContainer);


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