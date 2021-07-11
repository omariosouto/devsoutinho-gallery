import { useStoreModuleContext } from "../../../../wrappers/StoreModuleProvider";

export default function ProductList({ products }) {
  const { isPaymentEnabled } = useStoreModuleContext();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
      {products.map((product) => (
        <div key={product.id}>
          <div className="space-y-4 flex flex-col flex-1 h-full">
            <div className="aspect-w-3 aspect-h-2">
              <img
                className="object-cover shadow-lg rounded-lg"
                src={product.image}
                alt=""
              />
            </div>

            <div className="space-y-2 flex flex-col flex-1">
              <div className="text-sm leading-6 font-medium space-y-1 flex-1">
                <span
                  className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                    isPaymentEnabled
                      ? "bg-purple-100 text-purple-800"
                      : "bg-yellow-100 text-yellow-800"
                  }`}
                >
                  {isPaymentEnabled ? "Stripe" : "Direct Link"}
                </span>
                <h3>{product.title}</h3>
                <p className="text-indigo-600">{product.role}</p>
              </div>
              <ul className="flex space-x-5">
                <li>
                  {isPaymentEnabled ? (
                    <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                      Comprar
                    </button>
                  ) : (
                    <a
                      className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      href={product.link}
                    >
                      Comprar
                    </a>
                  )}
                </li>
              </ul>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

/* <ul>
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
</ul> */
