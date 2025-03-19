import React from 'react'
import Navbar from './Navbar';
import Middlebar from './Middlebar';

function ConditionalRendering() {

    let a = true;

    if (a) {
        return (
            <div>
                <Navbar/>
            </div>
        )
    } 
    
    else {
        return (
            <div>
                <Middlebar/>
            </div>
        )
    }


}

export default ConditionalRendering 