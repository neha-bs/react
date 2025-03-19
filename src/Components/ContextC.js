import React, { useContext } from 'react'
import { Fname } from './ContextA'

function  ContextC() {

    const name = useContext(Fname)

    return (
        <div>
            <h1>{name}</h1>
        </div>
    )
}

export default ContextC