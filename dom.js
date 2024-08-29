
const buttton = document.getElementById('ubahfoto');
const h1 = document.getElementById('foto');

const gambar = document.querySelector("img");

buttton.addEventListener("click", gantiFoto);

function gantiFoto(){
    if(gambar.getAttribute("src") == "photo1.png")
        gambar.setAttribute("src", "photo2.jpg");
    else if(gambar.getAttribute("src") == "photo2.jpg")
        gambar.setAttribute("src", "photo1.png");
}