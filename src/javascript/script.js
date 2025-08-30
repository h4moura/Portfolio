function enviarWhats(event){
event.preventDefault()

const nome = document.getElementById('none').value
const mensagem = document.getElementById('mensagem').value
const telefone = '5511972225978'
const texto = `Olá" Me chamo ${nome}, ${mensagem}`
const msgFormatada = encodeURIComponent(texto)
const url = `https://wa.me/${telefone}/?text=${msgFormatada}`
window.open(url, '_blank');
}

const toggleMobile = document.getElementById("menu-toggle-mobile");
  const menuMobile = document.getElementById("menu-mobile");

  toggleMobile.addEventListener("click", () => {
    menuMobile.classList.toggle("show-mobile");
  });

const btnTopo = document.getElementById("btn-topo");

// Mostrar botão quando rolar a página
window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    btnTopo.style.display = "flex";
  } else {
    btnTopo.style.display = "none";
  }
});

// Voltar suavemente ao topo
btnTopo.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});