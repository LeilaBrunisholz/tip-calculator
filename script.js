//Function to Calc and display Tip, Total bill and amount per person


  function calculateAndDisplay() {
      // Get the values from the HTML form
      let bill = parseFloat(document.getElementById('totalBill').value)
      let numOfPpl = parseInt(document.getElementById('numOfPeople').value)
      let serviceQuality = document.getElementById('serviceQuality').value
  
      //Calculate tip, total Bill and the Amount each person owes
      let tip = calculateTip(bill, serviceQuality)
      let totalBill = calculateTotalBill(bill, tip)
      let amtPerPers = calcAmtPerPers(totalBill, numOfPpl)
  
      //Display the Results in the HTML
      document.getElementById('tipResult').innerText = 'Tip: $' + tip.toFixed(2)
      document.getElementById('totalBillResult').innerText =
          'Total Bill: $' + totalBill.toFixed(2)
      document.getElementById('amtPerPersonResult').innerText =
          'Amount per person: $' + amtPerPers.toFixed(2)
  
  }
///helper function
  function calculateTip(bill, quality){
    if (quality === 'Great'){
      return bill*.2
    } else if (quality === 'Good'){
      return bill *.15
    } else if (quality === 'Poor'){
      return bill *.10
    }
  }

  function  calculateTotalBill(bill, tip){
   return bill+tip
  }

  function calcAmtPerPers(totalBill, numOfPeople){
    return totalBill/numOfPeople
  }
