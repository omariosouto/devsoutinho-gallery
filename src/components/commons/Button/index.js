import { classNames } from '../../../infra/react/classNames';
import Link from '../Link';

export default function Button({ children, variant, size, href, ...props }) {
  const hasHref = Boolean(href);
  const ButtonBase = hasHref ? Link : 'button';

  return (
    <ButtonBase
      href={href}
      className={classNames(
        // Focus Ring
        'focus:outline-none focus:ring-2 focus:ring-offset-2',
        // Variants
        variant === 'primary' && 'text-white bg-primary-500 hover:bg-primary-400 focus:ring-primary-500',
        variant === 'accent' && 'text-white bg-accent-500 hover:bg-accent-400 focus:ring-accent-500',
        // Shape
        'border border-transparent  font-medium rounded shadow-sm',
        // Layout
        size === 'xs' && 'px-2.5 py-1.5',
        size === 'sm' && 'px-3 py-2',
        size === 'md' && 'px-4 py-2',
        size === 'lg' && 'px-4 py-2',
        size === 'xl' && 'px-6 py-3',
        'inline-flex items-center',
        // TODO: Solve this through Text component
        size === 'xs' && 'text-xs',
        size === 'sm' && 'text-sm',
        size === 'md' && 'text-sm',
        size === 'lg' && 'text-base',
        size === 'xl' && 'text-base',
      )}
      {...props}
    >
      {children}
    </ButtonBase>      
  );
}

Button.defaultProps = {
  size: 'md',
}