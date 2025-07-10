import { useState, useContext } from 'react'
import { CartContext } from '../context/CartContext'
import Button from 'react-bootstrap/Button'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Swal from 'sweetalert2'

function ItemCount ({ item }) {
    const [count, setCount] = useState(1)
    const { agregarAlCarrito} = useContext(CartContext)

    const handleSumar = () => setCount(count + 1)
    const handleRestar = () => {
        if (count > 1) {
            setCount(count - 1)
        }
    }
    const handleAgregar = () => {
        agregarAlCarrito({...item, count})
        Swal.fire({
            icon: 'success',
            title: 'Agregado al carrito',
            text: `${item.title} x${count} fue agregado.`,
            timer: 1500,
            showConfirmButton: false
        })
    }

    return (
        <div className="d-flex flex-column align-items-center justify-content-center mt-3">
            <ButtonGroup>
                <Button variant="outline-light" onClick={handleRestar}>-</Button>
                <Button variant="dark" disabled>{count}</Button>
                <Button variant="outline-light" onClick={handleSumar}>+</Button>
            </ButtonGroup>

            <Button
                variant="primary"
                className="mt-3"
                onClick={handleAgregar}
            >
                Agregar al carrito
            </Button>
        </div>
    )
}

export default ItemCount