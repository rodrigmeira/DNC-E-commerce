import './index.scss'
import { useParams } from "react-router-dom"
import HeaderSearchModal from '../../components/HeaderSearchModal/HeaderSearchModal'
import Footer from '../../components/Footer/Footer'
import ProductDetailModal from '../../components/ProductDetailModal/ProductDetailModal'

const Cart = ({data}) => {

  const { productId } = useParams();
  const selectedProduct = data.find((product) => product.id == productId);

  return (
    <section>
          <HeaderSearchModal />
          <ProductDetailModal data={selectedProduct} />
          <Footer />
    </section>
  )
}

export default Cart