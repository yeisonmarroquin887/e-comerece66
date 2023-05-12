import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";


const productsSlice = createSlice({
    name: "products",
    initialState: null,
    reducers:{
        setProductsGlobal: (state, action) => action.payload
    }
})


export const {setProductsGlobal} = productsSlice.actions

export default productsSlice.reducer


//const allBackend = `https://documenter.getpostman.com/view/17877993/2s8ZDczLBj`

export const getAllProductsThunk = (url = `https://e-commerce-api-v2.academlo.tech/api/v1/products` ) => dispatch =>{
    axios(url)
    .then(res => dispatch(setProductsGlobal(res.data)))

    .catch(err => console.error(err))
} 