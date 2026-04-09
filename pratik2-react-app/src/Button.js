 import React from "react";

 function Button() {

    function Notification() {
        alert("Applied") 
    }

    return(
        <div>
            <button onClick={Notification}  style={{border: 'none' , backgroundColor:'blue' , color:'white' , padding:'10px'}}>Apply Now</button>
        </div>
    )
 }
 export default Button;
 // done