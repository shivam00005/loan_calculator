document.getElementById("loan-form").addEventListener('submit', function(e){
  //hide result
  document.querySelector('.result').style.display='none';
  
  //show loader
  document.querySelector('.loader').style.display='block';
  
  setTimeout(calculateresults , 200);
  
  e.preventDefault();
});

// function for all UI

function calculateresults(){
  
  //ALL UI ELEMENT
  
  const amount = document.getElementById("loan-amount");
  const interest = document.getElementById("loan-interest");
  const years = document.getElementById("repay-loan");
  const totalrepayamout = document.getElementById("repay-amount");
  const totalrepayinterest = document.getElementById("total-repay-interest");
  const monthlypayment = document.getElementById("monthly-payment");
  
  //adding calculater values
  const principle=parseFloat(amount.value);
  const calculatedinterest=parseFloat(interest.value)/100/12;
  const calculatedpayment=parseFloat(years.value)*12;
  
  //monthly-payment compute
  
  const x=Math.pow(1+calculatedinterest,calculatedpayment);
  
  const monthly = (principle*x*calculatedinterest)/(x-1);
  
  if(isFinite(monthly)){
     monthlypayment.value=monthly.toFixed(2);
     totalrepayamout.value=(monthly * calculatedpayment).toFixed(2);
     totalrepayinterest.value=((monthly * calculatedpayment) - principle).toFixed(2);
    
    //show result
  document.querySelector('.result').style.display='block';
  
  //HIDE loader
  document.querySelector('.loader').style.display='none';
  
 
  }else{
    
    showError('Please Check Your Numbers');
  }
  
  
}

function showError(error){
  //hide result
  document.querySelector('.result').style.display='none';
  
  //hide loader
  document.querySelector('.loader').style.display='none';
  

  
  //create an error div
  const errorDIV =document.createElement('div');
 
//  adding class to errordiv 
    errorDIV.className='alert alert-danger';
    
 // grabing card aned heading element 
 
 const card = document.querySelector('.card');
 const heading = document.querySelector('.heading');
 
 // add text and append to div
 errorDIV.appendChild(document.createTextNode(error));
 
 // insert errorDIV
card.insertBefore(errorDIV , heading);

//setTimeout(function() {}, 10);imeout
setTimeout(clearError,3000);
}
function clearError(){
  document.querySelector('.alert').remove();
}