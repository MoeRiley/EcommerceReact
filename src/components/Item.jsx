import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import { useNavigate } from 'react-router'

function Item ({ item }) {
    const navigate = useNavigate()
    //console.log(item)

    return (
        <Card>
            <Card.Img variant="top" src={item.thumbnail} />
            <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>{item.description}</Card.Text>
                <Button variant="primary" onClick={() => navigate(`/item/${item.id}`)}>ver más</Button>
            </Card.Body>
        </Card>
    )
}

export default Item