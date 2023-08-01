import {useRef, useState, useMemo} from "react";

function App() {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [products, setProducts] = useState([]);

    const nameRef = useRef();

    const handleAdd = () => {
        setProducts([...products, {
            name,
            price: +price
        }])
        setName('');
        setPrice('');
        nameRef.current.focus();
    }

    const total = useMemo(() => {
        return products.reduce((total, currentValue) =>
            total + currentValue.price
        , 0)
    }, [products])

    return (
        <div style={{padding: '10px 32px'}}>
            <label htmlFor="name">Product name: </label>
            <input
                ref={nameRef}
                id="name"
                value={name}
                placeholder="Enter product name"
                onChange={event => setName(event.target.value)}
            />
            <br/>
            <label htmlFor="price">Price: </label>
            <input
                id="price"
                value={price}
                placeholder="Enter price"
                onChange={event => setPrice(event.target.value)}
            />
            <br/>
            <button onClick={handleAdd}>Add</button>
            <br/>
            <p>Total: {total}</p>
            <br/>
            <ul>
                {products.map((product) => {
                    return (
                        <li>{product.name} - {product.price}</li>
                    )
                })}
            </ul>
        </div>
    );
}

export default App;
