//Passo 01: usuário vai digitar o nome 
//Passo 02: usuário vai escrever o número
//Passo 03: registrar na tabela o nome e número de telefone 
//Passo 04: limpar os campos para registrar novamente 

const form = document.getElementById('form-contato');
const nome = [];
const numero = [];

let linhas = '';

form.addEventListener('submit', function(e){
    e.preventDefault(e);

    adicionaLinha();
    atualizaTabela();
    
});

function adicionaLinha() {

    const inputNomeContato = document.getElementById('nome-contato');
    const inputNumeroContato = document.getElementById('numero-contato');

    if(numero.includes(inputNumeroContato.value)) {
        alert(`O número ${inputNumeroContato.value} já foi inserida`);
    }else{
        nome.push(inputNomeContato.value);
        numero.push(inputNumeroContato.value);

        let linha = '<tr>';
        linha += `<td>${inputNomeContato.value}</td>`;
        linha += `<td>${inputNumeroContato.value}</td>`;
        linha += '<tr/>';

        linhas += linha;
    }

    inputNomeContato.value = '';
    inputNumeroContato.value = '';
}

function atualizaTabela(){

        const corpoTabela = document.querySelector('tbody');
        corpoTabela.innerHTML = linhas;
    
}


