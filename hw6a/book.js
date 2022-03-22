const selectApps = document.querySelectorAll("p");

const selectpps = document.querySelectorAll(".appointment-options");

console.log(selectpps.length)
console.log(selectApps.length)

for (let i=0; i < selectApps.length; i++){
    console.log("what")
    selectApps[i].addEventListener('click', ()=>{
        console.log("selected this appointment")
    })
}
