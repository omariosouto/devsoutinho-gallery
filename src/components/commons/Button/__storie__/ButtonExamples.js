import Button, { variants, sizes, themes } from "../index";
import Text from "../../../../components/foundation/Text";

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
        <div key={`variant-${variant}}`}>
          <Text as="h3" variant="heading-4">
            Variant: {`"${variant}"`}
          </Text>
          <div className="grid grid-cols-1 md:grid-cols-7 gap-4">
            {Object.keys(themes).map((theme) => (
              <div key={theme} className="bg-neutral-100 p-4 rounded-lg">
                <Button variant={variant} theme={theme}>
                  {`${variant} `}
                </Button>
                {variant.includes("primary") && (
                  <Button variant={variant} theme={theme} ghost>
                    ghost
                  </Button>
                )}
                {variant.includes("primary") && (
                  <Button variant={variant} theme={theme} inverse>
                    inverse
                  </Button>
                )}
                <br />
                <br />
                <Text as="h3" variant="body-4">
                  Theme: {`"${theme}"`}
                </Text>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
