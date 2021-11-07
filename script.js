// First-class increase decrease events handler
document.getElementById('first-class-plus').addEventListener('click', function () {
    updateTicketNumber('first-class', true);
});
document.getElementById('first-class-minus').addEventListener('click', function () {
    updateTicketNumber('first-class', false);
})


// Economy increase decrease events handler
document.getElementById('economy-plus').addEventListener('click', function () {
    updateTicketNumber('economy', true);
});
document.getElementById('economy-minus').addEventListener('click', function () {
    updateTicketNumber('economy', false);
})


//update Ticket Number
function updateTicketNumber(ticket, isIncreasing) {
    const ticketInput = document.getElementById(ticket + '-number');
    let ticketNumber = ticketInput.value;
    if (isIncreasing == true) {
        ticketNumber = parseInt(ticketNumber) + 1;
    }
    else if (ticketNumber > 0) {
        ticketNumber = parseInt(ticketNumber) - 1;
    }
    ticketInput.value = ticketNumber;
    
    calculateTotal();
}


//Get Input Value
function getInputValue(ticket) {
    const ticketInput = document.getElementById(ticket + '-number');
    const ticketNumber = parseInt(ticketInput.value);
    return ticketNumber;
}


//Calculate Price
function calculateTotal() {
    const firstClassTotal = getInputValue('first-class') * 150;
    const economyTotal = getInputValue('economy') * 100;
    const subTotal = firstClassTotal + economyTotal;
    const tax = subTotal / 10;
    const totalPrice = subTotal + tax;

    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('tax-amount').innerText = tax;
    document.getElementById('total-price').innerText = totalPrice;
}
