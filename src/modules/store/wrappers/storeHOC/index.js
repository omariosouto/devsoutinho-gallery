import StoreModuleProvider from "../StoreModuleProvider";

export default function storeHOC(ScreenComponent, hocProps) {
  return (props) => (
    <StoreModuleProvider
      isPaymentEnabled={hocProps.storeModuleProvider.isPaymentEnabled}
    >
      <ScreenComponent {...props} />
    </StoreModuleProvider>
  );
}
