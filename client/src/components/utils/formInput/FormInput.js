import React, {useRef, useEffect} from 'react';
import {patchData} from '../../utils/FetchData';
import './FormInput.css';

export default function FormInput({id, socket, rating}) {
    const nameRef = useRef();
    const contentRef = useRef();

    const commentSubmit = () => {
        const username = nameRef.current.value;
        const content = contentRef.current.innerHTML;

        if(!username.trim()) return alert('Not Empty!')
        if(contentRef.current.textContent.trim().length < 5)
            return alert('Content is too short, must be at least 5 characters')

        const createdAt = new Date().toISOString();

        socket.emit('createComment', {
            username, content, product_id: id, createdAt, rating
        })

        if(rating && rating !== 0) {
            patchData(`/api/products/${id}`, {rating})
        }

        contentRef.current.innerHTML = ''
    }

    return (
        <div className='form_input'>
            <p>Name</p>
            <input type='text' ref={nameRef}/>

            <p>Comment</p>
            <div ref={contentRef} 
            contentEditable='true' 
            style={{
                height: '100px',
                border: '1px solid #ccc',
                padding: '5px 10px',
                outline: 'none'
            }}
            />

            <button onClick={commentSubmit} >Send</button>
        </div>
    )
}
