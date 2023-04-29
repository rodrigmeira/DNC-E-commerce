import './index.scss'
import React from 'react'
import { Link } from 'react-router-dom'
import HeaderSearchModal from '../../components/HeaderSearchModal/HeaderSearchModal'
import Footer from '../../components/Footer/Footer'

const Checkout = () => {
  return (
    <div>
      <HeaderSearchModal />
      <section className="product-detail-modal">
        <div className="product-detail-modal__container">
          <form>
            <h2 className="checkoutH2">Finalizar compra</h2>

            <label htmlFor="name">Digite seu nome:</label>
            <input type="text" placeholder='Nome Completo' id="name" name="name" />

            <label htmlFor="cpf">Digite seu CPF:</label>
            <input type="text" placeholder='CPF' id="cpf" name="cpf" />

            <label htmlFor="address">Endereço:</label>
            <input type="text" placeholder='Seu endereço' id="address" name="address" />
            <label htmlFor="payment">Forma de pagamento:</label>
            <div className='product-detail-modal__checkPix'>
              <input type="radio" id='pix' name="payment" value='Pix' />
              <img src="/iconePix.svg" alt="" />
              <label htmlFor="pix">Pix</label>
            </div>
            <div className='product-detail-modal__checkCard'>
              <input type="radio" id='card' name="payment" value='cardCredit' />
              <img src="/iconeCard.svg" alt="" />
              <label htmlFor="card">Cartão de crédito</label>
            </div>
            <div className="button">
              <button type="submit">
                <Link to={"/home"}>Enviar</Link>
              </button>
            </div>
          </form>
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default Checkout