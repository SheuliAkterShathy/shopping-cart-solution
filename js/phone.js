function updatePhoneNumber(isIncrease){
    const phoneNumberField = document.getElementById('phn-number-field');
    const phoneNumberString = phoneNumberField.value;
    const previousPhoneNumber = parseInt(phoneNumberString);

    let newPhoneNumber; 
    if(isIncrease===true){
        newPhoneNumber = previousPhoneNumber + 1
    }
    else{
        newPhoneNumber = previousPhoneNumber - 1
    }

    phoneNumberField.value =newPhoneNumber;
    return newPhoneNumber;
}
function updatePhoneTotalPrice(newPhoneNumber){
    const phoneTotalPrice = newPhoneNumber * 1219;
    const phoneTotalElement = document.getElementById('phone-total');
    phoneTotalElement.innerText=phoneTotalPrice;
}




// add addEventListener
document.getElementById('phone-btn-plus').addEventListener('click',function(){
  const newPhoneNumber= updatePhoneNumber(true);
  updatePhoneTotalPrice(newPhoneNumber);
  calculateSubTotal()

  });



document.getElementById('phone-btn-minus').addEventListener('click',function(){
    const newPhoneNumber = updatePhoneNumber(false);
    updatePhoneTotalPrice(newPhoneNumber);
    calculateSubTotal()
});