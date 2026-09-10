const valueNumber = document.querySelectorAll("#flexGrid #numberBox button");
const screenShow = document.querySelector("#topScreen input")

valueNumber.forEach((btn) =>{
    btn.addEventListener("click", (val)=>{
        screenShow.value += val.target.value;
    })
})