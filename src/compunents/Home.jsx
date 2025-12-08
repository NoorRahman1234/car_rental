import React from 'react'
import Navbar from '../compunents/Navbar' 
import Herosection from '../compunents/Herosection'
import Saving from '../compunents/Saving'
import Carsection from '../compunents/Carsection'
import Infosection from '../compunents/infosection'
import Factsection from '../compunents/Factsection'
import Downloudesection from '../compunents/Downloudesection'
// import Footer from '../compunents/Footer'
import Baner from '../compunents/Baner'



function Home(){
return (
 <><div>
    <div>
      <Navbar />
    </div>
    <div>
        <Herosection />
    </div>
    <div>
      <Saving />
    </div>
    <div>
     <Infosection />
    </div>
    <div>
        <Carsection />
    </div>
    <div>
        <Factsection />
    </div>
    <div>
      <Downloudesection />
    </div>
    <div>
       <Baner />
    </div>
  
    <div>
        {/* <Footer /> */}
    </div>
    </div>
    </>
    
   
  )
  }
export default Home;
