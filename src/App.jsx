import React, { useState, useMemo, useCallback } from "react";
import ProductList from"./components/ProductList";

const products =[
  {id:1,name:'Product A',price:10},
   {id:2,name:'Product B',price:20},
    {id:3,name:'Product C',price:30},

];

function App(){
  const[counter,setCounter]=useState(0);


   const totalPrice = useMemo(() => {
    console.log('Recalculating total price'); // Demonstrates when this runs
    return products.reduce((sum, product) => sum + product.price, 0);
  }, [products]);


   const handleProductSelect = useCallback((productId) => {
    console.log('Handling product selection for ID:', productId);
    // Example: Could update selected product state here
  }, []);



  return(
    <div className="card">
      <h1>Total price:${totalPrice}</h1>
      <button onClick={()=>setCounter(counter+1)}>increment counter:{counter}</button>
      <ProductList products={products} onSelect={handleProductSelect}/>
    </div>
  )
}
export default App;
