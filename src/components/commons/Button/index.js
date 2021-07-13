/* eslint-disable prettier/prettier */
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

export const themes = {
  default: "default",
  highlight: "highlight",
  accent: "accent",
  success: "success",
  error: "error",
  warning: "warning",
};

export default function Button({
  children,
  variant,
  size,
  href,
  fullWidth,
  theme,
  inverse,
  ...props
}) {
  return (
    <ButtonText
      href={href}
      className={classNames(
        "btn-base",
        inverse && "btn-inverse",
        // ## Default Styles
        // -- Focus Ring
        "focus:outline-none focus:ring-2 focus:ring-offset-2",
        // -- Shape
        "border border-transparent rounded shadow-sm",
        "inline-flex flex-col  items-center",
        // ## Variant and Themes
        `btn-${variants.primary}-${themes.default}`     === `btn-${variant}-${theme}` ? `btn-${variant}-${theme}` : false,
        `btn-${variants.primary}-${themes.highlight}`   === `btn-${variant}-${theme}` ? `btn-${variant}-${theme}` : false,
        `btn-${variants.primary}-${themes.accent}`      === `btn-${variant}-${theme}` ? `btn-${variant}-${theme}` : false,

        `btn-${variants.secondary}-${themes.default}`   === `btn-${variant}-${theme}` ? `btn-${variant}-${theme}` : false,
        `btn-${variants.secondary}-${themes.highlight}` === `btn-${variant}-${theme}` ? `btn-${variant}-${theme}` : false,
        `btn-${variants.secondary}-${themes.accent}`    === `btn-${variant}-${theme}` ? `btn-${variant}-${theme}` : false,

        `btn-${variants.tertiary}-${themes.default}`    === `btn-${variant}-${theme}` ? `btn-${variant}-${theme}` : false,
        `btn-${variants.tertiary}-${themes.highlight}`  === `btn-${variant}-${theme}` ? `btn-${variant}-${theme}` : false,
        `btn-${variants.tertiary}-${themes.accent}`     === `btn-${variant}-${theme}` ? `btn-${variant}-${theme}` : false,
        variants.tertiary === variant && 'shadow-none',
        // ================================
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
  inverse: false,
};

Button.propTypes = {
  size: PropTypes.oneOf(Object.keys(sizes)),
  theme: PropTypes.oneOf(Object.keys(themes)),
  fullWidth: PropTypes.bool,
  variant: PropTypes.oneOf(Object.keys(variants)),
};
