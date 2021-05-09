const models = require('../../models');

exports.get_products = ( _ , res) => {
   models.Products.findAll().then( (productList) => {
       res.render('admin/products.html', {products : productList});
   });
}

exports.get_products_write = ( _ , res) => {
    res.render( 'admin/write.html');
}

exports.post_products_write = ( req , res ) => {
    models.Products.create({
        name : req.body.name,
        price : req.body.price ,
        description : req.body.description
    }).then( () => {
        res.redirect('/admin/products');
    });

    //or 데이터 형식이 동일한 경우
    // models.Products.create(req.body).then( () => {
    //     res.redirect('/admin/products');
    // });
}