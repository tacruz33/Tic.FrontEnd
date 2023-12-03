// scriptNovoRoteiro.js

function inserirNovoRoteiro() {
    // Obter valores do formulário
    var destinoNovo = document.getElementById('destinoNovo').value;
    var imagemNovo = document.getElementById('imagemNovo').value;

    // Verificar se os valores são válidos
    if (!destinoNovo || !imagemNovo) {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    // Criar um novo elemento roteiro-viagens
    var novoRoteiro = document.createElement('div');
    novoRoteiro.className = 'roteiros-viagens';

    // Adicionar conteúdo ao novo elemento
    novoRoteiro.innerHTML = `<img src="${imagemNovo}" class="postal">
        <div class="roteiro-destino">${destinoNovo}</div>`;
    // Adicione outros elementos conforme necessário

    // Adicionar o novo elemento ao container-destinos
    var containerDestinosNovo = document.getElementById('containerDestinosNovo');
    containerDestinosNovo.appendChild(novoRoteiro);

    // Limpar o formulário
    document.getElementById('formularioNovoRoteiro').reset();
}
