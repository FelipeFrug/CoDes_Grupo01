document.addEventListener('DOMContentLoaded', function(){
    
    empresas = document.querySelectorAll('.empresas')
    for (cia of empresas){
        cia.addEventListener('click', function(){
            emp = cia.querySelector('.empresatitulo').innerHTML
            desc = cia.querySelector('.empresadescrição').innerHTML
            localStorage.setItem('compra',emp)
            console.log(href)
        }
        )
    }
})