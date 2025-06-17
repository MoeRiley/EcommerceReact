import Item from './Item'

function ItemList({ items }) {
    return (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
            {items.map(item => (
                <Item key={item.id} item={item} />
            ))}
        </div>
    )
}

export default ItemList