
import Navbar from './Navbar';
import Middlebar from './Middlebar';

import React from 'react'


function Newlogin({status}) {

  if (status=='login') {
    return (
      <div><Navbar /></div>
    )
  }
  else {
    return (
      <div><Middlebar /></div>
    )
  }
}

export default Newlogin
