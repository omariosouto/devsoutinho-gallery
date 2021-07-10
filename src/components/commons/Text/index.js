import { classNames } from '../../../infra/react/classNames';

export default function Text({ tagName, as, variant, className, style, children, srOnly, ...props }) {
  const Tag = as || tagName;
  return (
    <Tag
      className={classNames(
        variant === 'xs' && 'text-xs',
        variant === 'sm' && 'text-sm',
        variant === 'base' && 'text-base',
        variant === 'lg' && 'text-lg',	
        variant === 'xl' && 'text-xl',	
        variant === '2xl' && 'text-2xl',
        variant === '3xl' && 'text-3xl',
        variant === '4xl' && 'text-4xl',
        variant === '5xl' && 'text-5xl',
        variant === '6xl' && 'text-6xl',
        srOnly && 'sr-only',
        className,
      )}
      style={style}
      {...props}
    >
      {children}
    </Tag>
  )
}

Text.defaultProps = {
  tagName: 'span',
  variant: 'base',
}