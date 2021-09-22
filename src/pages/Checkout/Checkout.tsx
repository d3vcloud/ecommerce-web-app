import React from 'react'
import { Container,  Row } from 'react-bootstrap';
import Form from '../../components/FormCheckout/Form';
import OrderSummary from '../../components/OrderSummary/OrderSummary';

const Checkout = () => {
    return (
        <Container>
            <div className='py-5 text-center'>
                <h2>Último paso</h2>
                <p className='lead'>Para finalizar tu compra, completa el siguiente formulario</p>
            </div>
            <Row>
                <Form />
                <OrderSummary />
            </Row>
        </Container>
    )
}

export default Checkout;
