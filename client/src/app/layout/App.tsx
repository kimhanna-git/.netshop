import { useEffect, useState } from "react";
import { Product } from "../models/product";

function App() {
  const [products, setProducts] = useState<Product[]>([]);
  
  useEffect(() => {
    fetch('https://localhost:5001/api/products')
      .then(response => response.json())
      .then(data => setProducts(data))
  }, [])


  function addProduct(){
    setProducts(prevState => [...prevState, {
      id: prevState.length + 101,
      name: 'product' + (prevState.length + 1), 
      price: (prevState.length * 100) + 100,
      brand: 'Gucci',
      description: 'some description',
      pictureUrl: 'http://hannapic.photos/261722'
    }])
  }
  return (
    <div>
      <h1 style={{color: 'brown'}}>.NETSHOP</h1>
      <ul>
        
        {products.map(product => (
          <li key={product.id}>{product.name} - {product.price}</li>

        ))}
      </ul>
      <button onClick={addProduct}>Add Product</button>
      
    </div>
  );
}

export default App;
