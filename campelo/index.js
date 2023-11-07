const backendUrl = 'http://localhost:3003/produto'

const idProduto = document.querySelector('#idProduto')
const urlImg = document.querySelector('#urlImg')
const nome = document.querySelector('#nome')
const preco = document.querySelector('#preco')
//Mandar o valor das const acima para o html

const formulario = document.querySelector('#formulation')
formulario.addEventListener("submit", criadorPizza)

async function criadorPizza(event){
    event.preventDefault() 
   // idProduto.value
   // alert(idProduto.value)
    urlImg.value
    console.log(urlImg.value)
    nome.value
    console.log(nome.value)
    preco.value
    console.log(preco.value)

    const pizzas = {
    //id: idProduto,
    imgurl: urlImg.value,
    pizzaname: nome.value,
    preco: preco.value
    }
    try{
        
        const conectar = await fetch(
            backendUrl,{
                method: 'POST',
                headers:{
                    'Content-Type' : 'application/json'
                },
                body: JSON.stringify(pizzas)
            }
            
        )
        console.log('entrei');
        if (conectar.ok){
            console.log('deu');
        }else{
            console.log();
            console.error('deu n')
        }
    }catch(error)
    {
        console.error('Deu erro ai na real')
    }
    
}