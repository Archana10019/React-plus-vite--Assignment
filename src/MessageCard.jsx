import React from "react";
 const MessageCard=(props)=>{
    return(
        <div style={{
            border:"1px solid pink",
            padding:"15px",

        }}>
            <h2>{props.title}</h2>
            <p>{props.message}</p>
        </div>
    );
 };
 export default MessageCard;