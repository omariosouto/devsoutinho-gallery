import { classNames } from "../../../infra/react/classNames";
import Link from "../Link";
import Text from "../../foundation/Text";

function ButtonText({ className, href, size, ...props }) {
  const hasHref = Boolean(href);
  const TagBase = hasHref ? Link : "button";

  const mapTextVariantBySize = {
    xs: "body-4",
    sm: "body-3",
    md: "body-3",
    lg: "body-2",
    xl: "body-2",
  };

  return (
    <Text
      as={TagBase}
      variant={mapTextVariantBySize[size]}
      href={href}
      className={className}
      {...props}
    />
  );
}

export default function Button({ children, variant, size, href, ...props }) {
  return (
    <ButtonText
      href={href}
      className={classNames(
        // Focus Ring
        "focus:outline-none focus:ring-2 focus:ring-offset-2",
        // Variants
        variant === "primary" &&
          "text-white bg-primary-500 hover:bg-primary-400 focus:ring-primary-500",
        variant === "accent" &&
          "text-white bg-accent-500 hover:bg-accent-400 focus:ring-accent-500",
        // Shape
        "border border-transparent  font-medium rounded shadow-sm",
        // Layout
        size === "xs" && "px-2.5 py-1.5",
        size === "sm" && "px-3 py-2",
        size === "md" && "px-4 py-2",
        size === "lg" && "px-4 py-2",
        size === "xl" && "px-6 py-3",
        "inline-flex items-center"
      )}
      size={size}
      {...props}
    >
      {children}
    </ButtonText>
  );
}

Button.defaultProps = {
  size: "md",
};
