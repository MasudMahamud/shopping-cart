function handleProductChange(product,increase){
    const productInput = document.getElementById(product + '-count');
    const productCount = parseInt(productInput.value);
    let productNewCount = productCount;
    if(increase == true){
        productNewCount = productCount + 1;
    }
    if (increase == false && productCount>0) {
        productNewCount = productCount - 1;
    }
    productInput.value = productNewCount;
    let productTotal = 0;
    if (product == 'phone') {
        productTotal = productNewCount * 999;
    }
    if (product == 'case') {
        productTotal = productNewCount * 49;
    }
    document.getElementById(product + '-price').innerText ='$' + productTotal; 
    calculateMainPrice();
}

function calculateMainPrice(){
    const phoneCount = getInputValue('phone');
    const caseCount = getInputValue('case');
    

    const mainPrice = phoneCount * 999 + caseCount * 49;
    document.getElementById('main-price').innerText ='$' + mainPrice;

    const tax = Math.round(mainPrice / 100 * 5);

    document.getElementById("tax-price").innerText = "$" + tax;

    const totalPrice = mainPrice + tax;
    document.getElementById("total-price").innerText ="$" + totalPrice;
}

function getInputValue(product){
    const productInput = document.getElementById(product +'-count');
    const productCount = parseInt(productInput.value);
    return productCount;
}
// function handleProductChange(increase){
//     const caseInput = document.getElementById("case-count");
//     const caseCount = parseInt(caseInput.value);
//     let caseNewCount = caseCount;
//     if(increase == true){
//         caseNewCount = caseCount + 1;
//     }
//     if (increase == false && caseCount>0) {
//         caseNewCount = caseCount - 1;
//     }
//     caseInput.value = caseNewCount;
//     document.getElementById("phone-price").innerText;
//     const newPrice = caseNewCount * 999;
//     document.getElementById("phone-price").innerText ='$' + newPrice;
// }

// function handleCaseChange(increase) {
//     const caseInput = document.getElementById("case-count-case");
//     const caseCount = parseInt(caseInput.value);
//     let caseNewCount = caseCount;
//     if (increase == true) {
//         caseNewCount = caseCount + 1;
//     }
//     if (increase == false && caseCount>0) {
//         caseNewCount = caseCount - 1;
//     }
//     caseInput.value = caseNewCount;
//     document.getElementById("case-price").innerText;
//     const newPrice = caseNewCount* 50;
//     document.getElementById("case-price").innerText ='$' + newPrice;
// }
// document.getElementById("price-increase").addEventListener("click", function(){
//     const caseInput = document.getElementById("case-count");
//     const caseCount = parseInt(caseInput.value);
//     const caseNewCount = caseCount + 1;
//     caseInput.value = caseNewCount;

//     document.getElementById("phone-price").innerText;
//     const newPrice = caseNewCount * 1200;
//     document.getElementById("phone-price").innerText ='$' + newPrice;
// })

// document.getElementById("price-decrease").addEventListener("click",function(){
//     const caseInput = document.getElementById("case-count");
//     const caseCount = parseInt(caseInput.value);
//     const caseNewCount = caseCount - 1;
//     caseInput.value = caseNewCount;

//     document.getElementById("phone-price").innerText;
//     const newPrice = caseNewCount * 1200;
//     document.getElementById("phone-price").innerText ='$' + newPrice;
// })

// document.getElementById("case-increase").addEventListener("click", function(){
//     const caseInput = document.getElementById("case-count-case");
//     const caseCount = parseInt(caseInput.value);
//     const caseNewCount = caseCount + 1;
//     caseInput.value = caseNewCount;

//      document.getElementById("case-price").innerText;
//     const newCasePrice = caseNewCount * 50;
//     document.getElementById("case-price").innerText ='$' + newCasePrice;
// })


// document.getElementById("case-decrease").addEventListener("click",function(){
//     const caseInput = document.getElementById("case-count-case");
//     const caseCount = parseInt(caseInput.value);
//     const caseNewCount = caseCount - 1;
//     caseInput.value = caseNewCount;

//     document.getElementById("case-price").innerText;
//     const newPrice = caseNewCount* 50;
//     document.getElementById("case-price").innerText ='$' + newPrice;
// })