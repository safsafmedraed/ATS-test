import { GET_PRODUCTS, PRODUCT_ERROR, GET_PRODUCT } from "../actions/types";

const initialState = {
    products: [],
    product: null,
    loading: true,

}
export default function (state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case GET_PRODUCTS:

            return {
                ...state,
                products: payload,
                loading: false
            }
        case GET_PRODUCT:
            return {
                ...state,
                product: payload,
                loading: false
            }
        case PRODUCT_ERROR:
            return {
                ...state,
                loading: false

            }
        default:
            return state;
    }




}