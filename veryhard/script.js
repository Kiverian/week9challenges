function Person (name, job ,age) {
    this.job = job;
    this.name = name;  //"this" is referring to whatever the named parameter is set to which would be the name  
    // this.job = job;
    this.age =  age;
    this.exercise= function() {
       console.log("Let's run a 4k")
    }
    this.fetchJob = function (){
       console.log (this.name + " is a " + this.job) // calls the variables "this" under the first function 
    }

    // this.fetchAge = function(){
    //     console.log(this.name + " is " + this.age + " years old ");
    }


var kenny = new Person ('kenny', 'doctor', 29) //specifically calling the name; everything on line 14 can be used to call from the first function
kenny.exercise()// calling the function from line 6

kenny.fetchJob() //calling the function from line 10

// kenny.fetchAge()

var another = new Person ("kp", "developer", 22)
another.exercise();

function Programmer(name, job, age, languages) {
    Person.call(this, name,job,age);
    this.languages= languages;
    this.busy=true;
    this.completeTask= function() {
        this.busy=false;
    }
    this.acceptNewTask= function() {
        this.busy = true
    }

    this.offerNewTask= function (){
        if(this.busy==true){
            console.log("Im busy right now");
        } else console.log("Right away!");
    }

    this.learnLanguage= function (language){
        this.languages.push(language)
    }
    this.listLanguages= function(){
        console.log(this.languages);
    }
}

var Bart = new Programmer('Bart', 'doctor', 35, ["javascript", "java", "ruby"])
Bart.completeTask()
console.log(Bart.busy)
Bart.offerNewTask()
Bart.acceptNewTask()

console.log(Bart.busy);
Bart.offerNewTask()
Bart.learnLanguage("HTML")
Bart.listLanguages()
