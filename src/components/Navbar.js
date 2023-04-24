import React from 'react'

import {Link} from 'react-router-dom'




const Navbar=()=>{
    return (
        <nav>
            <div className="nav-center">
            <Link to="/" style={{
                fontFamily:"'Cedarville Cursive', cursive",
                fontWeight:'bold',
                fontSize:'40px',
                textDecoration: 'none',
                margin:'0px 0px',
                color:'black'
            }}>Pear</Link>
            <Link to="/" className='rightalign align'>Home</Link>
            <Link to="/about" className='rightalign align'>About</Link>
            </div>
        </nav>
    )
}

export default Navbar