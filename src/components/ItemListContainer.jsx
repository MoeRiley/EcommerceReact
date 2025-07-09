import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { getProducts } from '../firebase/db'
import ItemList from './ItemList'

function ItemListContainer ( ) {
    const [items, setItems] = useState([])
    const { categoryName } = useParams()

    useEffect(() => {
        getProducts()
            .then(products => {
                setItems(products)
            }) 
    }, [categoryName])

    return (
        <ItemList items = {items} />
    )
}

export default ItemListContainer