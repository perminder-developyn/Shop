const express = require('express');
const cors = require('cors');
const shop = express();
const port = 5000;

let stock = [
    {
        id: 0,
        name: 'Candyfloss',
        description: 'Sweet and tasty sugar',
        price: 12,
        currency: 'EUR',
        quantity: 350,
        caseSize: 6
    },
    {
        id: 2,
        name: 'Stroopwaffel',
        description: 'Caramelly deliciousness',
        price: 1,
        currency: 'EUR',
        quantity: 2000,
        caseSize: 100
    }
]

shop.use(cors());

shop.get('/stock', (req, res) => {
    let response = {
        data: stock,
        message: "This call has retrieved all stock information."
    }
    res.send(response);
});

shop.get('/value', (req, res) => {
    let total = 0;
   stock.forEach((z) => {
    total += (z.quantity * z.price)
   })
   let response = {
       data: total.toString(),
       message: "This call has calculated and returned the total value of all stock"
   }
   res.send(response)
});

shop.delete('/:id', (req, res) => {
    let x = Number(req.params.id)
    stock.forEach(y => {
        if (y.id === x){
            y.quantity --;
        }
    })
    let response = {
        data: stock,
        message: "This call will decrease the stock quantity by 1 and return the resulting stock count"
    }
    res.send(response)
})

shop.post('/:id/restock', (req, res) => {
    let x = Number(req.params.id)
    stock.forEach(y => {
        if (y.id === x){
            y.quantity += y.caseSize;
        }
    })
    let response = {
        data: stock,
        message: "This call will decrease the stock quantity by 1 and return the resulting stock count"
    }
    res.send(response)
}) 

shop.listen(port, () => {
    console.log(`Example shop listening on port ${port}`);
});