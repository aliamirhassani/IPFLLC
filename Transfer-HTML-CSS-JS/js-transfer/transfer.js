function savingToChecking(){
    let savingBalance = 5000.00;
    let transferAmount = prompt("Transfer Amount: (Enter positive number)");

    while(transferAmount < 0 || transferAmount > savingBalance){
        console.log("Please Enter correct input");
        let transferAmount = prompt("Transfer Amount: (Enter positive number)");
    }
    
    console.log("Saving Amount test: " + (savingBalance += transferAmount));
    console.log("Saving function check"); 

}

function checkingToSaving(){
    let checkingBalance = 2000.00;
    let transferAmount = prompt("Transfer Amount: (Enter positive number)");

    while(transferAmount < 0 || transferAmount > checkingBalance){
        alert("Please Enter correct input");
        let transferAmount = prompt("Transfer Amount: (Enter positive number)");
    }
    checkingBalance += transferAmount;
    alert("checking Amount test: " + checkingBalance);
    alert("checking function check");
}









/* console.log("Checking Balance: $" + checkingBalance);
console.log("Saving Balance: $" + savingBalance); */


let accountType = prompt("Transfer from: (Enter 1 for saving and 2 for checking)");

//console.log(accountType);

while(accountType < 1 || accountType > 2){
    console.log("Please Enter correct input");
    let accountType = prompt("Transfer from: (Enter 1 for saving and 2 for checking)");
}
//alert("Account type " + accountType);

if (accountType = 1){
    savingToChecking();
}else if(accountType = 2) {
   checkingToSaving();
}



    




//node transfer.js
