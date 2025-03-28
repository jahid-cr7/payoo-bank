// document.getElementById("add-btn").addEventListener("click", function (events) {
//   events.preventDefault();
//   const amount = document.getElementById("amount").value;
//   const convertedAmount = parseFloat(amount);

//   const pin = document.getElementById("pin").value;
//   const changedPin = parseInt(pin);

//   const mainBalance = document.getElementById("main-balance").innerText;
//   const convertedBalance = parseFloat(mainBalance);

//   if (changedPin === 1234) {
//     const sum = convertedBalance + convertedAmount;
//     document.getElementById("main-balance").innerText = sum;
//   } else {
//     console.log("Invalid Acoount Number And Pin");
//   }
// });
// document.getElementById("log-out").addEventListener("click", function () {
//   console.log("Logout button clicked!"); // ✅ Works correctly
//   window.location.href= './index.html'
// });

// ✅ Works correctly
// Convinient way to get value from input field

document.getElementById("add-btn").addEventListener("click", function () {
  const amount = getvalueByID("amount");
  const pin = getvalueByID("pin");
  const account = document.getElementById("acc-no").value;

  const mainBalance = getInnerTextByID("main-balance");
  console.log(mainBalance);
  if (account.length === 11) {
    if (pin === 1234) {
      const sum = amount + mainBalance;
      setInnerTextByID("main-balance", sum);
      const transectionContainer = document.getElementById("transection-cont");
      const p = document.createElement("p");
      p.innerText = `
      BDT ${amount} added from ${account} number.
      `;
      transectionContainer.appendChild(p);
    } else {
      console.log("Wrong Password");
    }
  } else {
    console.log("Wrong Account Number");
  }

  // console.log(amount, pin, mainBalance);
});

