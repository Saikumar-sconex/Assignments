
class Employee {
    constructor(empId,fullName,salary,mobile,mailId){
        this.empId = empId;
        this.fullName = fullName;
        this.salary = salary;
        this.mobile = mobile;
        this.mailId = mailId;
    }
}

const sort = (emps,fieldName) => {
    let n = emps.length;

    for(let i=0;i<n-1;i++)
    {
        minIndex = i;
        for(let j=i+1;j<n;j++)
        {
            if(emps[j][fieldName] < emps[minIndex][fieldName])
            {
                minIndex = j;
            }
        }

        if(minIndex != i)
        {
            let temp = emps[i];
            emps[i] = emps[minIndex];
            emps[minIndex] = temp;
        }
    }
    return emps;
}

let employees = [
    new Employee(101,"saikumar",45000,9988776600,"sai@gmail.com"),
    new Employee(102,"sampath",65000,9974123600,"sampath@gmail.com"),
    new Employee(103,"prakash",40000,9696852100,"prakash@gmail.com"),
    new Employee(104,"adithya",20000,8874123600,"adithya@gmail.com"),
    new Employee(105,"jagadeesh",70000,7414412500,"jagadeesh@gmail.com")
]

let sortedOnSal = sort(employees,"salary");
console.log("sorted employeees based on salary");

sortedOnSal.forEach(element => {
    console.log(`${element.fullName} : ${element.salary}`);
});

console.log();

let sortedOnUn = sort(employees,"fullName");
console.log("Sorted employees based on fullName");

sortedOnUn.forEach(element => console.log(`${element.fullName} : ${element.salary}`));

