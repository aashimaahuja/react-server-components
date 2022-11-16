import React from 'react'

function Hello({children}){
    console.log('Reached in hello')
    return <h1>Hello World {children}</h1>
}

export default Hello