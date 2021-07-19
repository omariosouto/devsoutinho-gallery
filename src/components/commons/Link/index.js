import NextLink from 'next/link';
import { classNames } from '../../../infra/react/classNames';
import Icon from '../../foundation/Icon';

const INTERNAL_LINK = 'internalLink';
const EXTERNAL_LINK = 'externalLink';

const LinkIcon = ({ name }) => (
  <Icon name={name} className="ml-1 inline-block align-text-bottom" />
);

const linkVariants = {
  [INTERNAL_LINK]: ({ href, children, className, hasIcon, ...props }) => (
    <NextLink passHref href={href}>
      <a className={className} {...props}>
        {children}
        {hasIcon && <LinkIcon name="arrowLeft" />}
      </a>
    </NextLink>
  ),
  [EXTERNAL_LINK]: ({ href, children, className, hasIcon, ...props }) => (
    <a href={href} className={className} {...props}>
      {children}
      {hasIcon && <LinkIcon name="arrowUpLeft" />}
    </a>
  ),
};

export default function Link({ href, children, hasIcon, className, ...props }) {
  const isLinkInternal = href.includes('http') ? EXTERNAL_LINK : INTERNAL_LINK;
  const LinkComponent = linkVariants[isLinkInternal];

  return (
    <LinkComponent
      href={href}
      hasIcon={hasIcon}
      className={classNames(className)}
      {...props}
    >
      {children}
    </LinkComponent>
  );
}

Link.defaultProps = {
  hasIcon: true,
  variant: '',
  href: '',
};
