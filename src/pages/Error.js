import React from 'react'

import { Link } from 'react-router-dom'
const Error=()=>{
    return (
        <section className='container'>
            <div className='error'>
                <h1>Oops! its a dead end</h1>
                <Link to='/' className='goback'>Go back</Link>
            </div>
        </section>
    )

}
export default Error;