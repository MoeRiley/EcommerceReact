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
                if (categoryName) {
                    const filtrados = products.filter(prod => prod.category === categoryName)
                    setItems(filtrados)
                } else {
                    setItems(products)
                }
            }) 
    }, [categoryName])

    return (
        <ItemList items = {items} />
    )
}

export default ItemListContainer