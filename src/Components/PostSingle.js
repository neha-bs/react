import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './Post.css'

function PostSingle() {

  const [state, setState] = useState({})
  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => {
        console.log(res);
        setState(res.data);


      })
      .catch((err) => {
        console.log(err);

      })


  }, [])

  console.log(state);



  return (
    <div>
       <h2 class='heading'>Product Details</h2>
      <div class="post" >

        <div class="post-body">
          <p>{state.id} </p>
          <p>{state.userId} </p>
          <h5 class="post-title">{state.title}</h5>
          <p class="post-text">{state.body}</p>

        </div>
      </div>
    </div>
  )
}

export default PostSingle
