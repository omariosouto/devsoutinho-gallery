import { useStoreModuleContext } from '../../wrappers/StoreModuleProvider';
import Header from './patterns/Header'

export default function StoreHomeScreen({ products }) {
  const { isPaymentEnabled } = useStoreModuleContext();


  return (
    <div>
      <Header />

      

      <ul>
        {products.map(product => (
          <li key={product.id}>
            <article>
              <h2>{product.title}</h2>
              <p>
                {product.description}
              </p>

              {isPaymentEnabled
                ? (
                  <button>
                    Comprar (Stripe)
                  </button>
                )
                : (
                  <a href={product.link}>
                    Comprar (Direct Link)
                  </a>
                )
              }
            </article>
          </li>
        ))}
      </ul>
    </div>
  );
}