import PropTypes from "prop-types";
import { classNames } from "../../../infra/react/classNames";
import Link from "../Link";
import Text from "../../foundation/Text";
import "./Button.css";

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
  className,
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
        // Variants
        // TODO: Organize it better
        variant === variants.primary && "button-primary highlight",
        variant === variants.secondary && "button-secondary highlight",
        variant === variants.tertiary && "button-tertiary highlight",
        variant === variants.primary &&
          "text-white bg-neutral-600 hover:bg-neutral-500 focus:ring-neutral-600",
        variant === variants.secondary &&
          "text-neutral-800 bg-neutral-200 hover:bg-neutral-300 focus:ring-neutral-500 ",
        variant === variants.tertiary &&
          "text-neutral-700 bg-transparent hover:text-neutral-800 focus:ring-neutral-500 border shadow-none",
        // Layout
        // TODO: Fazer o full Width dentro de cada size, precisa ser diferente
        fullWidth && "w-full",
        size === sizes.xs && "px-2.5 py-1.5",
        size === sizes.sm && "px-3 py-2",
        size === sizes.md && "px-4 py-2",
        size === sizes.lg && "px-4 py-2",
        size === sizes.xl && "px-6 py-3",
        className
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
};

Button.propTypes = {
  size: PropTypes.oneOf(Object.keys(sizes)),
  fullWidth: PropTypes.bool,
  variant: PropTypes.oneOf(Object.keys(variants)),
};
