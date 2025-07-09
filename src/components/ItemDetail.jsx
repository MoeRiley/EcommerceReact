import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import ItemCount from './ItemCount'

function ItemDetail ({ detail }) {
    return (
        <Container className="mt-5">
            <Row className="justify-content-center">
                <Col md={6}>
                    <Card bg="dark" text="light">
                        <Card.Img variant="top" src={detail.thumbnail} />
                        <Card.Body>
                            <Card.Title>{detail.title}</Card.Title>
                            <Card.Text>{detail.description}</Card.Text>
                            <Card.Text className="fw-bold fs-4">${detail.price}</Card.Text>
                            <ItemCount item={detail} />
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>        
    )
}

export default ItemDetail