import { useState } from 'react'
import { CartContext } from './CartContext'

function CartProvider ({ children }) {
    const [cart, setCart] = useState([])
    
    const agregarAlCarrito = (prod) => {
        const isInCart = cart.some(item => item.id === prod.id)

        if (isInCart) {
            const productoRepetido = cart.find(item => item.id === prod.id)
            const cartSinElProductoRepetido = cart.filter(item => item.id !== prod.id)
            
            setCart([...cartSinElProductoRepetido, {...productoRepetido, count: productoRepetido.count + prod.count}])
        } else {
            setCart([...cart, prod])
        }
    }

    const getCantidad =() => {
        const cantidades = cart.map(prod => prod.count)
        const cantidad = cantidades.reduce((acc, current) => acc + current, 0)

        return cantidad 
    }

    const getTotal = () => {
        const total = cart.reduce((acc, prod) => acc + prod.price * prod.count, 0)
        
        return total
    }

    const eliminarDelCarrito = (id) => {
        const nuevoCarrito = cart.filter(item => item.id !== id)
        setCart(nuevoCarrito)
    }

    const vaciarCarrito = () => setCart([])

    return (
        <CartContext.Provider value={{ cart, agregarAlCarrito, getCantidad, getTotal, eliminarDelCarrito, setCart, vaciarCarrito }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider