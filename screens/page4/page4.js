
////////////////////////////////////////////////////  MODAIS    ////////////////////////////////////////////////////

const modais = document.querySelectorAll(".modal")

let miniModalMoldes = document.getElementById("modal-button-moldes")
let modalSugestao = document.getElementById("modal-cadastrar-sugestao")
let modalFichaDeMolde = document.getElementById("modal-ficha-de-molde")
let modalNotification = document.getElementById("div-notification")

function modalNotificationFunction(){
    closeAllModals()
    modalNotification.style.display = "flex";
    console.log("ok")
}

function openMiniModal(){
    closeAllModals()
    miniModalMoldes.style.display = "flex";
}

function openModalSugestao(){
    closeAllModals()
    modalSugestao.style.display = "flex";
}

function openFichaDeMolde(){
    modalFichaDeMolde.style.display = "flex";
}

function closeAllModals(){
    modais.forEach(modal => {
        modal.style.display = "none"
    })
}

function abrirFichaDeSugestao(){
    console.log("ok")
}

document.addEventListener("click", function(event){
    if(!event.target.closest(".modal") && !event.target.matches("button") && event.target.id != ("img-user-notification")){
        closeAllModals()
    }
})

////////////////////////////////////////////////////      ////////////////////////////////////////////////////


