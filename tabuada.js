let tab = document.getElementById('botao')
tab.addEventListener('click', clicar)

function clicar(){
    let user = parseInt(document.getElementById('numeroUser').value)
    let verU = document.getElementById('msgU')
    let ver = document.getElementById('msg')

    if (isNaN(user)){
        window.alert('Impossível gerar tabuada!')
    } else{
        let res = ''
        for(let cont = 1; cont <= 10; cont ++){
            res += `${user} x ${cont} = ${user * cont}<br>`
        }
        verU.innerHTML = `<strong>A tabuada de ${user} é: </strong>`
        ver.innerHTML = res;
    }
}