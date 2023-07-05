import axios from "axios"
import getConfigToken from "../utils/getConfigToken"
import { getAllProductsCartThunk } from "../store/slices/cart.slice"
import { useDispatch } from "react-redux"


const useCrudCart = () =>{

    const dispatch = useDispatch()



    const URL_BASE = import.meta.env.VITE_REACT_APP_URL
    const addProductToCart = data =>{
        const url = `${URL_BASE}/cart`
        axios.post(url, data, getConfigToken())
        .then(res =>{
            console.log(res.data)
            dispatch(getAllProductsCartThunk())
        } )

        .catch(err => console.log(err))
    }





    const deleteProductsFromCart = id =>{
        
        const url = `${URL_BASE}/cart/${id}`
        axios.delete(url, getConfigToken())
        .then(res =>{
            console.log(res.data)
            dispatch(getAllProductsCartThunk())
        } )

        .catch(err => console.log(err))

    }




    const updateProductInCart = (id, data) =>{
        const url = `${URL_BASE}/cart/${id}`
        axios.put(url, data, getConfigToken())
        .then(res =>{
            console.log(res.data)
            dispatch(getAllProductsCartThunk())
        } )


        .catch(err => console.log(err))
    }
    
    return {addProductToCart, deleteProductsFromCart, updateProductInCart}  
}

export default useCrudCart