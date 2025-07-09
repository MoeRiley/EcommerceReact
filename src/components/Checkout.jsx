import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { useContext } from "react"
import { CartContext } from '../context/CartContext'
import { createOrder } from '../firebase/db'
import { serverTimestamp } from 'firebase/firestore'

function Checkout () {
    const { cart } = useContext(CartContext)

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
        })
    }

    return (
        <div className='d-flex justify-content-center mt-5'>
            <Form className='w-50' onSubmit={handleSubmit}>
                <Form.Group className="mb-30" controlId="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="correo@ejemplo.cl" required/>
                </Form.Group>
                <Form.Group className="mb-30" controlId="nombre">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control type="text" placeholder="usuario ejemplo" required/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="telefono">
                    <Form.Label>Teléfono</Form.Label>
                    <Form.Control type="text" placeholder="+56987548965" required/>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    )
}

export default Checkout