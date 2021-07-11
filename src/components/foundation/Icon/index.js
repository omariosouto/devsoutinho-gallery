import PropTypes from "prop-types";
import { classNames } from "../../../infra/react/classNames";
import { getAllIconNames, IconMapByName } from "./IconMapByName";

export const iconSizes = {
  xs: "xs",
  sm: "sm",
};

export default function Icon({ name, size, className, ...props }) {
  const iconName = name || "default";
  const CurrentIcon = IconMapByName[iconName];
  const isIconXS = size === iconSizes.xs;
  const isIconSM = size === iconSizes.sm;
  return (
    <svg
      className={classNames(
        isIconXS && "h-4 w-4",
        isIconSM && "h-6 w-6",
        className
      )}
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <CurrentIcon />
    </svg>
  );
}

Icon.defaultProps = {
  size: "xs",
};

const propTypes = {
  /** Name of the icon with lower camel case */
  name: PropTypes.oneOf(getAllIconNames()).isRequired,
  size: PropTypes.oneOf(Object.keys(iconSizes)),
  className: PropTypes.string,
};
Icon.propTypes = propTypes;
