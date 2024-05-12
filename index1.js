const idInput = document.querySelector("#productid")
const nameInput = document.querySelector("#name")
const priceInput = document.querySelector("#price")
const button = document.querySelector("#btn")

button.addEventListener('click',
    (e)=>{
        e.preventDefault();
        //step1: lay vallue
        const idValue = idInput.value;
        const nameValue = nameInput.value;
        const priceValue = priceInput.value;

        //step2: dong goi sp
        const product ={
            productid: idValue,
            name: nameValue,
            price: priceValue,
        }

        fetch('https://6584392b4d1ee97c6bcf4612.mockapi.io/product/Product', {
        method: 'POST',
        headers: {'content-type':'application/json'},
        // Send your data in the request body as JSON
        body: JSON.stringify(product)
        }).then(res => {
        if (res.ok) {
            return res.json();
        }
        // handle error
        }).then(task => {
        // do something with the new task
        }).catch(error => {
        // handle error
        })
    }
)