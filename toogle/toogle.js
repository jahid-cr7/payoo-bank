document.getElementById("cashout-sec").style.display = "none";
document.getElementById("add-money-box").addEventListener("click", function () {
  document.getElementById("add-money-sec").style.display = "block";
});

document.getElementById("cash-out-box").addEventListener("click", function () {
  document.getElementById("add-money-sec").style.display = "none";
  document.getElementById("cashout-sec").style.display = "block";
});
