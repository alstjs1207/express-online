const models = require('./models');

async function getProducts() {
    const product1 = await models.Products.findByPk(3);
    const product2 = await models.Products.findByPk(2);

    console.log(product1.dataValues);
    console.log(product2.dataValues);
}

getProducts();