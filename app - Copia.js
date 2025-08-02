
function criaCartão(categoria, pergunta, resposta)  {
     let container = document.getElementById('container')
     let cartao = document.createElement('article')
     cartao.className = 'cartão'

    cartao.innerHTML = `
    <div class="cartão__conteúdo">
    <h3>${categoria}</h3>
    <div class="cartão__conteúdo__pergunta">
        <p>${pergunta}</p>
    </div>
    <div class="cartão__conteúdo__resposta">
        <p>${resposta}</p>
    </div>
    </div>
     `

     let respostaEstaVisivel = false

     function viraCartão () {
        respostaEstaVisivel = !respostaEstaVisivel
        cartao.classList.toggle('active', respostaEstaVisivel)
     }
     cartao.addEventListener('click', viraCartão)

     container.appendChild(cartao)

    }




