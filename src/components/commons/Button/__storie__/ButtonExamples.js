import Button, { variants, sizes } from "../index";

export function ButtonSizes() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
      {Object.keys(sizes).map((size) => (
        <div key={`size-${size}}`}>
          <Button size={size}>Button size: {size}</Button>
        </div>
      ))}
    </div>
  );
}

export function ButtonVariants() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
      {Object.keys(variants).map((variant) => (
        <div key={`variant-${variant}}`}>
          <Button variant={variant}>{variant}</Button>
        </div>
      ))}
    </div>
  );
}
