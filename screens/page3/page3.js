const modais = document.querySelectorAll(".modal")

let modalNotification = document.getElementById("div-notification")

function modalNotificationFunction(){
    modalNotification.style.display = "flex";
}

// function closeModalNotificationFunction(){
//     modalNotification.style.display = "none";
// }

function closeAllModals(){
    modais.forEach(modal => {
        modal.style.display = "none"
    })
}

document.addEventListener("click", function(event){
    if(!event.target.closest(".modal") && event.target.id != ("img-user-notification")){
        closeAllModals()
    }
})



