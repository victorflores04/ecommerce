
import asyncHandler from 'express-async-handler'
import Product from '../models/productsModel.js'

//@desc Fecth all products
//@route GET api/productos
//@access Public
const getProducts = asyncHandler(async (req, res) => {
    const products = await Product.find({})
    res.json(products)
})

//@desc Fecth single product
//@route GET api/productos/:id
//@access Public
const getProductById = asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id)
    if(product){
        res.json(product)
    }else{
        res.status(404)
        throw new Error('Product not found')
    }
})

export { getProducts, getProductById }