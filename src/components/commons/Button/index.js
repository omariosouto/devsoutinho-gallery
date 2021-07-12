import PropTypes from "prop-types";
import { classNames } from "../../../infra/react/classNames";
import Link from "../Link";
import Text from "../../foundation/Text";

export const variants = {
  primary: "primary",
  secondary: "secondary",
  tertiary: "tertiary",
};

export const sizes = {
  xs: "xs",
  sm: "sm",
  md: "md",
  lg: "lg",
  xl: "xl",
};

function ButtonText({ className, href, size, ...props }) {
  const hasHref = Boolean(href);
  const TagBase = hasHref ? Link : "button";

  const mapTextVariantBySize = {
    [sizes.xs]: "body-4",
    [sizes.sm]: "body-3",
    [sizes.md]: "body-3",
    [sizes.lg]: "body-2",
    [sizes.xl]: "body-2",
  };

  return (
    <Text
      as={TagBase}
      variant={mapTextVariantBySize[size]}
      href={href}
      fontMedium
      className={className}
      {...props}
    />
  );
}

export default function Button({
  children,
  variant,
  size,
  href,
  fullWidth,
  theme,
  ...props
}) {
  return (
    <ButtonText
      href={href}
      className={classNames(
        // Default Styles
        // -- Focus Ring
        "focus:outline-none focus:ring-2 focus:ring-offset-2",
        // -- Shape
        "border border-transparent rounded shadow-sm",
        "inline-flex flex-col  items-center",
        // Variants and Theme
        variant === variants.primary &&
          ((theme === "default" &&
            `
            text-skin-text-button-primary-default
            hover:text-skin-text-button-primary-default-hover
            bg-skin-fill-button-primary-default
            hover:bg-skin-fill-button-primary-default-hover`) ||
            (theme === "highlight" &&
              `
            text-skin-text-button-primary-highlight
            hover:text-skin-text-button-primary-highlight-hover
            bg-skin-fill-button-primary-highlight
            hover:bg-skin-fill-button-primary-highlight-hover`) ||
            (theme === "accent" &&
              `
            text-skin-text-button-primary-accent
            hover:text-skin-text-button-primary-accent-hover
            bg-skin-fill-button-primary-accent
            hover:bg-skin-fill-button-primary-accent-hover`) ||
            ""),
        variant === variants.secondary &&
          ((theme === "default" &&
            `
              text-skin-text-button-secondary-default
              hover:text-skin-text-button-secondary-default-hover
              bg-skin-fill-button-secondary-default
              hover:bg-skin-fill-button-secondary-default-hover`) ||
            (theme === "highlight" &&
              `
              text-skin-text-button-secondary-highlight
              hover:text-skin-text-button-secondary-highlight-hover
              bg-skin-fill-button-secondary-highlight
              hover:bg-skin-fill-button-secondary-highlight-hover`) ||
            (theme === "accent" &&
              `
              text-skin-text-button-secondary-accent
              hover:text-skin-text-button-secondary-accent-hover
              bg-skin-fill-button-secondary-accent
              hover:bg-skin-fill-button-secondary-accent-hover`) ||
            ""),
        variant === variants.tertiary &&
          ((theme === "default" &&
            `   shadow-none
                text-skin-text-button-tertiary-default
                hover:text-skin-text-button-tertiary-default-hover
                bg-skin-fill-button-tertiary-default
                hover:bg-skin-fill-button-tertiary-default-hover`) ||
            (theme === "highlight" &&
              ` shadow-none
                text-skin-text-button-tertiary-highlight
                hover:text-skin-text-button-tertiary-highlight-hover
                bg-skin-fill-button-tertiary-highlight
                hover:bg-skin-fill-button-tertiary-highlight-hover`) ||
            (theme === "accent" &&
              ` shadow-none
                text-skin-text-button-tertiary-accent
                hover:text-skin-text-button-tertiary-accent-hover
                bg-skin-fill-button-tertiary-accent
                hover:bg-skin-fill-button-tertiary-accent-hover`) ||
            ""),
        // ## Customizations
        // TODO: Fazer o full Width dentro de cada size, precisa ser diferente
        fullWidth && "w-full",
        size === sizes.xs && "px-2.5 py-1.5",
        size === sizes.sm && "px-3 py-2",
        size === sizes.md && "px-4 py-2",
        size === sizes.lg && "px-4 py-2",
        size === sizes.xl && "px-6 py-3"
      )}
      size={size}
      {...props}
    >
      {children}
    </ButtonText>
  );
}

Button.defaultProps = {
  size: sizes.md,
  variant: variants.primary,
  fullWidth: false,
  theme: "default",
};

Button.propTypes = {
  size: PropTypes.oneOf(Object.keys(sizes)),
  fullWidth: PropTypes.bool,
  variant: PropTypes.oneOf(Object.keys(variants)),
};
