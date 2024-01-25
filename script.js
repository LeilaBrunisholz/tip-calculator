function calculateAndDisplay() {
    // Get the input values from our HTML forms
    let bill = parseFloat(document.getElementById('totalBill').value)
    let numOfPpl = parseInt(document.getElementById('numOfPeople').value)
    let serviceQuality = document.getElementById('serviceQuality').value
  
  
    // Calculate tip, total bill, and amount per person using helper functions
    let tip = calculateTip(bill, serviceQuality)
    let totalBill = calculateTotalBill(bill, tip)
    let amtPerPers = calculateAmtPerPers(totalBill, numOfPpl)
  
    // Display the results in the HTML document
    document.getElementById('tipResult').innerText = 'Tip: $' + tip.toFixed(2)
    document.getElementById('totalBillResult').innerText =
      'Total Bill: $' + totalBill.toFixed(2)
    document.getElementById('amtPerPersonResult').innerText =
      'Amount per person: $' + amtPerPers.toFixed(2)
  }
  
  //Helper Function to calculate Tip based on the bill and service Quality
  function calculateTip(bill, quality) {
    if (quality === 'Great') {
      return bill * 0.2
    } else if (quality === 'Good') {
      return bill * 0.15
    } else if (quality === 'Poor') {
      return bill * 0.1
    } else {
      return 0
    }
  }
  
  // Helper function to calculate total bill by adding the original bill and tip
  function calculateTotalBill(bill, tip) {
    return bill + tip
  }
  
  // Helper function to calculate amount per person by dividing total bill by the number of people
  function calculateAmtPerPers(totalBill, numOfPpl) {
    return totalBill / numOfPpl
  }