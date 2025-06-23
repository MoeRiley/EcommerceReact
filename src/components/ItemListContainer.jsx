import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import ItemList from './ItemList'

function ItemListContainer ( ) {
    const [items, setItems] = useState([])
    const { categoryName } = useParams()

    useEffect(() => {
        if (categoryName) {
            fetch (`https://dummyjson.com/products/category/${categoryName}`)
                .then (res => res.json ())
                .then (res => setItems (res.products))
        } else {
            fetch ('https://dummyjson.com/products')
                .then (res => res.json ())
                .then (res => setItems (res.products))
        } 
    }, [categoryName])

    return (
        <ItemList items = {items} />
    )
}

export default ItemListContainer