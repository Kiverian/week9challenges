let people = function(){
    let pii ={
        firstName: "John",
        lastName: "Doe",
        SSN: 1113334444,
    }
    return pii.firstName + " " + pii.lastName;
}

const man = people()
console.log(man);