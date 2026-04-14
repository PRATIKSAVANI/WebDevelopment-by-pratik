import React from "react";
import {BrowserRouter , Routes , Route , Link} from 'react-router-dom'
import Home from "./Home";
import CartPage from "./Cart";
import PageNotFound from "./PageNotFound";
import FirstPage from "./FirstPage";


function App(){
    return(
      <BrowserRouter>
      
      <nav>

        <Link to="/home" >Home</Link>  "   "
        <Link to="/cart" >Cart</Link>
       
      </nav>
      
      <Routes>

      <Route path="/"  element={<FirstPage />} />
      <Route path="/home" element={<Home />}    />
      <Route path="/cart" element={<CartPage />}  />
      <Route path="*"  element={<PageNotFound />} />

      </Routes>
       
      </BrowserRouter>  
    )
}

export default App