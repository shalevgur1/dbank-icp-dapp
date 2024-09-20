import './index.scss';
import {dbank_backend as dbank} from "../../declarations/dbank_backend";

window.addEventListener("load", async function() {
    console.log("Finished loading...");
    updateBalanceText();
});

document.querySelector("form").addEventListener("submit", async function(event) {
    event.preventDefault();
    const data = new FormData(event.target);
    const subButton = event.target.querySelector("#submit-btn");

    subButton.setAttribute("disabled", true);

    const topUpAmount = parseFloat(data.get("topUp"));
    const withdrawAmount = parseFloat(data.get("withdraw"));

    if (topUpAmount) {
        await dbank.topUp(topUpAmount);
        event.target.querySelector("#input-amount").value = "";
    } else if (withdrawAmount) {
        await dbank.withdrawl(withdrawAmount);
        event.target.querySelector("#withdrawal-amount").value = "";
    }
        
    updateBalanceText();

    subButton.removeAttribute("disabled");
});

async function updateBalanceText() {
    const currentValue = await dbank.checkBalance();
    document.getElementById("value").innerHTML = currentValue.toFixed(2);
}
