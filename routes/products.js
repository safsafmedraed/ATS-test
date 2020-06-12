const app = require('express').Router();
let Products = require('../model/Products');
var request = require('request');

//1/ Recuperer les produits exposés et les sauvgarder dans la base de donnée.
app.route('/products').post(async (req, res) => {
    try {
        request('http://test.ats-digital.com:3000/products', function (error, response, body) {
            let newprod = [];
            let prod = JSON.parse(body);
            prod.products.forEach(async p => {
                let sum = 0;
                p.reviews.forEach(r => {
                    sum = sum + r.rating

                });
                p.avg = sum / p.reviews.length;

                console.log(p.avg);

                newprod = new Products(p)

                await newprod.save();
            });
        }).pipe(res)
    } catch (error) {
        Console.error(error)
        res.status(500).send('server Error')
    }
}
)
//2/ Exposer 2 endpoints 
//product => retourner la liste des produits (paginé par lot de 20)
app.route('/product/:step').get(async (req, res) => {
    try {
        let step = req.params.step;
        console.log(step)
        const prod = await Products.find().skip(parseInt(step)).limit(20)

        res.json(prod);
    } catch (error) {
        res.status(500).send(error)
    }
})


//product/{id} retourner le produit par id
app.route('/products/:id').get(async (req, res) => {
    try {
        const prod = await Products.findById(req.params.id);
        if (!prod) {
            return res.status(404).json({ msg: 'prod not found' })
        }
        res.json(prod);
    } catch (error) {
        Console.error(error)
        if (error.kind === 'ObjectId') {
            return res.status(404).json({ msg: 'prod not found' })
        }
        res.status(500).send('server Error')
    }
})
//filtrer par categorie partie backend
app.route('/productCat').get(async (req, res) => {
    try {
        const category = req.body.category
        console.log(category)
        const prod = await Products.find({ category: category });
        res.json(prod);
    } catch (error) {
        res.status(500).send('server Error')
    }
})


module.exports = app;