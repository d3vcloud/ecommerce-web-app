import React from 'react'
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import useFetch from '../../hooks/useFetch';
import { ProductItem } from '../../types/typeApp';
import Product from './Product/Product';

const ListProducts = () => {

    const { dispatch } = useContext(CartContext);

    const { products, isLoading } = useFetch();
    

    const handleAddToCart = (product: ProductItem) => {
        dispatch({
            payload: product,
            type: 'ADD'
        });
    }

    if(isLoading) return <h1>Cargando...</h1>

    return (
        <>
            {
                products.map(product => (
                    <Product 
                        key={product.id}
                        product={product}
                        handleAddToCart={handleAddToCart}/>
                ))
            }
        </>
    )
}

export default ListProducts;
