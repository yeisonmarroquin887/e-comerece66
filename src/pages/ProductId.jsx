import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../hooks/useFetch'
import ProductIdInfo from '../components/home/productId/ProductIdInfo'
import SimilarProducts from '../components/home/productId/SimilarProducts'

const ProductId = () => {
    const {id} = useParams()

    const URL_BASE = import.meta.env.VITE_REACT_APP_URL

    const url = `${URL_BASE}/products/${id}`

    const [product, getProductById]  = useFetch(url)

    useEffect(() => {
        getProductById()
    }, [url])



    return (
        <div>
            <ProductIdInfo product={product} />
            <SimilarProducts product={product} />
        </div>
    )
}

export default ProductId