(function () {
    [...document.querySelectorAll(".control")].forEach(button => {
        button.addEventListener("click", function() {
            document.querySelector(".active-btn").classList.remove("active-btn");
            this.classList.add("active-btn");
            document.querySelector(".active").classList.remove("active");
            document.getElementById(button.dataset.id).classList.add("active");
        })
    });
    document.querySelector(".theme-btn").addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
    })
})();



function downloadCV(language){
    console.log("download");
    const downloadLink = document.createElement('a');
    document.body.appendChild(downloadLink);
    if(language == 'eng'){

        downloadLink.href = "./Bader.Semah-CV-ENG.pdf";
    }else if (language == 'fr' ){
        downloadLink.href = "./Bader.Semah-CV-FR.pdf";

    }
    downloadLink.target = '_blank';
    downloadLink.download = Date.now()+'.png';
    downloadLink.click(); 
}

