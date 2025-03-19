import axios from 'axios';
import React, { useEffect, useState } from 'react'
import './Axiosstyle.css'
import { useParams } from 'react-router-dom';


function Axios2() {

    const [state, setState] = useState({})
    const {id}=useParams();
    console.log(id);
    

    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products/${id}`)
            .then((res) => {
                console.log(res);
                setState(res.data);

            }
            )
            .catch((err) => {
                console.log(err);
            }
            )
    }, [])


    console.log(state);

    return (
        <div>
            <h2 class='main-heading'>Product Details</h2>
            <div class="card">

                <img src={state.image} class='image'></img>

                <div class="card-body">
                    <h5 class="card-title">{state.title} </h5>
                    <p class='price'>Price : {state.price}</p>
                    <p class="card-text">{state.description}</p>
                    <a href="#" class="btn btn-primary">Buy Product</a>
                </div>
            </div>
        </div>
    )
}

export default Axios2
