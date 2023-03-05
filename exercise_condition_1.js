function divisibleChecker() {
    let a, b, c;
    a = parseInt(document.getElementById("divisor").value);
    b = parseInt(document.getElementById("dividend").value);
    c = a % b;
    if (c === 0) {
        alert("a chia hết cho b")
    } else {
        alert("a không chia hết cho b")
    }
}

function ageChecker(a) {
    a = parseInt(document.getElementById("age").value);
    if (a === 16) {
        alert("đủ tuổi")
    } else if (a > 16) {
        alert("già quá")
    } else {
        alert("nhỏ quá")
    } console.log(a)
}

function highestNumber(){
    let a,b,c;
        a = parseInt(document.getElementById("interger1"));
        b = parseInt(document.getElementById("interger2"));
        c = parseInt(document.getElementById("interger3"));
        if (a>b){}
}
document.querySelector(selector: i)