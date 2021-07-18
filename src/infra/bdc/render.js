/* eslint-disable react/jsx-key */
import Footer from "../../patterns/Footer";

const BDCComponentsMap = {
  heading: (props) => <div>{JSON.stringify(props, null, 4)}</div>,
  footer: (props) => <Footer {...props} />,
};

export default function BDCRenderer({ components }) {
  return components.map(({ type, ...props }) => {
    const BDCComponent = BDCComponentsMap[type];
    return <BDCComponent {...props} />;
  });
}
