
import { faMinus, faPlus, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useContext } from 'react';
import { Button } from 'react-bootstrap';
import { CartContext } from '../../../context/CartContext';
import { CartItem } from '../../../types/typeApp';
import './styles.css';

type Props = {
    item: CartItem
}

const Item = ({ item }: Props) => {

    const { dispatch } = useContext(CartContext);

    return (
        <>
            <div className='shopping-cart-item'>
                <div className="item-action">
                    <Button 
                        variant='secondary'
                        onClick={() => dispatch({
                            payload: item,
                            type: 'ADD'
                        })}>
                        <FontAwesomeIcon icon={faPlus} color='white'/>
                    </Button>
                    <span>{item.amount}</span>
                    <Button 
                        variant='secondary'
                        onClick={() => dispatch({
                            payload: item.id,
                            type: 'REMOVE'
                        })}>
                        <FontAwesomeIcon icon={faMinus} color='white'/>
                    </Button>
                </div>
                <div className="item-detail">
                    <div className="item-detail-image">
                        <img src={item.image} alt={item.title} />
                    </div>
                    <div className="item-detail-info">
                        <div className="item-detail-info-name">
                            {item.title}
                        </div>
                        <div className="item-detail-info-prices">
                            <span>${item.price}</span>
                        </div>
                    </div>
                </div>
                <div className="item-action-remove">
                    <Button
                        variant='danger'
                        title='Retir producto'
                        onClick={() => dispatch({
                            payload: item.id,
                            type: 'REMOVE-ALL'
                        })}>
                        <FontAwesomeIcon icon={faTrashAlt} color='white'/>
                    </Button>
                </div>
            </div>   
        </>
    )
}

export default Item;
