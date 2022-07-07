const express = require('express');
const cors = require('cors');
const database = require('./database/connection')
const shop = express();
const port = 8080;

// the express app uses cors settings imported on line 2
shop.use(cors());
shop.get('/', (req, res) => {
    console.log(req, res)
})

//  a get request that will retrieve the stock array and a message about the call
shop.get('/stock', (req, res) => {
    database.get_stock().then(data => {

        let response = {
            data: data,
            message: "This call has retrieved all stock information."
        };
        res.status(200).send(response);
    });
});

// a get request that will calculate and send a total value of all stock items
shop.get('/value', (req, res) => {
    database.get_value().then(data => {
        res.send(data[0].sum);
    });
});

// a delete request that will take the id of the item clicked on to be sold and will reduce the item quantity by 1
shop.delete('/:id', (req) => {
    database.reduce_item(req.params);
});

// a post request that will increase the value of the item quantity in question by the case size amount
shop.post('/:id/restock', (req) => {
    database.order_item(req.params);
});

// open and listen the server on port defined on line 4
shop.listen(port, () => {
    console.log(`Example shop listening on port ${port}`);
});