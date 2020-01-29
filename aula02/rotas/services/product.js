import * as fileHelper from '../../helpers/file'

const PRODUCT_COLLECTION = 'products'

export const getAllProducts = () => {
    const products = fileHelper.get('products')
    return products || []
}

export const getProductById = (id) => {
    console.log('id no metodo', id)
    const products = fileHelper.get(PRODUCT_COLLECTION) || []
    return products.find(p => p.id == id)
}

export const saveNewProduct = (newProduct) => {
    const products = fileHelper.get(PRODUCT_COLLECTION) || []
    const id = products.length + 1
    newProduct.id = products.length + id
    products.push(newProduct)
    fileHelper.save(PRODUCT_COLLECTION, products)
}

export const updateProduct = (productUpdate) => {
    const products = getAllProducts()
    const updatedProducts = products.map(product => {
        if (product.id === productUpdate.id) {
            return productUpdate
        }
        return product
    })
    fileHelper.save(PRODUCT_COLLECTION, updatedProducts)
}

export const removeProduct = (productId) => {
    const products = fileHelper.get(PRODUCT_COLLECTION) || []
    const newProducts = products.filter(product => product.id !== productId)
    fileHelper.save(PRODUCT_COLLECTION, newProducts)
}

