import React, { useState } from 'react'
import axios from 'axios';
export default () => {
    // mantener el control de lo que se escribe a través del gancho useState
    const [title, setTitle] = useState(""); 
    const [price, setPrice] = useState(-1);
    const [details, setDetails] = useState('');
    //gestor cuando se envía el formulario
    const onSubmitHandler = e => {
        //evitar el comportamiento por defecto de submit
        e.preventDefault();
        //hacer una petición POST para crear una nueva persona
        axios.post('http://localhost:8000/api/product/new', {
            title: title,
            price: price,
            description: details    
        })
            .then(res=>{
                console.log(res);
                setTitle('');
                setPrice('');
                setDetails('');
            })
            .catch(err=>console.log(err))
    }
    //onChange para actualizar firstName y lastName
    return (
        <form onSubmit={onSubmitHandler}>
            <p>
                <label>Title</label><br/>
                <input type="text" onChange = {(e)=>setTitle(e.target.value)} value={title}/>
            </p>
            <p>
                <label>Price</label><br/>
                <input type="number" onChange = {(e)=>setPrice(e.target.value)} value={price}/>
            </p>
            <p>
                <label>Description</label><br/>
                <input type="text" onChange = {(e)=>setDetails(e.target.value)} value={details}/>
            </p>
            <input type="submit"/>
        </form>
    )
}
