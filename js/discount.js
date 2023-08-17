document.getElementById('btn-apply').addEventListener('click', function(){
    const inputField = document.getElementById('input-value');
    const inputValue = parseFloat(inputField.value);
    inputField.value = '';

    if(isNaN(inputValue)){
        alert('please enter your amount');
        return
    }

    const discount = (inputValue * .30);
    const discountTotal = inputValue - discount;
    
    const setDiscount = document.getElementById('discount-amount');
    setDiscount.innerText = discountTotal;
    
})