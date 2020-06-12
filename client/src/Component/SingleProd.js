import React, { useEffect, Fragment } from 'react'
import PropTypes from 'prop-types'
import { getProductbyID } from "../actions/ProductService"
import { connect } from 'react-redux'
import ReviewItem from './ReviewItem'

const SingleProd = ({ products: { product }, match, getProductbyID }) => {
    useEffect(() => {
        getProductbyID(match.params.id)
    }, [getProductbyID, match.params.id])


    return (
        <Fragment>
            <h1>Details</h1>
            <h4>Category: {product && product.category}</h4>
            <h4>ProductName :{product && product.productName}</h4>
            <img src={product && product.imageUrl} />
            <div>
                {product && product.reviews.map(reviews => (
                    <ReviewItem key={reviews._id} reviews={reviews} />
                ))}
            </div>

        </Fragment>
    )
}

SingleProd.propTypes = {
    getProductbyID: PropTypes.func.isRequired,
    products: PropTypes.object.isRequired,
    product: PropTypes.object.isRequired,
}
const mapStatToProps = state => ({
    products: state.products,
    product: state.product
})
export default connect(mapStatToProps, { getProductbyID })(SingleProd)
