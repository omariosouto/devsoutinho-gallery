/* This example requires Tailwind CSS v2.0+ */
import {
  CalendarIcon,
  CheckIcon,
  PlusIcon,
  UsersIcon,
  ViewBoardsIcon,
  ViewListIcon,
} from "@heroicons/react/outline";
import Text from "../../components/foundation/Text";
import Button from "../../components/commons/Button";
import Box from "../../components/foundation/layout/Box";

const features = [
  {
    name: "List view",
    icon: ViewListIcon,
    description:
      "Nunc a, lacinia sed risus neque, arcu, rhoncus. Id mauris justo facilisis aliquam platea vestibulum condimentum morbi.",
  },
  {
    name: "Boards",
    icon: ViewBoardsIcon,
    description:
      "Purus lobortis volutpat posuere id integer nunc tellus. Non mauris malesuada feugiat massa mi pellentesque cum est. Pharetra a varius urna rhoncus, tempor rutrum.",
  },
  {
    name: "Calendar",
    icon: CalendarIcon,
    description:
      "Purus lobortis volutpat posuere id integer nunc tellus. Non mauris malesuada feugiat massa mi pellentesque cum est. Pharetra a varius urna rhoncus, tempor rutrum.",
  },
  {
    name: "Teams",
    icon: UsersIcon,
    description:
      "Tincidunt sollicitudin interdum nunc sit risus at bibendum vitae. Urna, quam ut sit justo non, consectetur et varius.",
  },
];
const checklist = [
  "Unlimited projects",
  "No per user fees",
  "Unlimited storage",
  "24/7 support",
  "Cancel any time",
  "14 days free",
];

export default function PricingSection() {
  return (
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
              className="text-skin-text-fill-highlight"
            >
              Full-featured
            </Text>
            <Text
              as="p"
              variant="heading-3"
              fontBold
              className="text-skin-text-strong"
            >
              Everything you need to talk with your customers
            </Text>
            <Box as="dl" className="mt-12 space-y-10">
              {features.map((feature) => (
                <Box key={feature.name} className="relative">
                  <Box as="dt">
                    {/* TODO: Add the icon */}
                    <Box className="absolute h-12 w-12 flex items-center justify-center bg-skin-fill-highlight rounded-md">
                      <feature.icon
                        className="h-6 w-6 text-skin-text-contrast-fill-highlight"
                        aria-hidden="true"
                      />
                    </Box>
                    {/* TODO: Add the icon */}
                    <Box className="ml-16">
                      <Text
                        as="p"
                        variant="body-1"
                        fontBold
                        className="text-skin-text-medium"
                      >
                        {feature.name}
                      </Text>
                    </Box>
                  </Box>
                  <Box as="dd" className="mt-2 ml-16">
                    <Text
                      as="p"
                      variant="body-2"
                      className="text-skin-text-light"
                    >
                      {feature.description}
                    </Text>
                  </Box>
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
        <div className="bg-skin-fill-highlight py-16 px-4 sm:py-24 sm:px-6 lg:bg-none lg:px-0 lg:pl-8 lg:flex lg:items-center lg:justify-end">
          <div className="max-w-lg mx-auto w-full space-y-8 lg:mx-0">
            <div>
              <h2 className="sr-only">Price</h2>
              <p className="relative grid grid-cols-2">
                <span className="flex flex-col text-center">
                  <span className="text-5xl font-extrabold text-skin-text-contrast-fill-highlight tracking-tight">
                    $99
                  </span>
                  <span className="mt-2 text-base font-medium text-skin-text-fill-highlight-darker">
                    Setup fee
                  </span>
                  <span className="sr-only">plus</span>
                </span>
                <span
                  className="pointer-events-none absolute h-12 w-full flex items-center justify-center"
                  aria-hidden="true"
                >
                  <PlusIcon
                    className="h-6 w-6 text-skin-text-fill-highlight-darker"
                    aria-hidden="true"
                  />
                </span>
                <span>
                  <span className="flex flex-col text-center">
                    <span className="text-5xl font-extrabold text-skin-text-contrast-fill-highlight tracking-tight">
                      $4
                    </span>
                    <span className="mt-2 text-base font-medium text-skin-text-fill-highlight-darker">
                      Per month
                    </span>
                  </span>
                </span>
              </p>
            </div>
            <ul className="rounded overflow-hidden grid gap-px sm:grid-cols-2">
              {checklist.map((item) => (
                <li
                  key={item}
                  className="bg-skin-fill-highlight-dark py-4 px-4 flex items-center space-x-3 text-base text-skin-text-contrast-fill-highlight"
                >
                  <CheckIcon
                    className="h-6 w-6 text-skin-text-fill-highlight-darker"
                    aria-hidden="true"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <Box className="md:px-10">
              <Button
                fullWidth
                size="lg"
                variant="primary"
                className="bg-skin-fill"
              >
                Get started today
              </Button>
            </Box>
            <Box className="md:px-10">
              <Button fullWidth variant="tertiary">
                Try Workflow Lite for free
              </Button>
            </Box>
          </div>
        </div>
      </Box>
    </Box>
  );
}
