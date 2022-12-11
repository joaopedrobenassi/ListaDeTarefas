// Obtendo os elementos
const inputUsuario = document.querySelector('.campoInput input')
const botaoAdd = document.querySelector('.campoInput button')
const listaDeTarefas = document.querySelector('.listaDeTarefas')
const botaoLimpar = document.querySelector('footer button')

//Evento onkeyup
inputUsuario.onkeyup = () => { //onkeyup toda vez que a tecla parar de ser pressionada executará função
    let valorInserido = inputUsuario.value //Obtendo o valor inserido pelo usuario
    if(valorInserido.trim() != 0){// Se o valor do usuario não for apenas espaços
        botaoAdd.classList.add('active') //Ative o botão adicionar
    }else {
        botaoAdd.classList.remove('active') // Desativa o botão
    }
}
mostrarTarefas()

botaoAdd.onlick = () => { //Quano o usuário apertar o botão irá ocorres essa função
    let valorInserido = inputUsuario.value // Pega o valor digitado pelo usuário
    let getLocalStorageData = localStorage.getItem('Nova Tarefa') // Vai obter o valor do armazenamento que tiver a chave Nova Tarefa
    if(getLocalStorageData == null){ // Se o localStorage não tiver dados
        listArray = [] //Criando um array vazio
    }else {
        listArray = JSON.parse(getLocalStorageData) //Transformando string em objeto
    }
    listArray.push(valorInserido) //adicionando valor inserido ao array
    localStorage.setItem('Nova Tarefa', JSON.stringify(listArray)) //Transforma o objeto JSON em string
    botaoAdd.classList.remove('active') //Desativa o botao apos a nova tarefa ser adicionada

}
function mostrarTarefas() {
    
}
