import React from 'react'

function Childcomponent({ clickhere }) {
    return (
        <div>
            <h1>Child Component</h1>
            <button onClick={clickhere}>CLICK HERE</button>
        </div>
    )
}

export default Childcomponent