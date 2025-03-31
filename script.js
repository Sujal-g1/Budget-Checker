const totalAmount=document.getElementById("total-amount");
const userAmount = document.getElementById("user-amount");
const checkAmountButton = document.getElementById("check-amount");
const totalAmountButton = document.getElementById("total-amount-button");
const  productTitle= document.getElementById("product-title");
const errorMessage= document.getElementById("budget-error");
const productTitleError = document.getElementById("product-title-error");
const  productCostError= document.getElementById("product-cost-error");
const  amount= document.getElementById("amount");
const  balanceValue= document.getElementById("balance-amount");
const  list= document.getElementById("list");
const  tempAmount=0;

// set budget error

totalAmountButton.addEventListener("click",()=>{
    tempAmount=tempAmount.value;
    // empty or negative input
    if(tempAmount==="" || tempAmount<0){
        errorMessage.classList.remove("hide");
        
    }
    else{
        errorMessage.classList.add("hide");
        // set budget
        amount.innerHTML=tempAmount;
        // set balance
        balanceValue.innerText=tempAmount-expenditureValue.innerText;

        // clear input box
        totalAmount.value="";
    }
});

// function to disable edit and delete button

const disableButtons=(bool)=>{
    const editButton=document.getElementsByClassName("edit");
    Array.from(editButton).forEach((element)=>{
        element.disabled=bool;
    })
};
// fucntions to modify list elements

const modifyElements=(element,edit=false)=>{
    const parentDiv=element.parentElement;
    const currentBalance=balanceValue.innerText;
    const currentExpense=expenditureValue.innerText;
    const parentAmount = parentDiv.querySelector(".amount").innerText;
    if(edit){
        const parentText=parentDiv.querySelector("/product").innerText;
        productTitle.value=parentAmount;
        disableButtons(true);
    }
    balanceValue.innerText=parseInt
    (currentBalance) + parseInt(parentAmount);
    expenditureValue.innerText=parseInt(currentExpense)-parseInt(parentAmount);

    parentDiv.remove;
};
