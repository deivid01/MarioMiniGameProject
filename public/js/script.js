let mario = document.querySelector('.mario')
let pipe = document.querySelector('.pipe')
let clouds = document.querySelector('.clouds')


let jump = () => {
    mario.classList.add('jump')

    setTimeout(() => {
        mario.classList.remove('jump')
    }, 500)

}

let loop = setInterval (() => {

    let pipeposition = pipe.offsetLeft //pega o deslocamento esquerdo 
    let marioposition = +window.getComputedStyle(mario).bottom.replace('px', '') //diferente do offsetLeft, aqui foi preciso do getComputedStyle para pegar tudo que está sendo computado para usar a propriedade bottom

    let cloudsposition = clouds.offsetLeft


    if (pipeposition <= 120 && pipeposition > 0 && marioposition < 80) {
        pipe.style.animation = 'none'
        pipe.style.left = `${pipeposition}px`

        mario.style.animation = 'none'
        mario.style.bottom = `${marioposition}px`
        mario.src = 'public/images/game-over.png'
        mario.style.width = '75px'
        mario.style.marginLeft = '50px'

        clouds.style.animation = 'none'
        clouds.style.left = `${cloudsposition}px`

        let gameoverimg = document.createElement('img')
        gameoverimg.src = 'public/images/game-over-text.png'

        let divgameover = document.querySelector('.gameovertext')
        divgameover.appendChild(gameoverimg)

        divgameover.style.textAlign = 'center'
        divgameover.style.marginTop = '200px'
        gameoverimg.style.width = '300px'

        let button = document.createElement('button')
        button.innerHTML = 'Try again'

        let divbutton = document.querySelector('.buttonjs')
        divbutton.appendChild(button)

        divbutton.style.textAlign = 'center'
        button.style.width = '200px'
        button.style.padding = '10px'
        button.style.marginTop = '10px'
        button.style.border = '#fff'
        button.style.background = 'linear-gradient(to right, #FD0002, #3FA8F9)'
        button.style.color = '#fff'
        button.style.borderRadius = '10px'


        clearInterval(loop)
    }

}, 10)

let restart = () => {
    location.reload()
}

document.addEventListener('click', restart)
document.addEventListener('keydown', jump)
gameBoard.addEventListener('touchstart', jump)