document.getElementById("cashout-sec").style.display = "none";
document.getElementById("transer-money-sec").style.display = "none";
document.getElementById("paybill-sec").style.display = "none";
document.getElementById("add-money-box").addEventListener("click", function () {
  document.getElementById("add-money-sec").style.display = "block";
});

document.getElementById("cash-out-box").addEventListener("click", function () {
  document.getElementById("add-money-sec").style.display = "none";
  document.getElementById("cashout-sec").style.display = "block";
  document.getElementById("transer-money-sec").style.display = "none";
  document.getElementById("paybill-sec").style.display = "none";
});
document.getElementById("transfer").addEventListener("click", function () {
  document.getElementById("add-money-sec").style.display = "none";
  document.getElementById("cashout-sec").style.display = "none";
  document.getElementById("transer-money-sec").style.display = "block";
  document.getElementById("paybill-sec").style.display = "none";
});
document.getElementById("paybill").addEventListener("click", function () {
  document.getElementById("add-money-sec").style.display = "none";
  document.getElementById("cashout-sec").style.display = "none";
  document.getElementById("transer-money-sec").style.display = "none";
  document.getElementById("paybill-sec").style.display = "block";
});
