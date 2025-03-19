import axios from 'axios'
import React, { useEffect, useState } from 'react'


function Axios3() {

    const [state, setState] = useState([])

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then((res) => {
                console.log(res);
                setState(res.data);

            })
            .catch((err) => {
                console.log(err);

            })

    }, [])


    return (
        <div>
            {
                state.map((state) => {
                    return (
                        <div>
                            <p>user id : {state.userId}</p>
                            <p>id : {state.id}</p>
                            <p>title : {state.title}</p>
                            <p>body : {state.body}</p>
                        </div>
                    )
                })
            }

        </div>
    )
}

export default Axios3