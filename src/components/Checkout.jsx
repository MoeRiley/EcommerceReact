import { useState, useEffect, useContext } from "react"
import { CartContext } from '../context/CartContext'
import { createOrder } from '../firebase/db'
import { serverTimestamp } from 'firebase/firestore'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import { Container, Card, Button, Form } from 'react-bootstrap'

function Checkout () {
    const { cart, setCart } = useContext(CartContext)
    const navigate = useNavigate()
    const [ordenExitosa, setOrdenExitosa] = useState(false)

    useEffect(() => {
        if (!ordenExitosa && cart.length === 0) {
            Swal.fire({
                icon: 'warning',
                title: 'Carrito vacío',
                text: 'No puedes acceder al checkout sin productos en el carrito.',
                confirmButtonText: 'Volver a la tienda'
            }).then(() => {
                navigate('/')
            })
        }
    }, [cart.length, navigate, ordenExitosa])

    const handleSubmit = e => {
        e.preventDefault()

        const form = e.target
        const email = form.email.value
        const nombre = form.nombre.value
        const telefono = form.telefono.value

        createOrder({
            email,
            nombre,
            telefono,
            products: cart,
            time: serverTimestamp()
        }).then(() => {
            setOrdenExitosa(true)
            Swal.fire({
                icon: 'success',
                title: 'Compra realizada',
                text: '¡Gracias por tu compra!',
                confirmButtonText: 'Volver al inicio'
            }).then(() => {
                setCart([])
                navigate('/')
            })
        })
    }

    if (cart.length === 0 && !ordenExitosa) {
        return null
    }

    return (
        <Container className="d-flex justify-content-center mt-5">
            <Card bg="dark" text="light" className="p-4 w-75">
                <h3 className="mb-4">Checkout</h3>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="correo@ejemplo.cl"
                            required
                            className="bg-dark text-light border-light"
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="nombre">
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Usuario Ejemplo"
                            required
                            className="bg-dark text-light border-light"
                        />
                    </Form.Group>
                    <Form.Group className="mb-4" controlId="telefono">
                        <Form.Label>Teléfono</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="+56912345678"
                            required
                            className="bg-dark text-light border-light"
                        />
                    </Form.Group>

                    <div className="d-flex justify-content-start gap-3">
                        <Button variant="primary" type="submit">
                            Finalizar compra
                        </Button>
                        <Button
                            variant="secondary"
                            onClick={(e) => {
                                e.preventDefault()
                                navigate('/cart')
                            }}
                        >
                            Volver al carrito
                        </Button>
                    </div>
                </Form>
            </Card>
        </Container>
    )
}

export default Checkout