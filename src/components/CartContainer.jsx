import { useContext } from "react"
import { CartContext } from '../context/CartContext'
import { useNavigate } from 'react-router-dom'
import { ListGroup, Button, Container, Row, Col, Card } from 'react-bootstrap'
import Swal from 'sweetalert2'

function CartContainer () {
    const { cart, getTotal, eliminarDelCarrito, vaciarCarrito } = useContext(CartContext)
    const total = getTotal()
    const navigate = useNavigate()

    if (cart.length === 0) {
        return (
            <Container className="mt-5">
                <Row className="justify-content-center">
                    <Col md={8}>
                        <Card bg="dark" text="light" className="p-5 text-center">
                            <h2>Tu carrito está vacío 🛒</h2>
                            <p className="text-secondary">Agrega productos para continuar con tu compra.</p>
                            <Button variant="light" onClick={() => navigate('/')}>
                                Volver al inicio
                            </Button>
                        </Card>
                    </Col>
                </Row>
            </Container>
        )
    }

    return (
        <Container className="mt-5">
            <Row className="justify-content-center">
                <Col md={8}>
                    <Card bg="dark" text="light" className="p-4">
                        <h3 className="mb-4">🛍️ Carrito de compras</h3>

                        <ListGroup variant="flush">
                            {cart.map(prod => (
                                <ListGroup.Item
                                    key={prod.id}
                                    className="d-flex justify-content-between align-items-center bg-dark text-light border-bottom"
                                >
                                    <div>
                                        <strong>{prod.title}</strong> x {prod.count}
                                    </div>
                                    <Button
                                        variant="outline-danger"
                                        size="sm"
                                        onClick={() => {
                                            eliminarDelCarrito(prod.id)
                                            Swal.fire({
                                                icon: 'info',
                                                title: 'Producto eliminado',
                                                text: `${prod.title} fue eliminado del carrito.`,
                                                timer: 1500,
                                                showConfirmButton: false
                                            })
                                        }}
                                    >
                                        X
                                    </Button>
                                </ListGroup.Item>
                            ))}
                        </ListGroup>

                        <div className="mt-4 d-flex justify-content-between align-items-center flex-wrap">
                            <h4 className="mb-3 mb-md-0">Total: ${total}</h4>
                            <div className="d-flex gap-2">
                                <Button
                                    variant="success"
                                    onClick={() => navigate('/checkout')}
                                >
                                    Ir al checkout
                                </Button>
                                <Button
                                    variant="outline-danger"
                                    onClick={() => {
                                        Swal.fire({
                                            title: '¿Estás seguro?',
                                            text: "Esto eliminará todos los productos del carrito.",
                                            icon: 'warning',
                                            showCancelButton: true,
                                            confirmButtonColor: '#d33',
                                            cancelButtonColor: '#6c757d',
                                            confirmButtonText: 'Sí, vaciar',
                                            cancelButtonText: 'Cancelar'
                                        }).then((result) => {
                                            if (result.isConfirmed) {
                                                vaciarCarrito()
                                                Swal.fire({
                                                    icon: 'success',
                                                    title: 'Carrito vaciado',
                                                    text: 'Todos los productos han sido eliminados.',
                                                    timer: 1500,
                                                    showConfirmButton: false
                                                })
                                            }
                                        })
                                    }}
                                >
                                    🗑️ Vaciar carrito
                                </Button>
                            </div>
                        </div>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default CartContainer