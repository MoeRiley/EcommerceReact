import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getProduct } from '../firebase/db'
import ItemDetail from './ItemDetail'

function ItemDetailContainer () {
    const [detail, setDetail] = useState({})
    const { id } = useParams()

    useEffect(() => {
        getProduct(id)
            .then(producto => setDetail(producto))
    }, [id])

    return (
        <ItemDetail detail={detail} />
    )
}

export default ItemDetailContainer