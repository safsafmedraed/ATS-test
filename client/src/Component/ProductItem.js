import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Moment from 'react-moment'
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom'

const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.background.default,
        },
    },
}))(TableRow);
const useStyles = makeStyles({
    table: {
        minWidth: 700,
    },
});

const ProductItem = ({ products: { _id, category, productName, imageUrl, createdAt, avg } }) => {

    const classes = useStyles();



    return (
        <Fragment>
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell align="right">category</StyledTableCell>
                            <StyledTableCell align="right">productName</StyledTableCell>
                            <StyledTableCell align="right">image</StyledTableCell>
                            <StyledTableCell align="right">createdAt</StyledTableCell>
                            <StyledTableCell align="right">AVG Review</StyledTableCell>
                            <StyledTableCell align="right">AVG Review</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>

                        <StyledTableRow >

                            <StyledTableCell align="right">{category}</StyledTableCell>
                            <StyledTableCell align="right">{productName}</StyledTableCell>
                            <StyledTableCell align="right"><img src={imageUrl} width='30%' /> </StyledTableCell>
                            <StyledTableCell align="right"><Moment format='YYYY/MM/DD'>{createdAt}</Moment></StyledTableCell>
                            <StyledTableCell align="right">{avg}</StyledTableCell>
                            <StyledTableCell align="right">
                                <Link to={`/Single/${_id}`}>
                                    <Button>View Details</Button></Link></StyledTableCell>

                        </StyledTableRow>

                    </TableBody>
                </Table>
            </TableContainer>

        </Fragment>

    )
}

ProductItem.propTypes = {
    products: PropTypes.object.isRequired,
}

export default ProductItem
