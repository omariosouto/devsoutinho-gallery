import { classNames } from '../../../infra/react/classNames';

export default function Text({ as, variant, bold, capitalize, uppercase, className, style, children, srOnly, ...props }) {
  const Tag = as;
  return (
    <Tag
      className={classNames(
        variant,
        variant === 'display-1' && 'text-6xl font-extrabold',
        variant === 'heading-1' && 'text-4xl md:text-5xl font-extrabold',
        variant === 'heading-2' && 'text-2xl md:text-4xl font-bold',
        variant === 'heading-3' && 'text-xl md:text-2xl font-bold',
        variant === 'heading-4' && 'text-base md:text-xl font-bold',
        variant === 'heading-5' && 'text-sm md:text-base font-bold',
        variant === 'heading-6' && 'text-xs md:text-sm font-bold',
        variant === 'body-1' && `text-lg ${bold && 'font-semibold'}`,
        variant === 'body-2' && `text-base ${bold && 'font-semibold'}`,
        variant === 'body-3' && `text-sm ${bold && 'font-semibold'}`,
        variant === 'body-4' && `text-xs ${bold && 'font-semibold'}`,
        capitalize && 'capitalize',
        uppercase && 'uppercase',
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
  as: 'span',
}