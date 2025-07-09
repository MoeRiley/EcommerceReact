import Button from 'react-bootstrap/Button'
import { useContext } from "react"
import { CartContext } from '../context/CartContext'
import { useNavigate } from 'react-router-dom'

function CartWidget () {
    const { getCantidad } = useContext(CartContext)
    const cantidad = getCantidad()
    const navigate = useNavigate()
    
    return (
        <Button onClick={() => navigate('/cart')}>Carro 🛒 {cantidad}</Button>
    )
}
export default CartWidget