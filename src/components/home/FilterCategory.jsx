import { useEffect } from "react"
import useFetch from "../../hooks/useFetch"
import { getAllProductsThunk } from '../../store/slices/products.slice'
import { useDispatch } from 'react-redux'
import "../../pages/home.css"


const FilterCategory = () => {

    const dispatch = useDispatch()

    const url = import.meta.env.VITE_REACT_APP_URL
    const URL_BASE = `${url}/categoris`
    const [categories, getAllCategories] = useFetch(URL_BASE)

    useEffect(() => {
        getAllCategories()
    },[])


    const handleClickCategories = (id) => {
        const url = `${URL_BASE}/products?categoris=${id}`
        dispatch(getAllProductsThunk(url))
    }

    const handleClickAllProducts = () => {
        dispatch(getAllProductsThunk())
    }



    return (
        <section>
            <h3 className='filter__byCategory-name'>Category</h3>



            <ul className='filter__byCategory-ul'>
                <li className='filter__byCategory-li' onClick={handleClickAllProducts} >All products</li>
                {
                    categories?.map(category => (
                        <li 
                            className='filter__byCategory-li'
                            onClick={() => handleClickCategories(category.id)}
                            key={category.id} >
                            {category.name}
                        </li>
                    ))
                }
            </ul>
        </section>
    )
}

export default FilterCategory