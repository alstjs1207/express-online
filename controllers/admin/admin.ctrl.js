const models = require('../../models');

exports.get_products = ( _ , res) => {
   models.Products.findAll().then( (products) => {
       res.render('admin/products.html', {products : products});
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

exports.get_products_detail = (req, res) => {
    
    models.Products.findByPk(req.params.id).then( (product) => {
        res.render('admin/detail.html', { product });
    })
}

exports.get_products_edit = (req, res) => {
    models.Products.findByPk(req.params.id).then( (product) => {
        res.render('admin/write.html', { product });
    })
}

exports.post_products_edit = ( req , res ) => {
    models.Products.update({
        name : req.body.name,
        price : req.body.price ,
        description : req.body.description
    }, {
        where: { id : req.params.id }
    }).then( () => {
        res.redirect('/admin/products/detail/'+req.params.id);
    });
}

exports.get_products_delete = ( req , res ) => {
    models.Products.destroy({
        where : {
            id: req.params.id
        }
    }).then( () => {
        res.redirect('/admin/products');
    });
}