
function goodFastCheap(){
    let good, fast, cheap;
    good = document.getElementById("good").checked
    fast = document.getElementById("fast").checked
    cheap = document.getElementById("cheap").checked
//chưa đúng
    if (good===true && fast===true){
        document.getElementById("cheap").checked=false
    } else if (good===true && cheap===true){
        document.getElementById("fast").checked=false
    } else if (fast===true && cheap===true){
        document.getElementById("good").checked=false
    } else if (good===true && fast===true && cheap===true){
        document.getElementById("good").checked=false
    }
    console.log(good)
    console.log(fast)
    console.log(cheap)
}