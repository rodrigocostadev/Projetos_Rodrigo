
let miniModal = document.getElementById("modal-button-moldes")

function openMiniModal(){
    miniModal.style.display = "block";
}

function closeMiniModal(){
    miniModal.style.display = "none";
    console.log("executou")
}

window.addEventListener("click", function(event) {
    // Verifica se o clique foi fora da modal e do botão de abrir
    if (event.target === miniModal || event.target === button) {
        // return; // Não fechar, pois foi clicado no próprio modal ou no botão
        closeMiniModal();
    }

    // Fechar a modal caso o clique tenha ocorrido fora da área da modal
    
});