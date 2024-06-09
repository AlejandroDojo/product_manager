import { useEffect, useState } from 'react';
import {useNavigate, useParams } from 'react-router-dom';
import Product from '../components/Product/Product';
import axios from 'axios';

const UpdateProduct = ({ updateItem }) => {
    const params = useParams();
    const navigate = useNavigate();
    const [product, setProduct] = useState(null);
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState(-1);
    const [details, setDetails] = useState('');

    useEffect(() => {
        const getProduct = async () => {
            try {
                const res = await axios.get(`http://localhost:8000/api/product/${params.id}`);
                const productData = res.data;
                setProduct(productData);
                setTitle(productData.title);
                setPrice(productData.price);
                setDetails(productData.description);
            } catch (err) {
                console.error(err);
            }
        };

        getProduct();
    }, [params.id]);

    const formValidation = (item) => {
        if (product) {
            if (!item.title) {
                item.title = product.title;
            }
            if (!item.price) {
                item.price = product.price;
            }
            if (!item.description) {
                item.description = product.description;
            }
        }
    };

    const onSubmitHandler = async (e) => {
        e.preventDefault();

        let updatedItem = {
            title: title,
            price: price,
            description: details
        };

        formValidation(updatedItem);

        try {
            const res = await axios.put(`http://localhost:8000/api/product/update/${params.id}`, updatedItem, {
                headers: {
                    'Content-type': 'application/json'
                },
            });

            updateItem(params.id, updatedItem);
            setProduct(updatedItem); // Actualiza el producto en el estado

            // Limpia los campos del formulario
            setTitle('');
            setPrice(-1);
            setDetails('');
            navigate('/')
        } catch (err) {
            console.error('Error updating the product:', err);
        }
    };

    return (
        <div>
            <h2>Update an item</h2>
            {product ? (
                <div>
                    <form onSubmit={onSubmitHandler}>
                        <p>
                            <label>Title</label><br />
                            <input type="text" onChange={(e) => setTitle(e.target.value)} value={title} />
                        </p>
                        <p>
                            <label>Price</label><br />
                            <input type="number" onChange={(e) => setPrice(parseFloat(e.target.value))} value={price} />
                        </p>
                        <p>
                            <label>Description</label><br />
                            <input type="text" onChange={(e) => setDetails(e.target.value)} value={details} />
                        </p>
                        <input type="submit" />
                    </form>
                    <Product title={product.title} price={product.price} description={product.description} />
                </div>
            ) : (
                "Loading..."
            )}
        </div>
    );
};

export default UpdateProduct;