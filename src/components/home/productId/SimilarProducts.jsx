import React, { useEffect } from 'react'
import useFetch from '../../../hooks/useFetch'
import CardProducts from '../cardProducts/CardProducts'
import { useNavigate } from 'react-router-dom'
import './simili.css'
const SimilarProducts = ({ product }) => {

    const BASE_URL = import.meta.env.VITE_REACT_APP_URL
    const url = `${BASE_URL}/products?categoris=${product?.categoryId}`

    const [filterProducts, getProductByCategory] = useFetch(url)

    useEffect(() => {
        if (product) {
            getProductByCategory()
        }
    }, [product])





    return (
        <section className='simi'>
            <h2 style={{color:"var(--redMain)", marginLeft:80 }}>Discover Similar Products</h2>
            <div className='products_container'>
                {
                    filterProducts?.map(prod => {
                        if(product.id !== prod.id){
                            return (
                                <CardProducts
                                    key={prod.id}
                                    product={prod}
                                />
                            )
                        }
                    })
                }
            </div>

        </section>


    )
}

export default SimilarProducts