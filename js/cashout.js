document.getElementById("cashout-btn"),
  addEventListener("click", function (event) {
    event.preventDefault();
    const phoneNumber = document.getElementById("phone-number").value;
    const cashOutAmount = getvalueByID("cashout-amount");
    const pinNumber = getvalueByID("cashout-pin");

    const mainBalance = getInnerTextByID("main-balance");

    if (phoneNumber.length === 11) {
      if (pinNumber === 1234) {
        const addition = mainBalance - cashOutAmount;
        setInnerTextByID("main-balance", addition);
      } else {
      }
    } else {
    }
  });
const transectionContainer = document.getElementById("transection-cont");
const p = document.createElement("p");
p.innerText = `
      BDT ${cashOutAmount} Cash Out to ${phoneNumber} number.
      `;
transectionContainer.appendChild(p);
