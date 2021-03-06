const express = require('express');
const cors = require('cors');
const app = express();
const port = 8080;

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

app.use(cors());
app.get('/api', (req, res) => {
    res.status(200).send("hello");
})
app.get('/api/stock', (req, res) => {
    console.log("api ->",res)
    res.send(stock);
});
app.get('/api/value', (req, res) => {
    let total = 0;
   stock.forEach((z) => {
    total += (z.quantity * z.price)
   })
   res.send(total.toString())
});
app.delete('/api/:id', (req, res) => {
    let x = Number(req.params.id)
    stock.forEach(y => {
        if (y.id === x){
            y.quantity --;
        }
    })
    res.send(stock)
})
app.post('/api/:id/restock', (req, res) => {
    let x = Number(req.params.id)
    stock.forEach(y => {
        if (y.id === x){
            y.quantity += y.caseSize;
        }
    })
    res.send(stock)
}) 
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
})
