import Box from '../../components/layout/Box';
import Link from '../../components/commons/Link';
import Icon from '../../components/commons/Icon';
import Text from '../../components/commons/Text';
import { navigationLinks } from './data';

export default function Footer() {
  return (
    <Box as="footer" className="bg-gray-800" aria-labelledby="footer-heading">
      <Text id="footer-heading" tagName="h2" srOnly>
        Footer
      </Text>
      <Box className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <Box className="md:flex md:items-center md:justify-between">
          <Box className="flex space-x-6 md:order-2">
            {navigationLinks.social.map((item) => (
              <Link key={item.name} href={item.href} className="text-gray-400 hover:text-gray-300" hasIcon={false}>
                <Text srOnly>{item.name}</Text>
                <Icon name={item.iconName} size="sm" aria-hidden="true" />
              </Link>
            ))}
          </Box>
          <Text tagName="p" className="mt-8 text-gray-400 md:mt-0 md:order-1">
            &copy; 2020 <Link href="/" hasIcon={false}>DevSoutinho Tech</Link>. Todos os direitos reservados.
          </Text>
        </Box>
      </Box>
    </Box>
  )
}
