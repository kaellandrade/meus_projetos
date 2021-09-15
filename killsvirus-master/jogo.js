var altura = 0
var largura = 0
var vidas = 3
var tempo = 15
var totalDeVirusNojogo = 5 // Total de imagens de virus que contém o jogo
var criaVirusTempo = 1500

var nivel = window.location.search.replace('?','')

if(nivel === 'facil'){
    criaVirusTempo = 1500
}else if(nivel === 'medio'){
    criaVirusTempo = 1000
}else{
    criaVirusTempo = 720
}

function ajustaTamanhoPalcoJogo(){
    // Função irá ajustar o tamnho da tela onde será
    // criado os vírus

    altura = window.innerHeight
    largura = window.innerWidth
    console.log(altura + " X "+ largura) //* DEBUG
}

document.getElementById('cronometro').innerHTML = tempo
var cronometro = setInterval(function(){
    tempo -= 1
    if(tempo<0){
        clearInterval(cronometro)
        clearInterval(criaVirus)
        window.location.href = 'vitoria.html'
   }else{
       document.getElementById('cronometro').innerHTML = tempo
   }
}, 1000)

function posicaoRandom(){
    // Gera posições aleátorias dentro dos intervalos
    // da resolução
    ajustaTamanhoPalcoJogo()
    console.log('Vidas restantes: '+vidas)
    if(document.getElementById('virus')){
        document.getElementById('virus').remove()

        if(vidas == 0){
            window.location.href = 'gameOver.html'
        }else{
            document.getElementById('v'+vidas).src = "imagens/coracao_vazio.png"
            vidas--;
        }
    }
    
    var posicaoX = Math.floor((Math.random() * largura)) - 90
    var posicaoY = Math.floor((Math.random() * altura)) - 90
    console.log(posicaoX +" x "+posicaoY)

    posicaoX = posicaoX < 0 ? 0 : posicaoX
    posicaoY = posicaoY < 0 ? 0 : posicaoY

    // *criando os virus 
    var numeroDoMosquito = Math.ceil(Math.random()*totalDeVirusNojogo) // Gera um número do mosquito a ser criado
    console.log('numero do mosquito criado é: ' + numeroDoMosquito) // *DEBUG
    var virus = document.createElement('img')
    virus.src = 'imagens/v'+numeroDoMosquito + '.png'
    console.log(flipRandom()) //*DEBUG
    virus.className = ('virus' + numeroDoMosquito) + ' ' + flipRandom()
    virus.style.left = posicaoX + 'px'
    virus.style.top = posicaoY + 'px'
    virus.style.position = 'absolute'
    virus.id = 'virus'
    virus.onclick = function(){
        this.remove()
    }
    document.body.appendChild(virus)


}

function flipRandom(){
    var className = Math.floor(Math.random()*3)
    if(className === 0){
        return 'esquerda'
    }else if(className===1){
        return 'paracima'
    }else{
        return ' '
    }
}

var criaVirus = setInterval(function(){
    posicaoRandom()
}, criaVirusTempo)