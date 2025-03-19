import React from 'react'
import Childcomponent from './Childcomponent';

function Functionprops() {

        const handleClick =()=>{
            alert("hello world");
        };

  return (
    <div>
        <h1>Parent Components</h1>
        <Childcomponent clickhere={handleClick}/>
    </div>
  )
}

export default Functionprops