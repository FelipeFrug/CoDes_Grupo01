document.addEventListener('DOMContentLoaded', function(){
    let empresas = document.querySelectorAll('.empresas')
    let compradas = {}
    for (cia of empresas){
        cia.addEventListener('click',function(){
            compradas[cia] = getDate() + getMonth()
        })
    }
    console.log(compradas)
})