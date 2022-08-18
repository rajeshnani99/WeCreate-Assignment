
import React from 'react';
import './App.css';
import pic from "../src/assets/Product Design.png"

function App() {
  return (
<div className='Header'>
<div className='text'>
<h1>Product Design</h1>
<p>Our Multifaceted apps are custom bulit and develop to support  multiple platforms including both anderiod and ios, making apps accessible for all</p>
</div>
<div className='main'>
  <img src={pic} alt="product" className='product-img'/>
</div>
</div>
   
    
  );
}

export default App;
