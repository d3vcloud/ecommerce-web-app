import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import { useContext } from 'react';
import { Badge, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import { getTotalItems } from '../../helpers/calculate';

type Props = {
    handleOpen: (state: boolean) => void;
}

const NavBar = ({ handleOpen }: Props) => {

    const { cartItems } = useContext(CartContext);

    return (
        <Navbar bg="dark" variant='dark' expand="lg">
           <Container>
           <Link className='navbar-brand' to='/'>Ecommerce</Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Link className='nav-link' to="/">Home</Link>
                </Nav>
            </Navbar.Collapse>
            <FontAwesomeIcon 
                icon={faShoppingCart}
                color='white'
                size='2x'
                style={{ cursor: 'pointer'}}
                onClick={ () => handleOpen(true)} />
            <Badge bg='secondary'>{ getTotalItems(cartItems)}</Badge>
           </Container>
        </Navbar>
    )
}

export default NavBar;
