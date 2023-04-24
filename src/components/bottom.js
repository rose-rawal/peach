import React from 'react'
import { Link } from 'react-router-dom'

const Bottom = () => {
  return (
    <footer>
      <Link to='/' className='pear'>Pear</Link>
      <div className='midd'>Pages:
      <div className='line'></div><ul>
        <li><Link to='/' className='remove'>Home</Link></li>
        <li><Link to='/about' className='remove'>About</Link></li>
        <li><Link to='/error' className='remove'>Error</Link></li>
        </ul></div>
        <div className='last'>Contact Us: <div className="line"></div><ul>
          <li><i class="fa fa-facebook-official" aria-hidden="true"></i>Facebook</li>
          <li><i class="fa fa-envelope" aria-hidden="true"></i>Email</li>
          <li><i class="fa fa-phone" aria-hidden="true"></i>Phone no</li>
          </ul></div>
    </footer>
  )
}

export default Bottom
