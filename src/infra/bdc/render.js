/* eslint-disable react/jsx-key */
import Footer from '../../patterns/Footer';
import PricingSection, { Sample } from '../../patterns/PricingSection';

const BDCComponentsMap = {
  heading_v1: (props) => <Sample {...props} />,
  // TODO: Fix the component and call it v1 also
  pricingsection_v1: (props) => <PricingSection {...props} />,
  footer_v1: (props) => <Footer {...props} />,
};

export default function BDCRenderer({ components }) {
  return components.map(({ type, ...props }, index) => {
    const BDCComponent = BDCComponentsMap[type];
    if (!BDCComponent) return null;
    return <BDCComponent key={index + type} {...props} />;
  });
}
