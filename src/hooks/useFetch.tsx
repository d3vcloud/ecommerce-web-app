import { useEffect, useState } from "react";
import getProducts from "../helpers/getData";
import { ProductFetch, ProductItem } from "../types/typeApp";

const useFetch = () => {

    const [data, setData] = useState<ProductFetch>({
        products: [],
        isLoading: true,
        isError: false
    });
    

    useEffect(() => {

        getProducts()
            .then(data => {

                const customData = data.map((product: ProductItem) => ({ ...product, description: product.description.substring(0,55)}));
                
                setData({
                    products: customData,
                    isLoading: false,
                    isError: false
                })
            })
            .catch(err => {
                setData({
                    products: [],
                    isLoading: false,
                    isError: true
                })
            })

    },[]);

    return data;

}

export default useFetch;