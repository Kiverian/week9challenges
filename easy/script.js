function exercise (typeofexercise){
    function getMessage(){
        return `Today's exercise' : ${typeofexercise}`;
    }
    return getMessage
}

var run = exercise('Running')
console.log(run());

var swim = exercise('Swimming')
console.log(swim());
