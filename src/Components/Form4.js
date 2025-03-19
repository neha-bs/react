import React, { useState } from 'react'
// import './Password.css';

function Form4() {

    const [state, setState] = useState({ password: '', confirmpassword: '' })

    const change = (e) => {
        setState({ ...state, [e.target.name]: e.target.value });
    }
    const submit = (e) => {
        e.preventDefault();


        if (!state.password || !state.confirmpassword) {
            alert("both field are required");
        }

        else if (state.password === state.confirmpassword) {
            alert("password matching");

        }
        else {
            alert("password not matching");
        }

        console.log(state);
    }
        
    const textStyle = {
            fontSize: '18px',
            color: 'blue',
            fontWeight: 'bold'

        };


    return (
        <div>
            <p style={textStyle} >jhgjhgjhg</p>
            <form>
                <div id='main'>
                    <div >
                        <label for="">ENTER PASSWORD</label>
                        <input type="password" onChange={change} name='password' required id='password'></input>
                    </div>
                    <div>
                        <label for="">CONFIRM PASSWORD</label>
                        <input type="password" onChange={change} name='confirmpassword' required id='confirmpassword'></input>
                    </div>
                    <div>
                        <button onClick={submit} id='submit' style={textStyle}>
                            SUBMIT
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Form4