const { Router } = require('express');
const router = Router();
const ctrl = require('./admin.ctrl');

function testMiddleWare( req, res, next ){
    console.log('첫번째 미들웨어');
    next();
}

function testMiddleWare2( req, res, next ){
    console.log('두번째 미들웨어');
    next();
}

router.get('/', testMiddleWare, testMiddleWare2 , (req,res) => {
    res.send('admin app');
});

router.get('/products', ctrl.get_products );

router.get('/products/write', ctrl.get_products_write );

router.post('/products/write', ctrl.post_products_write );

router.get('/products/detail/:id', ctrl.get_products_detail );

router.get('/products/edit/:id', ctrl.get_products_edit );

router.post('/products/edit/:id', ctrl.post_products_edit );

router.get('/products/delete/:id' , ctrl.get_products_delete );

module.exports = router;


