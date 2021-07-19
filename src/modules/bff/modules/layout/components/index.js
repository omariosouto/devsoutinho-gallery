export const Components = {
  PricingSection: {
    name: 'pricingSection',
    Component: /* GraphQL */ `
      type PricingSection implements Component {
        type: ComponentTypes!
        title: String
      }
    `,
    Fragment: /* GraphQL */ `
      fragment pricingSection on PricingSection {
        type
        title
      }
    `,
  },
  Heading: {
    name: 'heading',
    Component: /* GraphQL */ `
      type Heading implements Component {
        type: ComponentTypes!
        title: String
      }
    `,
    Fragment: /* GraphQL */ `
      fragment heading on Heading {
        type
        title
      }
    `,
  },
  Footer: {
    name: 'footer',
    Component: /* GraphQL */ `
      type Footer implements Component {
        type: ComponentTypes!
        title: String
      }
    `,
    Fragment: /* GraphQL */ `
      fragment footer on Footer {
        type
        title
      }
    `,
  },
};
