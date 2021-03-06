import { navigationLinks } from './data';
import Box from '../../components/foundation/layout/Box';
import Icon from '../../components/foundation/Icon';
import Text from '../../components/foundation/Text';
import Link from '../../components/commons/Link';

export default function Footer() {
  return (
    <Box
      as="footer"
      className="bg-skin-fill-dark-stronger"
      aria-labelledby="footer-heading"
    >
      <Text id="footer-heading" as="h2" variant="heading-2" srOnly>
        Footer
      </Text>
      <Box className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <Box className="md:flex md:items-center md:justify-between">
          <Box className="flex space-x-6 md:order-2">
            {navigationLinks.social.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-skin-fill-dark-color-contrast"
                hasIcon={false}
              >
                <Text variant="body-2" srOnly>
                  {item.name}
                </Text>
                <Icon name={item.iconName} size="sm" aria-hidden="true" />
              </Link>
            ))}
          </Box>
          <Box className="mt-8 md:mt-0 md:order-1">
            <Text
              as="p"
              variant="body-2"
              className="text-skin-fill-dark-color-contrast"
            >
              &copy; 2020{' '}
              <Link
                className="text-skin-fill-dark-color-highlight"
                href="https://youtube.com/DevSoutinho"
                variant="primary"
              >
                DevSoutinho Tech
              </Link>
              . Todos os direitos reservados.
            </Text>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
