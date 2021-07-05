import { Switch } from '@headlessui/react'
import { classNames } from '../../../../../../infra/react/classNames';
import { useStoreModuleContext } from '../../../../wrappers/StoreModuleProvider';
import { paymentMethods } from '../../../../wrappers/StoreModuleProvider/usePaymentStatus';

const paymentMethodMessageByMethod = {
  [paymentMethods.DIRECT_LINK]: () => (
    <>
      <span className="text-sm font-medium text-gray-900">Link direto </span>
      <span className="text-sm text-gray-500">(Se você comprar eu ganho uma pequena comissão)</span>
    </>
  ),
  [paymentMethods.STRIPE]: () => (
    <>
      <span className="text-sm font-medium text-gray-900">Stripe </span>
      <span className="text-sm text-gray-500">(Pagamento com API de testes)</span>
    </>
  )
};

export default function PaymentToggle() {
  const { isPaymentEnabled, setPaymentStatus, paymentMethod } = useStoreModuleContext();
  const PaymentMethodMessage = paymentMethodMessageByMethod[paymentMethod];
  const toggleEnabled = isPaymentEnabled;

  return (
    <Switch.Group as="div" className="flex items-center">
      <Switch
        checked={toggleEnabled}
        onChange={setPaymentStatus}
        className={classNames(
          toggleEnabled ? 'bg-yellow-600' : 'bg-gray-200',
          'relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
        )}
      >
        <span
          aria-hidden="true"
          className={classNames(
            toggleEnabled ? 'translate-x-5' : 'translate-x-0',
            'pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200'
          )}
        />
      </Switch>
      <Switch.Label as="span" className="ml-3">
        <PaymentMethodMessage />
      </Switch.Label>
    </Switch.Group>
  )
}