import './index.scss'
import dncLogo from "../../assets/dnc-logo.svg"

import React from 'react'

const Header = () => {
  return (
    <header className="header-search">
      <img src={dncLogo} alt="logo" />
      
    </header>
  )
}

export default Header