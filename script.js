// inputs
let initialDeposit = document.getElementById('initial-deposit');
let monthlyDeposit = document.getElementById('monthly-deposit');
let interestRate = document.getElementById('interest-rate');
let lengthOfSaving = document.getElementById('length-of-saving');


// numbers from input
let initialDepositNum, monthlyDepositNum, interestRateNum, 
lengthOfSavingNum;
//button
const button = document.querySelector('.button');
let result;

// result in czhech crown
let totalSaved = document.querySelector('.total-saved');

// hidden text 
let hiddenText = document.querySelector('.warning-text');

// hidden headline
let hiddeHeadline = document.querySelector('.hidden-headline');


// listeners 
initialDeposit.addEventListener('input', function(event){
    initialDepositNum =  event.target.value;
});

monthlyDeposit.addEventListener('input', function(event){
    monthlyDepositNum =  event.target.value;

});

interestRate.addEventListener('input', function(event){
    interestRateNum =  event.target.value;
});

lengthOfSaving.addEventListener('input', function(event){
    lengthOfSavingNum =  event.target.value;
});


// button listneres
button.addEventListener('click', function(event){

    event.preventDefault();
        // calculation of annual interest
        result = (parseInt(initialDepositNum) + (parseInt(monthlyDepositNum) *12)) * ((parseInt(interestRateNum) /100) + 1) ;

    // the result of each additional compound interest 
    for (let i = 1; i < lengthOfSavingNum; i++) {
         
         result *=  (parseInt(interestRateNum)/100) + 1;
         result += (parseInt(monthlyDepositNum) *12);
         
         
        
    }
    //listing the result
    totalSaved.textContent = Math.ceil(result) + " Kč";

    // listing hidden text
    hiddenText.style.display = "block";

    //listing a hidden subtitle
    hiddeHeadline.style.display = "block";
    
});



