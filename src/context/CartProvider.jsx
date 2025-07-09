import { useState } from 'react'
import { CartContext } from './CartContext'

function CartProvider ({ children }) {
    const [cart, setCart] = useState([])
    
    const agregarAlCarrito = (prod) => {
        const isInCart = cart.some(item => item.id === prod.id)

        if (isInCart) {
            const productoRepetido = cart.find(item => item.id === prod.id)
            const cartSinElProductoRepetido = cart.filter(item => item.id !== prod.id)
            
            setCart([...cartSinElProductoRepetido, {...productoRepetido, count: productoRepetido.count + 1}])
        } else {
            setCart([...cart, prod])
        }
    }

    const getCantidad =() => {
        const cantidades = cart.map(prod => prod.count)
        const cantidad = cantidades.reduce((acc, current) => acc + current, 0)

        return cantidad 
    }

    return (
        <CartContext.Provider value={{ cart, agregarAlCarrito, getCantidad }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider