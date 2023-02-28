function display(a) {
    console.log(a)
    document.getElementById("screen").value += a
}

function calculate(){
    document.getElementById("screen").value = eval(document.getElementById("screen").value);
}

function reset(){
    document.getElementById("screen").value = " "
}