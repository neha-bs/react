import axios from 'axios';
import React, { useState } from 'react'

function Form6() {
  const [state, setState] = useState({ fname: '', userEmail: '', contact: '', userCheckbox: '', userRadio: '', userRange: '', userPassword: '', userDate: '', userTime: '' })

  const change = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  }

  const submit = (e) => {
    e.preventDefault();
    console.log(state);
    axios.post('https://jsonplaceholder.typicode.com/posts')
      .then((res) => {
        console.log(res);
        setState(res.data)

        if(res.status===201){
          alert('sucess');}
          else{console.log('error');
          }
          
        

      })

      .catch((err) => {
        console.log(err);

      })

    console.log(state);



  }


  return (
    <div>
      <form>
        <div>
          <label for="">NAME : </label>
          <input type='text' onChange={change} name='fname'></input>
        </div>
        <div>
          <label for="">EMAIL : </label>
          <input type='email' onChange={change} name='userEmail'></input>
        </div>
        <div>
          <label for="">CONTACT NO: </label>
          <input type='text' onChange={change} name='contact'></input>
        </div>
        <div>
          <label for="">VERTIFY : </label>
          <input type='checkbox' onChange={change} name='userCheckbox'></input>
        </div>
        <div>
          <label for="">GENDER : </label>
          <input type='radio' onChange={change} name='userRadio'></input>
        </div>
        <div>
          <label for="">RATE : </label>
          <input type='range' onChange={change} name='userRange'></input>
        </div>
        <div>
          <label for="">PASSWORD : </label>
          <input type='password' onChange={change} name='userPassword'></input>
        </div>
        <div>
          <label for="">DATE : </label>
          <input type='date' onChange={change} name='userDate'></input>
        </div>
        <div>
          <label for="">TIME : </label>
          <input type='time' onChange={change} name='userTime'></input>
        </div>
        <div>
          <button type='submit' onClick={submit}>
            SUBMIT
          </button>
        </div>
      </form>

    </div>
  )
}


export default Form6;