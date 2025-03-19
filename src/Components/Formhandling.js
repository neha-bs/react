import React, { useState } from 'react'

function Formhandling() {

    const [state, setState] = useState({ fname: '', userEmail: '', contact: '' })

    const change = (e) => {
        setState({ [e.target.name]: e.target.value })
        // console.log(e);

    }

    console.log(state);


    return (
        <div>
            <div>
                <input type='text' onChange={change} name='fname'></input>
            </div>
            <div>
                <input type='email' onChange={change} name='userEmail'></input>
            </div>
            <div>
                <input type='text' onChange={change} name='contact' ></input>
            </div>
           

        </div>
    )
}

export default Formhandling