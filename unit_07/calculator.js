
function fivePercent() {
    let billAmount = document.getElementById("billamt").value;
    let total = (billAmount * 0.05);
    total = Math.round(total * 100) / 100;
    total = total.toFixed(2);
    document.getElementById("tip").innerHTML = "£" + total;
  
  }
  function tenPercent() {
    let billAmount = document.getElementById("billamt").value;
    let total = (billAmount * 0.10);
    total = Math.round(total * 100) / 100;
    total = total.toFixed(2);
    document.getElementById("tip").innerHTML = "£" + total;
  
  }

  function twentyFivePercent() {
    let billAmount = document.getElementById("billamt").value;
    let total = (billAmount * 0.25);
    total = Math.round(total * 100) / 100;
    total = total.toFixed(2);
    document.getElementById("tip").innerHTML = "£" + total;
  
  }function twoPoundPlusTwo() {
    let billAmount = document.getElementById("billamt").value;
    let total = (billAmount * 0.10) + 2;
    total = Math.round(total * 100) / 100;
    total = total.toFixed(2);
    document.getElementById("tip").innerHTML ="£" + total;
  
  }