// document.getElementById("add-money-sec").style.display = "none";
// document.getElementById("cashout-sec").style.display = "none";
// document.getElementById("transer-money-sec").style.display = "none";
// document.getElementById("paybill-sec").style.display = "none";
// document.getElementById("add-money-box").addEventListener("click", function () {
//   document.getElementById("add-money-sec").style.display = "block";
//   document.getElementById("cashout-sec").style.display = "none";
// });

// document.getElementById("cash-out-box").addEventListener("click", function () {
//   document.getElementById("add-money-sec").style.display = "none";
//   document.getElementById("cashout-sec").style.display = "block";
//   document.getElementById("transer-money-sec").style.display = "none";
//   document.getElementById("paybill-sec").style.display = "none";
// });
// document.getElementById("transfer").addEventListener("click", function () {
//   document.getElementById("add-money-sec").style.display = "none";
//   document.getElementById("cashout-sec").style.display = "none";
//   document.getElementById("transer-money-sec").style.display = "block";
//   document.getElementById("paybill-sec").style.display = "none";
// });
// document.getElementById("paybill").addEventListener("click", function () {
//   document.getElementById("add-money-sec").style.display = "none";
//   document.getElementById("cashout-sec").style.display = "none";
//   document.getElementById("transer-money-sec").style.display = "none";
//   document.getElementById("paybill-sec").style.display = "block";
// });
// document.getElementById("add-money-sec").style.display = none;

document.getElementById("add-money-sec").style.display = "none";
document.getElementById("cashout-sec").style.display = "none";
document.getElementById("transer-money-sec").style.display = "none";
document.getElementById("paybill-sec").style.display = "none";

document.getElementById("add-money-box").addEventListener("click", function () {
  toggleDisplay("add-money-sec", "block");
  toggleDisplay("cashout-sec", "none");
  toggleDisplay("transer-money-sec", "none");
  toggleDisplay("paybill-sec", "none");
  toggleDisplay("select", "none");
});

document.getElementById("cash-out-box").addEventListener("click", function () {
  toggleDisplay("add-money-sec", "none");
  toggleDisplay("cashout-sec", "block");
  toggleDisplay("transer-money-sec", "none");
  toggleDisplay("paybill-sec", "none");
  toggleDisplay("select", "none");
});
document.getElementById("transfer").addEventListener("click", function () {
  toggleDisplay("add-money-sec", "none");
  toggleDisplay("cashout-sec", "none");
  toggleDisplay("transer-money-sec", "block");
  toggleDisplay("paybill-sec", "none");
  toggleDisplay("select", "none");
});
document.getElementById("paybill").addEventListener("click", function () {
  toggleDisplay("add-money-sec", "none");
  toggleDisplay("cashout-sec", "none");
  toggleDisplay("transer-money-sec", "none");
  toggleDisplay("paybill-sec", "block");
  toggleDisplay("select", "none");
});
