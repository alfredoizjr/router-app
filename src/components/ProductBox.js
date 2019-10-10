import React from 'react';
import {Link} from 'react-router-dom';

const ProductBox = ({ product }) => {

    const handleREmovePlate = id => {
        console.log('remove',id);
    }

    return (
        <li className='list-group-item d-flex justify-content-between' data-category={product.category}>
            <p>
                {product.namePLate} 
                <span className='font-weight-bold'> ${product.coustPLate}</span>
            </p>
            <div>
                <Link className='btn btn-success mr-2' to={`/products/edit/${product.id}`}>Edit</Link>
                <button className='btn btn-danger' onClick={() => handleREmovePlate(product.id)}>Remove</button>
            </div>
        </li>
    );
}

export default ProductBox;