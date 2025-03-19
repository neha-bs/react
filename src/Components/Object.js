import React from 'react'

function Object() {

    const user = [{ name: 'john', age: 33, place: 'countryside' },
    { name: 'pie', age: 16, place: 'cityside' },
    { name: 'xxo', age: 44, place: 'centerpark' }
    ]




    return (

        <div>
            {
                user.map((user) => {
                    return (
                        <div>
                            <h1>hello world </h1>
                            <p>Name:{user.name} </p>
                            <p>Age:{user.age} </p>
                            <p>Place:{user.place}</p>
                        </div>
                    )
                })
            }


        </div>
    )
}

export default Object