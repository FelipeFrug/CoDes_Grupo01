document.addEventListener('DOMContentLoaded', function(){
    const date = new Date()
    let dia = date.getDate()
    let mes = date.getMonth() + 1
    let compra = localStorage.getItem('compra')
    empresas = document.querySelector('.empresas')
    teste = document.querySelector('#teste')

    a = document.createElement('a')
    a.classList.add('empresa')
    h2 = document.createElement('h2')
    h2.innerHTML = compra
    h2.classList.add('empresatitulo')
    h3 = document.createElement('h3')
    h3.innerHTML = 'Ultima Compra '+dia + '/' + mes
    h3.classList.add('empresadescrição')
    a.appendChild(h2)
    a.appendChild(h3)   
    a.href = './Recentes/R_PEC_E.html'
    empresas.appendChild(a)
    empresas.insertBefore(a, teste)
})