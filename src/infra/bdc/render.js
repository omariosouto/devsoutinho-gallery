/* eslint-disable react/jsx-key */
import Footer from '../../patterns/Footer';
import PricingSection, { Sample } from '../../patterns/PricingSection';

const BDCComponentsMap = {
  heading: (props) => <Sample {...props} />,
  pricingSection: (props) => <PricingSection {...props} />,
  footer: (props) => <Footer {...props} />,
};

export default function BDCRenderer({ components }) {
  return components.map(({ type, ...props }, index) => {
    const BDCComponent = BDCComponentsMap[type];
    if (!BDCComponent) return null;
    return <BDCComponent key={index + type} {...props} />;
  });
}
