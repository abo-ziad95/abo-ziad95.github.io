document.getElementById('loan-form').addEventListener('submit', function(e){
  e.preventDefault()
  document.querySelector('#loading').style.display = 'block'
  document.querySelector('#results').style.display = 'none'
  
  setTimeout(calculating, 1500)

});

function calculating () {

  const amount = document.getElementById('amount')
  const interest = document.getElementById('interest')
  const yrars = document.getElementById('yrars')
  const mPayment = document.getElementById('monthly-payment')
  const tPayment = document.getElementById('total-payment')
  const tInterest = document.getElementById('total-interest')

  const prins = parseFloat(amount.value)
  const calcIntrest = parseFloat(interest.value) / 100 / 12;
  const calcPayment = parseFloat(yrars.value) * 12;

  const x = Math.pow(1 + calcIntrest , calcPayment)
  const monthly = (prins*x*calcIntrest)/(x-1)

  if (isFinite(monthly)) {
    document.querySelector('#loading').style.display = 'none'
    document.querySelector('#results').style.display = 'block'
    mPayment.value = monthly.toFixed(2)
    tPayment.value = (monthly * calcPayment).toFixed(2)
    tInterest.value = ((monthly * calcPayment) - prins).toFixed(2)
  }else {
    showError('please check your numbers')
  }

}

function  showError (error) {

 document.querySelector('#loading').style.display = 'none'
 document.querySelector('#results').style.display = 'none'
 const errorDiv = document.createElement('div')
 const card = document.querySelector('.card')
 const heading = document.querySelector('.heading')

 errorDiv.className = 'alert alert-danger'
 errorDiv.appendChild(document.createTextNode(error))
 
 card.insertBefore(errorDiv, heading)

 setTimeout(function(){
  document.querySelector('.alert').remove()
}, 4000)
}