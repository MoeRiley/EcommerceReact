import Item from './Item'
import { Container, Row, Col } from 'react-bootstrap'

function ItemList({ items }) {
    
    return (
        <Container className="mt-4">
            <Row>
                {items.map(item => (
                    <Col key={item.id} sm={12} md={6} lg={3} className="mb-4">
                        <Item item={item} />
                    </Col>
                ))}
            </Row>
        </Container>
    )
}

export default ItemList