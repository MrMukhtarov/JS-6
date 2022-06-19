let modal = document.getElementById('myModal')
let button = document.getElementById('btn')
let span = document.getElementById('spans')


button.onclick = function() {
    modal.style.display = 'block'
}
window.onclick = function(e) {     
       if(e.target === modal){
        modal.style.display = 'none'
       }
}
span.onclick = function() {
    modal.style.display = 'none'
}


