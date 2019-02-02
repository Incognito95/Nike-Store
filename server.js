if (process.env.NODE_ENV !== 'production') {
    require('dotenv').load();
};


const express = require('express');
const app = express();
const fs = require('fs');

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/products', function (req, res) {
    fs.readFile('products.json', function (error,data) {
        if (error) {
            res.status(500).end()
        } else {
            res.render('products.ejs', {
                items: JSON.parse(data)
            })
        }
    })
})



app.listen(3000);