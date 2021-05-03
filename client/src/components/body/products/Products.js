import React, {useContext} from 'react';
import {DataContext} from '../../../GlobalState';
import ProductCard from '../../utils/productCard/ProductCard';

function Products() {
    const state = useContext(DataContext);
    const [products] = state.products;
    


    return (
        <div className='products_page'>
            {
               products.map(product => (
                   <ProductCard key={product._id} product={product} />
               )) 
            }
        </div>
    )
}

export default Products;
