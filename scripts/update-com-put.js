import { buscaProdutos } from "./read-com-get.js";
buscaProdutos()


//Desafio 1
document.querySelector('#listaProdutos').addEventListener('click', event => {
    //console.Log(event.target);
    if (event.target.closest('ul').classList.contains('produto')) {
        // console.Log (event.target);
        const elementoBase = event.target.closest('ul');

        document.querySelector('input#id').value = elementoBase.querySelector('[data-produto="id"]').innerHTML;

        document.querySelector('input#descricao').value = elementoBase.querySelector('[data-produto="descricao"]').innerHTML;

        document.querySelector('input#preco').value = elementoBase.querySelector('[data-produto="preco"]').innerHTML;

    }
    verificaSeinputEstaoPreenchidos();
});

//Desafio 2: 

function verificaSeinputEstaoPreenchidos() {

    const idPreenchido = document.querySelector('input#id').value !== "";
    const descricaoPreenchido = document.querySelector('input#descricao').value !== "";
    const precoPreenchido = document.querySelector('input#preco').value !== "";

    if (idPreenchido || descricaoPreenchido || precoPreenchido) {
        document.querySelector('button#btCancelar').removeAttribute('disabled');
    } else {
        document.querySelector('button#btCancelar').setAttribute('disabled', '');
    }

    if (idPreenchido) {
        document.querySelector('button#btAtualizar').removeAttribute('disabled');
    } else {
        document.querySelector('button#btAtualizar').setAttribute('disabled', '');
    }

    //Complemento desafio 2: desabilta o botao no reset do formulario

    document.querySelector('form').addEventListener('reset', () => {
        document.querySelector('button#btCancelar').setAttribute('disabled', '');
        document.querySelector('button#btAtualizar').setAttribute('disabled', '');
    });
 
}
   //Verifica os campos do formulario na digitação manual
   document.querySelector('form').addEventListener('input', verificaSeinputEstaoPreenchidos);



document.querySelector('#btAtualizar').addEventListener('click', () => {

    const dados = {
        'id': null,
        'descricao': document.querySelector('#descricao').value,
        'preco': document.querySelector('#preco').value
    }

    const id = document.querySelector('#id').value;


    fetch(`http://localhost:3002/produtos/${id}`, {
        method: 'PUT',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(dados)
    })
        .then(resposta => {
            if (resposta.ok) {
                alert('Produto Atualizado');
                buscaProdutos();
            }
        });


});



