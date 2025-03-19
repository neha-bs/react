// import axios from 'axios'
// import React, { useEffect, useState } from 'react'
// import 

// function Axios() {

//   const [state, setState] = useState({});

//   useEffect(() => {

//     axios.get('https://jsonplaceholder.typicode.com/posts/1')
//       .then((res) => {
//         console.log(res);
//         setState(res.data);

//       })
//       .catch((err) => {
//         console.log(err);

//       })

//   }, [])

//   console.log(state);

//   return (
//     <div>

//       <p>{state.title} </p>
//       <p>{state.body} </p>
//       <p>{state.id} </p>


//     </div>
//   )
// }

// export default Axios