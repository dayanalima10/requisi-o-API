

function buscaProdutos() {

    fetch('http://localhost:3002/produtos', {
        method: 'GET',
        headers: {
            'Content-type': 'application/json'
        }
    })
        .then(resposta => resposta.json())
        .then(resposta => {

            document.querySelector('#listaProdutos').innerHTML = '';
            const TituloProdutos = document.createElement('h2');
            TituloProdutos.classList.add('titulo-lista');
            TituloProdutos.innerHTML = 'Lista de Produtos';
            document.querySelector('#listaProdutos').appendChild(TituloProdutos);

            for (let i = 0; i < resposta.length; i++) {

                const ul = document.createElement('ul');
                ul.classList.add('produto');

                const liId = document.createElement('li');
                liId.setAttribute('data-produto','id');
                liId.innerHTML = resposta[i].id;

                const liDescricao = document.createElement('li');
                liDescricao.setAttribute('data-produto','descricao');
                liDescricao.innerHTML = resposta[i].descricao;

                const liPreco = document.createElement('li');
                liPreco.setAttribute('data-produto','preco');
                liPreco.innerHTML = resposta[i].preco;

                ul.append(liId, liDescricao, liPreco);


                document.querySelector('#listaProdutos').appendChild(ul);
            }

        });
}
export { buscaProdutos }