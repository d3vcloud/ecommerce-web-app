import React from 'react'
import { Route, Switch } from 'react-router-dom';
import Checkout from '../../pages/Checkout/Checkout';
import Home from '../../pages/Home/Home';
import NavBar from '../NavBar/NavBar'

type Props = {
    handleOpen: (state: boolean) => void;
}

const Navigation = ({ handleOpen }: Props) => {
    return (
        <>
            <NavBar handleOpen={ handleOpen }/>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/checkout' component={Checkout} />
            </Switch>
        </>
    )
}

export default Navigation;
