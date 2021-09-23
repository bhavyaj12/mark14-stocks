const initPrice = document.querySelector("#init-price");
const stocksQuantity = document.querySelector("#quantity-stocks");
const currPrice = document.querySelector("#curr-price");
const checkBtn = document.querySelector("#check-btn");
const outputBox = document.querySelector("#output");

function calculateProfitAndLoss(initial, quantity, current) {
    if(current > initial) {
        var profit = (current - initial) * quantity;
        var profitPerc = Math.round((profit/initial) * 100);
        showOutput("🤑 Profit = " + profit + " 🤑 \n" + "🤑 Profit Percentage = " + profitPerc + "% 🤑", "PROFIT");
    } else if(current < initial) {
        var loss = (initial - current) * quantity;
        var lossPerc = Math.round((loss/initial) * 100);

        showOutput("😰 Loss = " + loss + " 😰 \n" + "😰 Loss Percentage = " + lossPerc + "% 😰", "LOSS");
    } else {
        showOutput("👍🏻 No pain no gain and no gain no pain, you neither made any profit nor any loss 👍🏻", "EQUAL");
    }

}

function clickHandler() {
    var ip = Number(initPrice.value);
    var qty = Number(stocksQuantity.value);
    var currp = Number(currPrice.value);

    if(ip <= 0 || qty <= 0 || currp <= 0) {
        outputBox.style.color = "red";
        showOutput("Any of these values cannot be negative or zero, please recheck and enter again", "ERROR");
    } else {
        calculateProfitAndLoss(ip, qty, currp);
    }
    
}

function showOutput(msg, status) {
    switch (status) {
        case "PROFIT":
            outputBox.style.color = "green";
            outputBox.innerText = msg;
            break;

        case "LOSS":
            outputBox.style.color = "red"; 
            outputBox.innerText = msg;
            break;

        case "EQUAL":
            outputBox.innerText = msg;
            break;

        case "ERROR":
            outputBox.style.color = "red"; 
            outputBox.innerText = msg;
            break;
        default:
            break;
    }
    
}

checkBtn.addEventListener("click", clickHandler);