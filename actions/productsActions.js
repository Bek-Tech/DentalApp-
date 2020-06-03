import { insertProduct, deleteProduct, fetchProducts, updateProduct } from '../DataBase/productsDB'
//insertProduct(date, name, stock, history)
import { reFetchProducts } from "./index"
export const ADD_PRODUCTS = 'ADD_PRODUCTS'
export const ADD_NEW_PRODUCT = 'ADD_NEW_PRODUCTS'
export const DELETE_PRODUCT = 'DELETE_PRODUCT'
export const EDIT_PRODUCT = "EDIT_PRODUCT"

export const addProducts = () => {
    return async dispatch => {
        try {
            const productsResult = await fetchProducts()
            // const salesResult = await fetchSales()
            const products = productsResult.rows._array
            // const sales = salesResult.rows._array
            // const dataObj = {}

            if (products.length > 0) {
                const result = products.map(item => {
                    const parsedHistory = JSON.parse(item.history)
                    const totalReceived = parsedHistory.length > 0 ? item.stock + parsedHistory.reduce((acc, item) => {
                        return item.quantity + acc
                    }, 0) : item.stock
                    console.log("productaction")
                    console.log(totalReceived)
                    return { ...item, history: parsedHistory, totalReceived: totalReceived }
                })

                dispatch({ type: ADD_PRODUCTS, payload: result })
            } else {
                dispatch({ type: ADD_PRODUCTS, payload: products })
            }

        } catch (err) {
            throw err;
        }
    };





}

export const addNewProduct = (date, name, stock, history) => {
    return async dispatch => {
        try {
            await insertProduct(date, name, stock, history)
            dispatch(reFetchProducts())
        } catch (err) {
            throw err
        }

    }



}

export const deleteProductAction = (id) => {
    return async dispatch => {
        try {
            await deleteProduct(id)
            dispatch(reFetchProducts())
        } catch (err) {
            throw err
        }

    }
}

export const editProduct = (id, date, name, stock, history) => {
    return async dispatch => {
        try {
            await updateProduct(id, date, name, stock, history)
            dispatch(reFetchProducts())
        } catch (err) {
            throw err
        }

    }
}