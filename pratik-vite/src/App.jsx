// import React from "react";


// function App(){

//   let count = 0

//   function increase(){
//     count = count + 1;
//     console.log(count)
//   }

//   return(
//     <div>
//       <h1>This is React + vite</h1>
//       <h2>Counter : {count}   </h2>
//       <button onClick={increase}>Increase</button>
//     </div>
//   )
// }

// export default App

// import { useState } from "react";

//Example 1 - Insta Likes Button

// function App(){

//   const [likes , setLikes] = useState(10);

//   function increase(){
//         setLikes(likes+1)
//         console.log(likes)
//   }

// return(
//   <div>
//     <h2>Likes: {likes} </h2>
//     <button onClick={increase}>💖 Like</button>
//   </div>
// )

// }

// export default App


//Example 3 - Passord show/hide
import { useState } from "react";
function App(){

const [show , setShoow] = useState(false) 

return(
  <div>
    <input type={show ? "text" : "password"  }   placeholder="Enter Your Password"/>

    <button onClick={ ()=> setShoow(!show)    }>
      Show/Hide
    </button>
  </div>
)

}

export default App