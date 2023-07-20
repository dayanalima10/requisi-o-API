import { buscaProdutos } from "./read-com-get.js";
buscaProdutos()


document.addEventListener('click', () => {
    if (event.target.classList.contains('delete-button')){
        fetch(`http://localhost:3002/produtos/$(event.target.value}´, {
            method: 'DELETE',
            headers: {
                'Content-type': 'application/json'
            }
        })
                .then(resposta => {
                    if (respósta.ok){
                        alert('Produto apagado!');
                        location.reload();
                    }
                })
            }
        });