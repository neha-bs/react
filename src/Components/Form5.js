import React, { useState } from 'react'
import axios from 'axios'

function Form5() {

    const [state, setState] = useState({ fname: '', userEmail: '', userPassword: '' })

    const change = (e) => {
        setState({...state, [e.target.name]: e.target.value })
    }



    
    const click=(e)=>{
        e.preventDefault();
           console.log(state);
        axios.post('https://jsonplaceholder.typicode.com/posts',state)
        .then((res)=>{
            console.log(res);
            setState(res.data)
            
        })

        .catch((err)=>{
            console.log(err);

            
        })
    
 console.log(state);
    }


    return (
        <div>
            <form>
            <div>
                <label for=''>NAME</label>
                <input type='text' onChange={change} name='fname'/>

            </div>
            <div>
            <label for=''>EMAIL</label>
                <input type='email' onChange={change} name='userEmail'/>
            </div>
            <div>
            <label for=''>PASSWORD</label>
                <input type='password' onChange={change} name='userPassword'/> 
            </div>
            <button type='submit' onClick={click}>SUBMIT</button>
            </form>
           
        </div>
    )
}

export default Form5