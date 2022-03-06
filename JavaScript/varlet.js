// function <nameOfFunction>(<>)

function testDeclaration(){
    if(true){
        var x=10;
        let y=20;
        console.log("Inside If Block");
        console.log(x);
        console.log(y);
    }
    console.log("outside if block");
    console.log(x);
    console.log(y);
}
testDeclaration();