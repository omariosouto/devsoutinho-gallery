import Button, { variants, sizes, themes } from "../index";

export function ButtonSizes() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
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
    <div className="grid grid-cols-1 gap-10">
      {Object.keys(variants).map((variant) => (
        <div
          key={`variant-${variant}}`}
          className="grid grid-cols-1 md:grid-cols-6 gap-4"
        >
          {Object.keys(themes).map((theme) => (
            <div key={theme}>
              <p>{`"${theme}"`}</p>
              <Button variant={variant} theme={theme}>
                {`${variant} `}
              </Button>
              {!variant.includes("tertiary") && (
                <Button variant={variant} theme={theme} inverse>
                  inverse
                </Button>
              )}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
