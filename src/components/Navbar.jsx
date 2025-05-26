import CartWidget from "./CartWidget"

const Navbar = () => {
    return (
        <nav style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '10px 10px',
            backgroundColor: 'rgba(255, 255, 255, 0.89)',
            borderBottom: '1px solid black',
            zIndex: 1
        }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                <img
                    src="./media/event-carts-logo.png"
                    alt="Logo"
                    style={{ height: 40 }}
                />
                <div style={{ fontSize: '20px', fontWeight: 'bold', color: 'black' }}>
                    Event Carts
                </div>
                <div style={{ fontSize: '16px', color: 'black' }}>
                    Carts
                </div>
                <div style={{ fontSize: '16px', color: 'black' }}>
                    Barras
                </div>
            </div>
            <CartWidget/>
        </nav>
    )
}

export default Navbar