import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import { useNavigate } from 'react-router'

function Item ({ item }) {
    const navigate = useNavigate()

    return (
        <Card className="h-100 d-flex flex-column bg-dark text-light">
            <Card.Img
                variant="top"
                src={item.thumbnail}
                style={{ height: '200px', objectFit: 'cover' }}
            />
            <Card.Body className="d-flex flex-column">
                <Card.Title>{item.title}</Card.Title>
                <Card.Text className="flex-grow-1" style={{ fontSize: '0.9rem' }}>
                    {item.description.length > 100
                        ? item.description.slice(0, 100) + '...'
                        : item.description}
                </Card.Text>
                <Button
                    variant="outline-light"
                    onClick={() => navigate(`/item/${item.id}`)}
                >
                    Ver más
                </Button>
            </Card.Body>
        </Card>
    )
}

export default Item