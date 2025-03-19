import React, { useState } from 'react'

function Form2() {

    const [state, setState] = useState({ fname: '', userEmail: '', contact: '' })

    const change = (e) => {
        setState({...state,[e.target.name]: e.target.value });
 
    }

    console.log(state);
                      
    return (
        <div>
            <input type='text' onChange={change} name='fname'></input>
            <input type='email' onChange={change} name='userEmail'></input>
            <input type='text' onChange={change} name='contact'></input>
        </div>
    )
}

export default Form2