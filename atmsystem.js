let acc = "09627480198"; //Account number
let acc_pass = "082865"; // Account pin
let money_balance = 15500; //Declared balance

function login(){ // Login function prompts the user to log in their acc num and acc password
    let acc_auth = prompt ("Please enter your account number")
    let inp_pass = prompt ("Please enter your password")

    if (acc_auth === acc && inp_pass === acc_pass){ //Validates the input of the users if it match to the declared account number and account password. If it match, menu function will be executed.
        alert("Login Success")
        me_menu()
    }else{
        alert("Invalid account number or password. \nPlease try again") //If it doesn't mathch, it will alert the user and repeate the process again
        login()
    }
}

function me_menu(){// Once login is complete me_menu function is executed, prompting the user to choose an operation.
    let ops = prompt("1. Balance Inquiry \n2. Withdraw Cash \n3. Cancel Transaction \nPlease input the number of choice")
    
    if (ops === "1"){ //if the user inputs 1, then the balance function is executed.
        balance();
    }else if (ops === "2"){//if the user inputs 2, then the withdraws function is executed
        withdraws()
    }else{ //if the user inputs 3, then the program will be terminated
        return;
    }
}


function balance(){//Once the user inputs 1, this will be executed, displaying the balance of the user through alerts
    alert (money_balance) //Shows the current balance of the user
    more_transac()//After showing the balance, this function executed asking user to make another transactions
}

function withdraws(){//If the user inputs 2, this will be executed
    let m_withdraw = parseInt(prompt("Enter the amount to withdraw: "))//Asks user the amount of money they want to withdraw
    if (m_withdraw <= money_balance) { //checks if the money they want to withdraw is less than or equal to the balance
        alert("Wait. Processing......"); //If true, the program will process
        let original_balance = money_balance; //this lets original_balance be the money_balance, which stores its value

        money_balance -= m_withdraw ;//this subtracts the money balance with the m_withdraw then assigns or updates the money balance value.
        //For example if 15500 is subtracted by 1000, then the new value of money balance is 14500 which then assigned to the variable changing the original value which is 15500. 
        //It can be seen changed if you choose the balance inquiry operation after the withdraw.

        console.log("original balance",original_balance); //logs the original balance before the withdraw
        console.log("withdrawn amount",m_withdraw)//logs the money they withdraw
        console.log("new balance",money_balance);//logs the new balance
        more_transac();//asks the user if they want a new transaction again

    }else {
        alert("Insufficient funds, please try check your balance before proceeding.\nRe-running the program.") //if the money they want to withdraw is greater than the balance, this alert will be executed
        me_menu();//returns to the menu after the message
    }

}



function more_transac(){//This function is used to ask the user if they want anoter transaction in this program
    let choice = prompt("Would you like to have another transaction? (yes/no)").toLowerCase();//Prompts the user if they want to have another transaction with two possible answer yes/no, converted to the lowercase key to be more precise in checking the input.
    
    switch(choice){ //A switch statement where...
        case "yes": //case 1 if the user typed yes, then it will return the user to the menu of the program and choose a new operation
            me_menu();
        case "no": //case 2 if the user typed no, then it will terminate the program
            alert("Thank you for your transaction. Closing the program......")
            return;
        default: // default case if the user typed an invalid option.
            alert("Invalid choice");
    }
}

login();//Calling the function login which then starts the whole program