/* 
Cosas a cumplir en la entrega
1- entrada mediante prompt
2- variables
3- algún condicional (if/switch)
4- algún ciclo (for, while, do while)
5- una función
6- salida mediante alert o consola
*/

let product1 = "Hard Wax 5 lbs.";
let product2 = "Post-Depilatory Gel";
let product3 = "Pre-Depilatory Cleansing Lotion";

let priceProduct1 = 89;
let priceProduct2 = 15;
let priceProduct3 = 17;

alert("Congratulations! You selected 3 products to your cart, there is only a few steps left:")

function subtotalPrice (amount, price){
    return amount * price;
}


//****** Prices section

amountProduct1 = prompt("Enter the amount you want to buy of: " + product1);
subtotalPrice1 = subtotalPrice (amountProduct1, priceProduct1);
alert("Subtotal of " + product1 + " = $" + subtotalPrice1);

amountProduct2 = prompt("Enter the amount you want to buy of: " + product2);
subtotalPrice2 = subtotalPrice (amountProduct2, priceProduct2);
alert("Subtotal of " + product2 + " = $" + subtotalPrice2);

amountProduct3 = prompt("Enter the amount you want to buy of: " + product3);
subtotalPrice3 = subtotalPrice (amountProduct3, priceProduct3);
alert("Subtotal of " + product3 + " = $" + subtotalPrice3);

totalPrice = subtotalPrice1 + amountProduct2 + amountProduct3;

//****** Payment section

paymentType = parseInt(prompt("Enter: (1) if you will pay by Credit Card or (2) if you will pay with a Debit Card"));

switch (paymentType) {

    case 1:
        alert("The surcharge for paying with Credit Card is 5%");
        totalPrice = totalPrice * 1.05
        alert("Your final price is $" + totalPrice);
        break;

    case 2:
        alert("You will not have surcharges for the payment method")
        alert("Your final price is $" + totalPrice);
        break;

    default:
        alert("You entered an invalid option");
        do {
            paymentType = parseInt(prompt("Enter: (1) if you will pay by Credit Card or (2) if you will pay with a Debit Card"));
        } while (paymentType !== 1 && paymentType !== 2) {
            
            if (paymentType == 1) {
                alert("The surcharge for paying with Credit Card is 5%");
                totalPrice = totalPrice * 1.05
                alert("Your final price is $" + totalPrice);
                break;
            } else if (paymentType == 2) {
                alert("You will not have surcharges for the payment method")
                alert("Your final price is $" + totalPrice);
                break;
            }
        }
}