import PropTypes from "prop-types";
import { classNames } from "../../../infra/react/classNames";

export const variants = {
  "display-1": "display-1",
  "heading-1": "heading-1",
  "heading-2": "heading-2",
  "heading-3": "heading-3",
  "heading-4": "heading-4",
  "heading-5": "heading-5",
  "heading-6": "heading-6",
  "body-1": "body-1",
  "body-2": "body-2",
  "body-3": "body-3",
  "body-4": "body-4",
};

export default function Text({
  as,
  variant,
  fontBold,
  fontMedium,
  capitalize,
  uppercase,
  className,
  style,
  children,
  srOnly,
  ...props
}) {
  const Tag = as;
  return (
    <Tag
      className={classNames(
        variant,
        variant === variants["display-1"] &&
          "text-4xl md:text-6xl font-extrabold tracking-tight",
        variant === variants["heading-1"] &&
          "text-4xl md:text-5xl font-extrabold tracking-tight",
        variant === variants["heading-2"] &&
          `text-2xl md:text-4xl tracking-tight ${
            fontBold ? "font-extrabold" : "font-bold"
          }`,
        variant === variants["heading-3"] &&
          `text-xl md:text-3xl tracking-tight ${
            fontBold ? "font-extrabold" : "font-bold"
          }`,
        variant === variants["heading-4"] &&
          `text-base md:text-xl tracking-tight ${
            fontBold ? "font-extrabold" : "font-bold"
          }`,
        variant === variants["heading-5"] &&
          `text-sm md:text-base tracking-tight ${
            fontBold ? "font-extrabold" : "font-bold"
          }`,
        variant === variants["heading-6"] &&
          `text-xs md:text-sm tracking-tight ${
            fontBold ? "font-extrabold" : "font-bold"
          }`,
        variant === variants["body-1"] &&
          `text-lg ${fontBold && "font-semibold"} ${
            fontMedium && "font-medium"
          }`,
        variant === variants["body-2"] &&
          `text-base ${fontBold && "font-semibold"} ${
            fontMedium && "font-medium"
          }`,
        variant === variants["body-3"] &&
          `text-sm ${fontBold && "font-semibold"} ${
            fontMedium && "font-medium"
          }`,
        variant === variants["body-4"] &&
          `text-xs ${fontBold && "font-semibold"} ${
            fontMedium && "font-medium"
          }`,
        capitalize && "capitalize",
        uppercase && "uppercase",
        srOnly && "sr-only",
        className
      )}
      style={style}
      {...props}
    >
      {children}
    </Tag>
  );
}

Text.defaultProps = {
  as: "span",
  srOnly: false,
  fontBold: false,
  fontMedium: false,
  variant: "body-2",
  capitalize: false,
  uppercase: false,
};

Text.propTypes = {
  /** Define which tag should be rendered based in this Text */
  as: PropTypes.oneOf([
    "span",
    "li",
    "p",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "input",
    "button",
  ]),
  variant: PropTypes.oneOf(Object.keys(variants)),
  /** Used for display a text only for screen readers, usually to describe better a section usually used in combination with 'aria-labelledby' */
  srOnly: PropTypes.bool,
  /** Some variations have bold by default, but another can have this visual enabled through this property */
  fontBold: PropTypes.bool,
  fontMedium: PropTypes.bool,
  capitalize: PropTypes.bool,
  uppercase: PropTypes.bool,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
};
