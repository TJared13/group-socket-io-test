import React from 'react';
import './Rating.css';

export default function Rating({props}) {

    const rate = 100 - (props.rating / props.numReviews * 20);
    const style_star = {
        clipPath: props.numReviews === 0 ? `inset(0 100% 0 0)` : `inset(0 ${rate}% 0 0)`
    }

    return (
        <div className='rating'>
            <div className="star" >
                <i class='far fa-star'></i>
                <i class='far fa-star'></i>
                <i class='far fa-star'></i>
                <i class='far fa-star'></i>
                <i class='far fa-star'></i>

                <div className="star-1" style={style_star}>
                    <i class='fas fa-star'></i>
                    <i class='fas fa-star'></i>
                    <i class='fas fa-star'></i>
                    <i class='fas fa-star'></i>
                    <i class='fas fa-star'></i>
                </div>
            </div>
        </div>
    )
}
