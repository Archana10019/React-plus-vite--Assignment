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




