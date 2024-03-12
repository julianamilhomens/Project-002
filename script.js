    let circulo = document.querySelector(".circulo")
    let imgCopo = document.querySelector(".copo-verde")
    let verde = document.querySelector(".verde")
    let rosabb = document.querySelector(".rosabb")
    let rosapink = document.querySelector(".rosapink")

    verde.addEventListener("click", () => {
    imgCopo.src="./img/img1.png"
    circulo.style.background ="#017143"
    })
    rosabb.addEventListener("click", () => {
    imgCopo.src="./img/img2.png"
    circulo.style.background ="#eb7495"
    })
    rosapink.addEventListener("click", () => {
    imgCopo.src="./img/img3.png"
    circulo.style.background="#d752b1"
    })