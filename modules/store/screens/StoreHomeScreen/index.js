import Footer from '../../../../patterns/Footer'
import Container from '../../../../components/layout/Container'
import Header from './patterns/Header'
import ProductList from './patterns/ProductList'

export default function StoreHomeScreen({ products }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <Container wrapperClassName="flex-1" className="py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <ProductList products={products} />
      </Container>

      <Footer />
    </div>
  );
}