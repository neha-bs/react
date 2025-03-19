import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './Post.css'

function PostAll() {


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

  }, []
  )



  return (
    <div class='main-post'>
      <div class='row'>
        {
          state.map((state) => (
            <div class="col-md-4 md-4">
              <div class="post" >
                <div class="post-body">
                  <p>{state.id} </p>
                  <p>{state.userId} </p>
                  <h5 class="post-title">{state.title} </h5>
                  <p class="post-text">{state.body}</p>
                  <Link to={`/posts/${state.id}`}><button type='button' class="btn btn-primary">View Post</button></Link>
                </div>

              </div>


            </div>

          ))
        }




      </div>

    </div>


  )
}

export default PostAll;