import { Button, Card } from 'react-bootstrap';
import { ProductItem } from '../../../types/typeApp';

import './styles.css'

type Props = {
    product: ProductItem;
    handleAddToCart: (product: ProductItem) => void;
}

const Product = ({product, handleAddToCart}: Props) => {
    return (
        <Card style={{ width: '15rem', margin: '5px' }}>
            <Card.Img variant="top"  src={product.image} className='card-img'/>
            <Card.Body>
                <Card.Title className='card-title'>{product.title}</Card.Title>
                <Card.Text className='card-description'>
                    {product.description}
                </Card.Text>
                Precio: ${product.price}
                <Button variant="primary" onClick={() => handleAddToCart(product)}>Agregar al carrito</Button>
            </Card.Body>
        </Card>
    )
}

export default Product;
