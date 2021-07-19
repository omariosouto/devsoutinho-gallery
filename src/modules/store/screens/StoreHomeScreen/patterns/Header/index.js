import PaymentToggle from './components/PaymentToggle';

export default function Header() {
  return (
    <div className="bg-gray-800">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8 lg:flex lg:justify-between">
        <div className="max-w-xl">
          <h2 className="text-4xl font-extrabold text-white sm:text-5xl sm:tracking-tight lg:text-6xl">
            {`DevSoutinho's Store`}
          </h2>
          <p className="mt-5 text-xl text-gray-400">
            Aqui uma pequena lojinha que eu mantenho, com exemplo de integração
            com o Stripe e por padrão se você gostar pode me ajudar comprando
            algo via link direto :)
          </p>
        </div>
        <div className="mt-10 w-full max-w-xs">
          <p className="block text-base font-medium text-gray-300">
            Método de pagamento:
          </p>
          <div className="mt-1.5 relative">
            <PaymentToggle />
          </div>
        </div>
      </div>
    </div>
  );
}
