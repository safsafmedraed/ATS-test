import axios from 'axios';
import { GET_PRODUCTS, PRODUCT_ERROR, GET_PRODUCT } from './types'

export const getProducts = formData => async dispatch => {

    try {

        const res = await axios.get(`/product/${formData}`)

        dispatch({
            type: GET_PRODUCTS,
            payload: res.data
        })
    } catch (error) {
        dispatch({
            type: PRODUCT_ERROR,

        });
    }

}
export const getProductbyID = prodId => async dispatch => {

    try {
        const res = await axios.get(`/products/${prodId}`);
        dispatch({
            type: GET_PRODUCT,
            payload: res.data
        });

    } catch (error) {
        dispatch({
            type: PRODUCT_ERROR,

        });

    }
}