import { useState } from 'react'
import Button from 'react-bootstrap/Button'
import ButtonGroup from 'react-bootstrap/ButtonGroup'

function ItemCount({ initial = 1, stock = 10, onAdd = () => {} }) {
    const [count, setCount] = useState(initial)

    const increment = () => {
        if (count < stock) setCount(count + 1)
    }

    const decrement = () => {
        if (count > 1) setCount(count - 1)
    }

    return (
        <div className="d-flex align-items-center justify-content-center mt-3">
            <ButtonGroup>
                <Button variant="outline-light" onClick={decrement}>-</Button>
                <Button variant="dark" disabled>{count}</Button>
                <Button variant="outline-light" onClick={increment}>+</Button>
            </ButtonGroup>
        </div>
    )
}

export default ItemCount