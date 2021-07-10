import NextLink from 'next/link';
import { classNames } from '../../../infra/react/classNames';
import Icon from '../Icon';
import Text from '../Text';

const INTERNAL_LINK = 'internalLink';
const EXTERNAL_LINK = 'externalLink';

const LinkIcon = ({ name }) => <Icon name={name} className="ml-1 inline-block align-text-bottom" />

const linkVariants = {
  [INTERNAL_LINK]: ({ href, children, className, hasIcon, ...props }) => (
    <NextLink passHref href={href}>
      <Text tagName="a" className={className} {...props}>
        {children}
        {hasIcon && <LinkIcon name="arrowLeft" />}
      </Text>
    </NextLink>
  ),
  [EXTERNAL_LINK]: ({ href, children, className, hasIcon, ...props }) => (
    <Text href={href} className={className} tagName="a" {...props}>
      {children}
      {hasIcon && <LinkIcon name="arrowUpLeft" />}
    </Text>
  )
};

export default function Link({ href, children, hasIcon, className, variant, ...props }) {
  const isLinkInternal = href.includes('http') ? EXTERNAL_LINK : INTERNAL_LINK;
  const LinkComponent = linkVariants[isLinkInternal];

  return (
    <LinkComponent
      href={href}
      hasIcon={hasIcon}
      className={classNames(
        // Variants
        variant === 'primary' && 'text-primary-500 hover:text-primary-400',
        variant === 'accent' && 'text-accent-500 hover:text-accent-400',
        className
      )}
      {...props}
    >
      {children}
    </LinkComponent>
  );
}

Link.defaultProps = {
  hasIcon: true,
  variant: ''
};