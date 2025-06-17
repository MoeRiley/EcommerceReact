import Card from 'react-bootstrap/Card'
import ItemCount from './ItemCount'

function ItemDetail ({ detail }) {
    //console.log(detail)
    return (
        <Card>
            <Card.Img variant="top" src={detail.thumbnail} />
            <Card.Body>
                <Card.Title>{detail.title}</Card.Title>
                <Card.Text>{detail.description}</Card.Text>
            </Card.Body>
            <ItemCount/>
        </Card>
    )
}

export default ItemDetail