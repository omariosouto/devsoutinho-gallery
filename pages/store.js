import StoreHomeScreen from '../src/modules/store/screens/StoreHomeScreen';
import storeHOC from '../src/modules/store/wrappers/storeHOC';
import { getProducts } from '../src/repositories/products';

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