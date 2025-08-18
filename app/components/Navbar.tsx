import React from 'react'
import { Link } from 'react-router'

const Navbar = () => {
  return (
    <nav className="navbar">
        <Link to="/">
            <p className="text-2xl font-bolt text-gradient">RESUMIND</p>
        </Link>
        <div className='flex space-x-4'>
          <Link to = "/upload" className="primary-button w-fit">
            Upload Resume
          </Link>
          <Link to = "/auth" className="primary-button w-fit">
              Log Out
          </Link>
        </div>
    </nav>
  )
}

export default Navbar
