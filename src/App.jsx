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