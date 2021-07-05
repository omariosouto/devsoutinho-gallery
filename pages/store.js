import StoreHomeScreen from '../modules/store/screens/StoreHomeScreen';
import storeHOC from '../modules/store/wrappers/storeHOC';
import { getProducts } from '../repositories/products';

export default storeHOC(StoreHomeScreen, {
  storeModuleProvider: {
    isPaymentEnabled: false,
  }
})

export async function getStaticProps() {
  const products = await getProducts();
  return {
    props: {
      products,
    }
  };
}