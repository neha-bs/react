import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './Axios4.css'
import Axios2 from './Axios2'
import { Link } from 'react-router-dom'


function Axios4() {

    const [state, setState] = useState([])

    useEffect(() => {

        axios.get('https://fakestoreapi.com/products')
            .then((res) => {
                console.log(res);
                setState(res.data);

            })
            .catch((err) => {
                console.log(err);
            })


    }, [])

    


    return (
        <div class="container">

            <div class="row">
                {

                    state.map((state) => (
                        <div class="col-md-4 mb-4" >
                            <div class="product">
                                <h3>{state.category}</h3>
                                <img src={state.image} class='image'></img>
                                <div classe="main-body">
                                    <h5 class="product-title">{state.title}</h5>
                                    
                                    <h6 class="buy-price">Price: ${state.price}</h6>
                                    <p class="product-text">{state.description.slice(0,100)}</p>
                                   <Link to={`/product/${state.id}`}> <button type="button" class="btn btn-primary">View More</button></Link>
                                </div>
                            </div>
                        </div>
                    ))

                }
            </div>
        </div>
    );
}

export default Axios4;