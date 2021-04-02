const openbtn = document.querySelector(".js-open");
const modalBg = document.getElementById("modal-background")
const modalBox = document.getElementById("modal-box")


openbtn.addEventListener('click', function(event){
    event.preventDefault()
    // console.log("click click")
    modalBg.classList.add("active")
    modalBox.classList.add("active")
})

const closeBtns = document.querySelectorAll(".js-btn")
    closeBtns.forEach(node => {
    node.addEventListener('click', function(e){
    e.preventDefault()
    modalBg.classList.remove("active")
    modalBox.classList.remove("active")
    })
}) 