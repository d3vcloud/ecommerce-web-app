import { FormEvent, useContext, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { CartContext } from "../../context/CartContext";
import postData from "../../helpers/postData";
import useForm from "../../hooks/useForm";
import { Customer, Order } from "../../types/typeApp";

const initialState = {
    name: '',
    lastName: '',
    email: '',
    address: ''
}

const notify = (msj: string) => toast(msj);

const Form = () => {
    
    const {cartItems, dispatch } = useContext(CartContext);
    const {name, email, lastName, address, handleInputChange, resetValues } = useForm<Customer>(initialState);
    const [showToast, setShowToast ] = useState(false);
    
    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        
        setShowToast(true);

        const orderDetails = cartItems.map(({id, image, ...item}) => item);

        if(orderDetails.length > 0){
            
            const order: Order = {
                customer: {
                    name, email, lastName, address
                },
                order_details: orderDetails
            }
            
            const fetchApi = await postData(order);
            
            if(!fetchApi.ok){
                notify('No se pudo procesar la orden...Intentelo nuevamente');
            }else{
                notify('Orden realizada exitosamente');

                resetValues();

                dispatch({
                    payload: [],
                    type: 'CLEAR'
                });
                
            }
        }else {
            notify('No se puede procesar una orden sin productos');
        }
        
        setTimeout(() => setShowToast(false),5000);
    }
    
    
    return (
        <div className='col-md-7 col-lg-8'>
            <h4 className='mb-3'>Checkout</h4>
            <form autoComplete='off' onSubmit={ handleSubmit }>
                <div className="row g-3">
                    <div className="col-sm-6">
                        <label htmlFor="name" className='form-label'>Nombres</label>
                        <input type="text" className='form-control' name='name' id='name' placeholder='Nombre..' value={name} onChange={handleInputChange}/>
                    </div>
                    <div className="col-sm-6">
                        <label htmlFor="lastName" className='form-label'>Apellidos</label>
                        <input type="text" className='form-control' name='lastName' id='lastName' placeholder='Apellidos..' value={lastName} onChange={handleInputChange}/>
                    </div>
                    <div className="col-12">
                        <label htmlFor="email" className='form-label'>Email</label>
                        <input type="email" className='form-control' name='email' id='email' placeholder='Email..' value={email} onChange={handleInputChange}/>
                    </div>
                    <div className="col-12">
                        <label htmlFor="address" className='form-label'>Dirección</label>
                        <input type="text" className='form-control' name='address' id='address' placeholder='Dirección..' value={address} onChange={handleInputChange}/>
                    </div>
                </div>
                <br />
                <button className='w-100 btn btn-primary' type='submit'>Procesar Orden</button>
                {
                    showToast && <Toaster 
                        toastOptions={{
                            position: 'top-right',
                            duration: 2000,
                        }}/>
                }
            </form>
        </div>
    )
}

export default Form;
