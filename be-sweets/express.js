const express = require('express');
const cors = require('cors');
const shop = express();
const port = 5000;

// this stock array contains all information about the stock
let stock = [
    {
        id: 0,
        name: 'Candyfloss',
        description: 'Sweet and tasty sugar',
        price: 12,
        currency: 'EUR',
        quantity: 1,
        caseSize: 6
    },
    {
        id: 2,
        name: 'Stroopwaffel',
        description: 'Caramelly deliciousness',
        price: 1,
        currency: 'EUR',
        quantity: 1,
        caseSize: 100
    }
];

// the express app uses cors settings imported on line 2
shop.use(cors());

//  a get request that will retrieve the stock array and a message about the call
shop.get('/stock', (req, res) => {
    let response = {
        data: stock,
        message: "This call has retrieved all stock information."
    };
    res.status(200).send(response);
});

// a get request that will calculate and send a total value of all stock items
shop.get('/value', (req, res) => {
    let total = 0;
   stock.forEach((z) => {
    total += (z.quantity * z.price)
   });
   let response = {
       data: total.toString(),
       message: "This call has calculated and returned the total value of all stock"
   };
   res.send(response);
});

// a delete request that will take the id of the item clicked on to be sold and will reduce the item quantity by 1
shop.delete('/:id', (req, res) => {
    let x = Number(req.params.id)
    stock.forEach(y => {
        if (y.id === x){
            if (y.quantity > 0) {
                y.quantity --;
            }
        }
    })
    let response = {
        data: stock,
        message: "This call will decrease the stock quantity by 1 and return the resulting stock count"
    };
    res.send(response);
});

// a post request that will increase the value of the item quantity in question by the case size amount
shop.post('/:id/restock', (req, res) => {
    let x = Number(req.params.id)
    stock.forEach(y => {
        if (y.id === x){
            y.quantity += y.caseSize;
        };
    });
    let response = {
        data: stock,
        message: "This call will decrease the stock quantity by 1 and return the resulting stock count"
    };
    res.send(response);
});

// open and listen the server on port defined on line 4
shop.listen(port, () => {
    console.log(`Example shop listening on port ${port}`);
});