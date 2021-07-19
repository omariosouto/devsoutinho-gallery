/* eslint-disable react/jsx-key */
import Footer from '../../patterns/Footer';
import PricingSection, { Sample } from '../../patterns/PricingSection';

// TODO: Call all components of v1
const BDCComponentsMap = {
  heading_v1: Sample,
  pricingsection_v1: PricingSection,
  footer_v1: Footer,
};

export default function BDCRenderer({ components }) {
  return components.map(({ type, ...props }, index) => {
    const BDCComponent = BDCComponentsMap[type];
    if (!BDCComponent) return null;
    return <BDCComponent key={index + type} {...props} />;
  });
}
