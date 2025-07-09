import { useContext } from "react"
import { CartContext } from '../context/CartContext'
import { useNavigate } from 'react-router-dom'
import { ListGroup, Button } from 'react-bootstrap'

function CartContainer () {
    const { cart, getTotal, eliminarDelCarrito } = useContext(CartContext)
    const total = getTotal()
    const navigate = useNavigate()

    return (
        <div className="container mt-5">
            <h2>Tu carrito</h2>
            <ListGroup className="mb-3">
                {cart.map(prod => (
                    <ListGroup.Item key={prod.id} className="d-flex justify-content-between align-items-center">
                        <div>
                            <strong>{prod.title}</strong> x {prod.count}
                        </div>
                        <Button variant="danger" onClick={() => eliminarDelCarrito(prod.id)}>X</Button>
                    </ListGroup.Item>
                ))}
            </ListGroup>
            <h3>Total: ${total}</h3>
            <Button variant="success" onClick={() => navigate('/checkout')}>Ir al checkout</Button>
        </div>
    )
}

export default CartContainer