// TODO: Generates it automatically
// TODO: each Pattern dynamic, should have it's relative file on dato and a test "sachem" like to prevent it doesn't exist
export const Components = {
  PricingSection_v1: {
    name: 'pricingsection_v1',
    fields: ['mainTitle'],
    Component: /* GraphQL */ `
      type PricingSection_v1 implements Component {
        type: ComponentTypes!
        mainTitle: String
      }
    `,
    Fragment: /* GraphQL */ `
      fragment pricingsection_v1 on PricingSection_v1 {
        type
        mainTitle
      }
    `,
  },
  Heading_v1: {
    name: 'heading_v1',
    fields: [],
    Component: /* GraphQL */ `
      type Heading_v1 implements Component {
        type: ComponentTypes!
        title: String
      }
    `,
    Fragment: /* GraphQL */ `
      fragment heading_v1 on Heading_v1 {
        type
        title
      }
    `,
  },
  Footer_v1: {
    name: 'footer_v1',
    fields: [],
    Component: /* GraphQL */ `
      type Footer_v1 implements Component {
        type: ComponentTypes!
        title: String
      }
    `,
    Fragment: /* GraphQL */ `
      fragment footer_v1 on Footer_v1 {
        type
        title
      }
    `,
  },
};
