import { createContext } from "react";
import ContextB from "./ContextB";

import React from 'react'

const Fname = createContext();

function ContextA() {
    return (
        <div>
            <Fname.Provider value="hello">
                <ContextB />
            </Fname.Provider>
        </div>
    )
}

export default ContextA
export{Fname};


