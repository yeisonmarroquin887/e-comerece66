import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../hooks/useFetch'
import ProductIdInfo from '../components/home/productId/ProductIdInfo'
import SimilarProducts from '../components/home/productId/SimilarProducts'

const ProductId = () => {
    const {id} = useParams()

    const url = `https://e-commerce-api-v2.academlo.tech/api/v1/products/${id}`

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