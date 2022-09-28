let btn = document.getElementById('Berger_Menue') 
let ul = document.getElementById('Close_ul')


// document.onclick = function(e) {
//     if (e.target.id !== "Berger_Menue" && e.target.id !== 'Close_ul') {
//         btn.classList.remove('open')
//         ul.classList.remove('open_ul')
//     }
// }

btn.addEventListener("click", (e)=> {
    btn.classList.toggle("open")
    ul.classList.toggle("open_ul")
})



