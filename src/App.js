

import './App.css';
import ConditionalRendering from './Components/ConditionalRendering';
import Count from './Components/Count';
import Form2 from './Components/Form2';
import Form3 from './Components/Form3';
import Form4 from './Components/Form4';
import Functionprops from './Components/Functionprops';
import Formhandling from './Components/Formhandling';
import Loginpage from './Components/Loginpage';
import Middlebar from './Components/Middlebar';
import Navbar from './Components/Navbar';
import Newlogin from './Components/Newlogin';
import Props from './Components/Props';
import StateComponents from './Components/StateComponents';
import Ternaryoperator from './Components/Ternaryoperator';
import Object from './Components/Object';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import Axios from './Components/Axios';
import Axios2 from './Components/Axios2';
import Axios3 from './Components/Axios3';
import Axios4 from './Components/Axios4';
import {BrowserRouter,Routes, Route} from 'react-router-dom'
import Navbaraxios from './Components/Navbaraxios';
import PostMain from './Components/PostMain';
import PostSingle from './Components/PostSingle';

import Form5 from './Components/Form5';
import Form6 from './Components/Form6';
import ContextA from './Components/ContextA';
import ContextC from './Components/ContextC';



  //  const object={user:"neha",age:23}
function App() {





  return (
<BrowserRouter>
 <div class="">
  
  

    {/* <Routes>
      <Route path='/' element={<PostMain/>}/>
      <Route path='/posts/:id' element={<PostSingle/>}/>
    </Routes>  */}
     {/* <Routes>
      <Route path='/' element={<Navbaraxios/>} />
      <Route path='/product/:id' element={<Axios2/>} />
    </Routes> */}
      {/* <Navbar name='Netfilx' age={999} />
      <Middlebar /> */}
      {/* <ConditionalRendering  /> */}
      {/* // <Newlogin status='login' /> */}

      {/* <StateComponents/> */}
      {/* <Count/> */}
      {/* <Loginpage/> */}
      {/* <Props  data={object} /> */}
      {/* <Formhandling/> */}
      {/* <Form2/> */}
      {/* <Form3/> */}
      {/* <Form4/> */}
      {/* <Functionprops/> */}
      {/* <Ternaryoperator/> */}
      {/* <Object/> */}
      {/* <Axios/> */}
      {/* <Axios2/> */}
      {/* <Axios3/> */}
      {/* <Form5/> */}
      {/* <Form6/> */}
      <ContextA/>
      
  

</div>
</BrowserRouter>
   
    
   
  );
}

export default App;
