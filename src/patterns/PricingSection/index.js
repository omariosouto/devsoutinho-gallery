import Icon from '../../components/foundation/Icon';
import Text from '../../components/foundation/Text';
import Button from '../../components/commons/Button';
import Box from '../../components/foundation/layout/Box';

const features = [
  {
    name: 'List view',
    icon: 'viewList',
    description:
      'Nunc a, lacinia sed risus neque, arcu, rhoncus. Id mauris justo facilisis aliquam platea vestibulum condimentum morbi.',
  },
  {
    name: 'Boards',
    icon: 'viewBoard',
    description:
      'Purus lobortis volutpat posuere id integer nunc tellus. Non mauris malesuada feugiat massa mi pellentesque cum est. Pharetra a varius urna rhoncus, tempor rutrum.',
  },
  {
    name: 'Calendar',
    icon: 'calendar',
    description:
      'Purus lobortis volutpat posuere id integer nunc tellus. Non mauris malesuada feugiat massa mi pellentesque cum est. Pharetra a varius urna rhoncus, tempor rutrum.',
  },
  {
    name: 'Teams',
    icon: 'users',
    description:
      'Tincidunt sollicitudin interdum nunc sit risus at bibendum vitae. Urna, quam ut sit justo non, consectetur et varius.',
  },
];

const checklist = [
  'Unlimited projects',
  'No per user fees',
  'Unlimited storage',
  '24/7 support',
  'Cancel any time',
  '14 days free',
];

export function Sample() {
  return (
    <Box className="bg-skin-fill-base">
      <Box className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <Box className="text-center">
          <Text
            as="h2"
            variant="heading-5"
            uppercase
            className="text-skin-fill-base-color-highlight"
          >
            Pricing
          </Text>
          <Box className="mt-1">
            <Text
              as="p"
              variant="heading-2"
              fontBold
              className="text-skin-fill-base-color-contrast-strong"
            >
              Take control of your team.
            </Text>
          </Box>
          <Box className="max-w-xl mt-5 m-auto">
            <Text
              as="p"
              variant="heading-4"
              fontNormal={true}
              className="text-skin-fill-base-color-contrast"
            >
              Start building for free, then add a site plan to go live. Account
              plans unlock additional features.
            </Text>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default function PricingSection() {
  return (
    <>
      <Box className="relative bg-skin-fill">
        <Box className="absolute inset-0" aria-hidden="true">
          <Box className="absolute inset-y-0 right-0 w-1/2 bg-skin-fill-highlight" />
        </Box>
        <Box className="relative max-w-7xl mx-auto lg:px-8 lg:grid lg:grid-cols-2">
          <Box className="bg-skin-fill py-16 px-4 sm:py-24 sm:px-6 lg:px-0 lg:pr-8">
            <Box className="max-w-lg mx-auto lg:mx-0">
              <Text
                as="h2"
                variant="body-2"
                fontBold
                uppercase
                className="text-skin-fill-color-highlight"
              >
                Full-featured
              </Text>
              <Text
                as="p"
                variant="heading-3"
                fontBold
                className="text-skin-fill-color-contrast-strong"
              >
                Everything you need to talk with your customers
              </Text>
              <Box as="dl" className="mt-12 space-y-10">
                {features.map((feature) => (
                  <Box key={feature.name} className="relative">
                    <Box as="dt">
                      <Box className="absolute h-12 w-12 flex items-center justify-center bg-skin-fill-highlight rounded-md">
                        <Icon
                          name={feature.icon}
                          size="sm"
                          className="text-skin-fill-highlight-color-contrast"
                          aria-hidden="true"
                        />
                      </Box>
                      <Box className="ml-16">
                        <Text
                          as="p"
                          variant="body-1"
                          fontBold
                          className="text-skin-fill-color-contrast-strong"
                        >
                          {feature.name}
                        </Text>
                      </Box>
                    </Box>
                    <Box as="dd" className="mt-2 ml-16">
                      <Text
                        as="p"
                        variant="body-2"
                        className="text-skin-fill-color-contrast-light"
                      >
                        {feature.description}
                      </Text>
                    </Box>
                  </Box>
                ))}
              </Box>
            </Box>
          </Box>
          <Box className="bg-skin-fill-highlight py-16 px-4 sm:py-24 sm:px-6 lg:bg-none lg:px-0 lg:pl-8 lg:flex lg:items-center lg:justify-end">
            <Box className="max-w-lg mx-auto w-full lg:mx-0">
              <Box>
                <Text srOnly>Price</Text>
                <Box as="p" className="relative grid grid-cols-2">
                  <Box as="span" className="flex flex-col text-center">
                    <Text
                      as="span"
                      variant="heading-1"
                      className="text-skin-fill-highlight-color-contrast"
                    >
                      $99
                    </Text>
                    <Box as="span" className="mt-2">
                      <Text
                        as="span"
                        className="text-skin-fill-highlight-color-highlight"
                      >
                        Setup fee
                      </Text>
                    </Box>
                    <Text srOnly>plus</Text>
                  </Box>
                  <Box
                    as="span"
                    className="pointer-events-none absolute h-full w-full flex items-center justify-center"
                    aria-hidden="true"
                  >
                    <Icon
                      name="plus"
                      size="sm"
                      className="text-skin-fill-highlight-color-highlight"
                      aria-hidden="true"
                    />
                  </Box>
                  <Box as="span">
                    <Box as="span" className="flex flex-col text-center">
                      <Text
                        as="span"
                        variant="heading-1"
                        className="text-skin-fill-highlight-color-contrast"
                      >
                        $4
                      </Text>
                      <Box as="span" className="mt-2">
                        <Text
                          as="span"
                          className="text-skin-fill-highlight-color-highlight"
                        >
                          Per month
                        </Text>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>
              <Box
                as="ul"
                className="rounded overflow-hidden grid gap-px sm:grid-cols-2 my-8"
              >
                {checklist.map((item) => (
                  <Box
                    as="li"
                    key={item}
                    className="bg-skin-fill-highlight-strong py-4 px-4 flex items-center space-x-3 text-skin-fill-highlight-color-contrast"
                  >
                    <Icon
                      name="check"
                      className="h-6 w-6 text-skin-fill-highlight-color-highlight-strong"
                      aria-hidden="true"
                    />
                    <Text>{item}</Text>
                  </Box>
                ))}
              </Box>
              <Box className="mt-8 mb-4">
                <Button
                  fullWidth
                  size="lg"
                  variant="primary"
                  theme="highlight"
                  inverse
                >
                  Get started today
                </Button>
              </Box>
              <Box>
                <Button
                  fullWidth
                  size="lg"
                  variant="primary"
                  theme="light"
                  ghost
                >
                  Try Workflow Lite for free
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}
