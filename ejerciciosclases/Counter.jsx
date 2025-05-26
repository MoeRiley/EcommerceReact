import { useState } from "react"

const Counter = () => {
    const [count, setCount] = useState (0);
    const handleRestar = () => setCount (count - 1);
    const handleSumar = () => setCount (count + 1);
    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10, width: 400}}>
            <p style={{border: 'solid white 1px', padding:10, borderRadius: 5}}> {count} </p>
            <div style= {{display: 'flex', gap: 10}}>
                <button style={{width: '50%'}} onClick={handleRestar}> - </button>
                <button style={{width: '50%'}} onClick={handleSumar}> + </button>
            </div>
        </div>
    )
}

export default Counter