import React from 'react'
import navlogo from '/img/navlogo.svg'

const Navbar = () => {
  return (
    <nav style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', backgroundColor: 'purple', color: 'white' }}>
      <div style={{display: 'flex', alignItems: 'center', paddingLeft: '20px'}}>
        <img src={navlogo} alt="navlogo" style={{paddingRight: '10px'}}/>
        <h3>Meme Generator</h3>
      </div>
      <h5 style={{paddingRight: '20px'}}>React Course - Project 3</h5>
    </nav>
  )
}

export default Navbar