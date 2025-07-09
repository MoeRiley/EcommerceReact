import { useState, useContext } from 'react'
import { CartContext } from '../context/CartContext'
import Button from 'react-bootstrap/Button'
import ButtonGroup from 'react-bootstrap/ButtonGroup'

function ItemCount ({ item }) {
    const [count, setCount] = useState(1)
    const { agregarAlCarrito} = useContext(CartContext)

    const handleSumar = () => setCount(count + 1)
    const handleRestar = () => setCount(count - 1)
    const handleAgregar = () => agregarAlCarrito({...item, count})

    return (
        <div className="d-flex align-items-center justify-content-center mt-3">
            <ButtonGroup>
                <Button variant="outline-light" onClick={handleRestar}>-</Button>
                <Button variant="dark" disabled>{count}</Button>
                <Button variant="outline-light" onClick={handleSumar}>+</Button>
                <Button variant="primary" className="mt-3" onClick={handleAgregar}>Agregar al carrito</Button>
            </ButtonGroup>
        </div>
    )
}





//function ItemCount({ item, initial = 1, stock = 10, onAdd = () => {} }) {
//    const [count, setCount] = useState(initial)
//    const { agregarAlCarrito } = useContext(CartContext)
//    
//    const increment = () => {
//        if (count < stock) setCount(count + 1)
//    }

//    const decrement = () => {
//        if (count > 1) setCount(count - 1)
//    }

//    const handleAgregar = () => agregarAlCarrito(item)

//    return (
//        <div className="d-flex align-items-center justify-content-center mt-3">
//            <ButtonGroup>
//                <Button variant="outline-light" onClick={decrement}>-</Button>
//                <Button variant="dark" disabled>{count}</Button>
//                <Button variant="outline-light" onClick={increment}>+</Button>
//                <Button variant="primary" className="mt-3" onClick={handleAgregar}>Agregar al carrito</Button>
//            </ButtonGroup>
//        </div>
//    )
//}

export default ItemCount