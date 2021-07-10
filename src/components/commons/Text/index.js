import { classNames } from '../../../infra/react/classNames';

export default function Text({ tagName, textVariant, className, style, children, srOnly, ...props }) {
  const Tag = tagName;
  return (
    <Tag className={classNames(
      textVariant === 'xs' && 'text-xs',
      textVariant === 'sm' && 'text-sm',
      textVariant === 'base' && 'text-base',
      textVariant === 'lg' && 'text-lg',	
      textVariant === 'xl' && 'text-xl',	
      textVariant === '2xl' && 'text-2xl',
      textVariant === '3xl' && 'text-3xl',
      textVariant === '4xl' && 'text-4xl',
      textVariant === '5xl' && 'text-5xl',
      textVariant === '6xl' && 'text-6xl',
      srOnly && 'sr-only',
      className,
    )} style={style} {...props}>
      {children}
    </Tag>
  )
}

Text.defaultProps = {
  tagName: 'span',
  textVariant: 'base',
}