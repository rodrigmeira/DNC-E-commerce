import React from 'react'
import { useParams } from "react-router-dom"
import Footer from '../../components/Footer/Footer'
import HeaderSearch from '../../components/HeaderSearch/HeaderSearch'
import ProductDetail from "../../components/ProductDetail/ProductDetail"
import './index.scss'

const AddToCart = ({data}) => {
  const { productId } = useParams();
  const selectedProduct = data.find((product) => product.id == productId);

  return (
    <section className="product">
      <HeaderSearch />
      <ProductDetail data={selectedProduct} />
      <Footer />
    </section>
  ) 
}

export default AddToCart