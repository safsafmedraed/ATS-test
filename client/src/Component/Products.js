import React, { useEffect, Fragment, useState } from 'react'
import PropTypes from 'prop-types'
import { getProducts } from "../actions/ProductService"
import { connect } from 'react-redux'
import Spinner from './Spinner'
import ProductItem from './ProductItem'
import Pagination from '@material-ui/lab/Pagination';


import { makeStyles } from '@material-ui/core/styles';

const useStyles1 = makeStyles((theme) => ({
    root: {
        '& > *': {
            marginTop: theme.spacing(2),
        },
    },
}));
const Products = ({ getProducts, products: { products, loading } }) => {
    const classes1 = useStyles1();
    useEffect(() => {
        getProducts()
    }, [getProducts])

    let [formdata, setFormData] = useState(1);
    let {
        step
    } = formdata;
    const handleChange = (event, value) => {
        setFormData(value);
        step = (value - 1) * 20
        console.log(step)
        formdata = step;
        console.log(formdata)
        getProducts(formdata);
    };




    return (
        <Fragment>
            {loading ? <Spinner /> : <Fragment>
                <div>

                    {products.length > 0 ? (
                        products && products.map(products => (<ProductItem key={products._id} products={products} />)))
                        : <h4>No products Found</h4>
                    }
                    <div className={classes1.root}>
                        <Pagination count={10} name="step" page={step} onChange={handleChange}

                        />

                    </div>
                </div>
            </Fragment>
            }</Fragment>
    )
}

Products.propTypes = {
    getProducts: PropTypes.func.isRequired,
    products: PropTypes.object.isRequired,
}
const mapStatToProps = state => ({
    products: state.products
})
export default connect(mapStatToProps, { getProducts })(Products)
