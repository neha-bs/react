import React, { useState } from 'react'

function Loginpage() {
    const [state, setState] = useState('please login');

    const Login = () => {
        setState('welcome back');
    };

    const Logout = () => {
        setState('please login');
    };

    if (state === 'please login') {
        return (
            <div>
                {state}

                <button onClick={Login}>LOGIN</button>
            </div>
        );
    }
    else {

        return (
            < div >
                {state}

                <button onClick={Logout}>LOGOUT</button>
            </div >

        );
    }


}

export default Loginpage;
