import React from "react";

function Props({data}) {




    if (data.age >= 18) {
        return (
            <div>
                <p>welcome</p>
                <button>LOGIN</button>
            </div>
        );

    } else {

        return (
            <div>
                <p> page access denied</p>
            </div>
        );
    }



}
export default Props;
   