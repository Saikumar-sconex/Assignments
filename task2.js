
var txns = [
    {id:1, header:"Salary", tnxType:"CREDIT", txnDate: new Date("2025-01-01"), amount: 75000},
    {id:2, header:"Bonus", tnxType:"CREDIT", txnDate: new Date("2025-01-03"), amount: 10000},
    {id:3, header:"Mobile recharge", tnxType:"DEBIT", txnDate: new Date("2025-01-04"), amount: 100},
    {id:4, header:"Fuel", tnxType:"DEBIT", txnDate: new Date("2025-01-02"), amount: 1000},
    {id:5, header:"Dining", tnxType:"DEBIT", txnDate: new Date("2025-01-05"), amount: 500},
    {id:6, header:"Fuel", tnxType:"DEBIT", txnDate: new Date("2025-01-01"), amount: 500},
    {id:7, header:"CarEMI", tnxType:"DEBIT", txnDate: new Date("2025-01-17"), amount: 5000},
    {id:8, header:"FlatEMI", tnxType:"DEBIT", txnDate: new Date("2025-01-23"), amount: 15000},
    {id:9, header:"Fuel", tnxType:"DEBIT", txnDate: new Date("2025-01-25"), amount: 500},
    {id:10, header:"Groceries", tnxType:"DEBIT", txnDate: new Date("2025-01-19"), amount: 2000}

];

// Function for total credit
const totalCredit = () => {
    let sum = 0;
    for(let i=0;i<txns.length;i++)
    {
        if(txns[i].tnxType =="CREDIT")
        {
            sum += txns[i].amount;
        }
    }

    return sum;
}

console.log(`Total credit: ${totalCredit()}`);


// Function for total debit
const totalDebit = () => {
    let sum = 0;

    for(let i=0;i<txns.length;i++)
    {
        if(txns[i].tnxType == "DEBIT")
        {
            sum += txns[i].amount;
        }
    }

    return sum;
}

console.log(`Total debit: ${totalDebit()}`);


// Function for spent on fuel
const totalSpentOnFuel = () =>{
    let sum = 0;

    for(let i=0;i<txns.length;i++)
    {
        if(txns[i].header == "Fuel")
        {
            sum += txns[i].amount;
        }
    }

    return sum;
}

console.log(`Total spent on Fuel: ${totalSpentOnFuel()}`);

// Function for spent on each date
const totalSpentOnEachDate = () => {
    let sum = 0;

    for(let i=0;i<txns.length;i++)
    {
        if(txns[i].tnxType == "DEBIT")
        {
            console.log(`${txns[i].txnDate} : ${txns[i].amount}`);
        }
    }
}

totalSpentOnEachDate();


// Function for spent on any type of EMI'S
const totalSpentOnAnyEmi = () => {
    let sum = 0;

    for(let i=0;i<txns.length;i++){

        if(txns[i].header == "CarEMI" | txns[i].header == "FlatEMI")
        {
            if(txns[i].tnxType == "DEBIT")
            {
                sum += txns[i].amount;
            }
        }
    }

    return sum;
}

console.log(`total spent on EMI's: ${totalSpentOnAnyEmi()}`);