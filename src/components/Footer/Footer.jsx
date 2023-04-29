import './index.scss'
import dncLogo from "../../assets/dnc-logo-footer.png"

import React from 'react'

const Footer = () => {
  return (
    <footer>
      <img src={dncLogo} alt="logo" />
      <p>Preços e condições de pagamento exclusivos para compras via internet e
         podem variar nas lojas físicas. <span>Para mais informações</span>, 
         entre em contato: (011) 1111-2222
      </p>
    </footer>
  )
}

export default Footer