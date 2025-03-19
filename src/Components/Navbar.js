import React from 'react'


function Navbar() {

// console.log(props);


  return (

    <div class="navbar">
      <div class="heading">Netfilx
      </div>
      <div class="top_bar" >
        <div class="">
          <select class="languages" >
            <option value="">English</option>
            <option value="">Hindi</option>
            <option value="">German</option>
            <option value="">Arabic</option>
          </select>
          </div>
        <button class="sign_in">
          sign in
        </button>
      </div>
    </div>

  )
}

export default Navbar

