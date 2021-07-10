import NextLink from 'next/link';
import Icon from '../Icon';
import Text from '../Text';

const INTERNAL_LINK = 'internalLink';
const EXTERNAL_LINK = 'externalLink';

const LinkIcon = ({ name }) => <Icon name={name} className="ml-2 inline-block align-baseline" />

const linkVariants = {
  [INTERNAL_LINK]: ({ href, children, className, hasIcon }) => (
    <NextLink passHref href={href} className={className}>
      <Text tagName="a">
        {children}
        {hasIcon && <LinkIcon name="arrowUpLeft" />}
      </Text>
    </NextLink>
  ),
  [EXTERNAL_LINK]: ({ href, children, className, hasIcon }) => (
    <Text href={href} className={className} tagName="a">
      {children}
      {hasIcon && <LinkIcon name="arrowUpLeft" />}
    </Text>
  )
};

export default function Link({ href, children, hasIcon, className }) {
  const isLinkInternal = href.includes('http') ? EXTERNAL_LINK : INTERNAL_LINK;
  const LinkComponent = linkVariants[isLinkInternal];

  return (
    <LinkComponent href={href} hasIcon={hasIcon} className={className}>
      {children}
    </LinkComponent>
  );
}

Link.defaultProps = {
  hasIcon: true,
};