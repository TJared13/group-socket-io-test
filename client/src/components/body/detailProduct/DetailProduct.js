import React, {useContext, useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {DataContext} from '../../../GlobalState';
import DetailProductCard from '../../utils/detailProductCard/DetailProductCard';
import FormInput from '../../utils/formInput/FormInput';


export default function DetailProduct() {
    const {id} = useParams();
    
    const state = useContext(DataContext);
    const [products] = state.products;
    const socket = state.socket;

    const [detailProduct, setDetailProduct] = useState([]);
    const [rating, setRating] = useState(0)

    useEffect(() => {
        setDetailProduct(products.filter(product => product._id === id))
    }, [id, products])

    return (
        <div className='detail_product_page'>
            {
                detailProduct.map(product => (
                    <DetailProductCard key={product._id} product={product}/>
                ))
            }

            <div className="comments">
                <h2 className="app_title">
                    Welcome to my store!
                </h2>
            
            <div className="reviews">
                <input type="radio" name="rate" id="rd-5" onChange={() => setRating(5)} />
                <label htmlFor='rd-5' className='fas fa-star'></label>

                <input type="radio" name="rate" id="rd-4" onChange={() => setRating(4)}/>
                <label htmlFor='rd-4' className='fas fa-star'></label>

                <input type="radio" name="rate" id="rd-3" onChange={() => setRating(3)}/>
                <label htmlFor='rd-3' className='fas fa-star'></label>

                <input type="radio" name="rate" id="rd-2" onChange={() => setRating(2)}/>
                <label htmlFor='rd-2' className='fas fa-star'></label>

                <input type="radio" name="rate" id="rd-1" onChange={() => setRating(1)}/>
                <label htmlFor='rd-1' className='fas fa-star'></label>


            </div>

            <FormInput id={id} socket={socket} rating={rating}/>

            </div>                
        </div>
    )
}
