import { Order } from "../types/typeApp";

const postData = async (order: Order) => {

    const fetchApi = await fetch('http://localhost:8000/api/v1/order/',{
        method: 'POST',
        body: JSON.stringify(order),
        headers:{
            'Content-type': 'application/json'
        }
    })

    return fetchApi;
}

export default postData;