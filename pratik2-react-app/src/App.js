import React from "react";
import ProfileCard from "./ProfileCard";
function App() {

  // js part 
    var company = "AMAZON"

  return(
    <div>
           <h1>Profile Card For {company} </h1>
           <ProfileCard />
           <ProfileCard />
    </div>
  )
}
export default App 