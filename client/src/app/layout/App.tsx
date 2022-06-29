import { Typography } from "@mui/material";
import { useEffect, useState } from "react";
import Catalog from "../../features/catalog/Catalog";
import { Product } from "../models/product";


function App() {

  const [products , setProducts] = useState<Product[]>([])

  useEffect(() => {

    fetch('http://localhost:5002/api/products')
      .then(response => response.json())
      .then(data => setProducts(data))
  } , [])

  const addProduct = () => {
    setProducts(prevState =>[...prevState, {
      id: prevState.length + 101,
      name: 'product'+ (prevState.length + 1),
      description: 'some description',
       price: (prevState.length * 100) +100,
       pictureUrl:'http://picsum.photos/200',
       brand: 'some brand',
      
      }])
  }
 
  return (
    <div className="App">
       <Typography variant='h1'>Re-Store</Typography>
       <Catalog products={products} addProduct={addProduct}/>

      

    </div>
  );
}

export default App;






