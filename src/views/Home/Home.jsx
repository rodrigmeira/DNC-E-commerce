import './index.scss'
import React from 'react'
import { Link } from 'react-router-dom'
import HeaderSearch from '../../components/HeaderSearch/HeaderSearch'
import Footer from "../../components/Footer/Footer"
import ProductsCard from '../../components/ProductsCard/ProductsCard'

const Home = ({data}) => {
  return (
    <section className="home">
      <HeaderSearch />
        <div className='home__banner'>
          <img src="./src/assets/banner.png" alt="" />
        </div>
        <div className='home__cards'>
                {data.map((product) => (
                    <ProductsCard key={product.id} data={product} />
                  ))}
        </div>
      <Footer />
    </section>
  )
}

export default Home
