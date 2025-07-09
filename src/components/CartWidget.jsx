import Button from 'react-bootstrap/Button'
import { useContext } from "react"
import { CartContext } from '../context/CartContext'

function CartWidget () {
    const { getCantidad } = useContext(CartContext)
    const cantidad = getCantidad()
    
    return (
        <Button>Carro 🛒 {cantidad}</Button>
    )
}
export default CartWidget