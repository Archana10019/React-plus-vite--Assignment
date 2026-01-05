<<<<<<< HEAD
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import Table from "./components/Table";
import Form from "./components/Form";

function App() {
  return (
    <div className="space-y-16 p-6 bg-gray-50 min-h-screen">
      <Navbar />

      {/* Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card />
        <Card />
        <Card />
      </div>

      {/* Table Section */}
      <Table />

      {/* Form Section */}
      <Form />

      
      
    
     

     
     <section className="flex flex-col md:flex-row items-center gap-6">
        <h2 className="text-xl md:text-3xl lg:text-5xl font-bold
          bg-linear-to-r from-purple-500 to-pink-500
          bg-clip-text text-transparent">
          Responsive Gradient Heading
        </h2>

        <img
          src="data:image/jpeg;base64,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"
          className="rounded-xl shadow-lg hover:scale-105 transition duration-75"

        />
         <ul className="list-disc list-inside pl-5 space-y-2">
          <li className="hover:text-blue-600">Fast Performance</li>
          <li className="hover:text-blue-600">Responsive Design</li>
          <li className="hover:text-blue-600">Reusable Components</li>
        </ul>
      </section>
      </div>
     

  );
}

export default App;

=======
<<<<<<< HEAD
import React, { Suspense, lazy, useState } from "react";
//lazzy
const Section = lazy(() => import('./Section'));


function App(){
  const[count,setCount]=useState(0)
  console.log("parent component render")

  return(
    <div>
      <h1>Counter:{count}</h1>
    <button onClick={()=>setCount(count+1)}> increment counter</button>
    <hr></hr>

    <Suspense fallback={<p>Loading.....</p>}>
    <Section/>
    </Suspense>
    </div>
  )
}
export default App;
=======
<<<<<<< HEAD
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
=======
import React from "react";

import MessageCard  from "./MessageCard"; 
  const App=()=>{
    return(
        <div>
            <h1>Welcome to the Message Card</h1>
            <MessageCard title="Hello World" message="This is a simple message card component."/>
            
            <MessageCard title="welcome" message="This is a welcome message card component."/>
        </div>
    );
 };
 export default App;




>>>>>>> c101b4064cd8d3a32a3026b89ccd11c5de8dedfa
>>>>>>> dd792fb042424a5072071b2fa04a35819122f5a3
>>>>>>> 39406657f66f3cfcccae7b551885f7909f830fd7
