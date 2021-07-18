import { ApolloServer } from "apollo-server-micro";
import { gql } from "graphql-tag";
import { makeExecutableSchema } from "graphql-tools";

const componentByComponentType = {
  heading: "Heading",
  pricingSection: "PricingSection",
  footer: "Footer",
};

const data = {
  web: {
    "/": {
      components: [
        {
          type: "heading",
          title: "Welcome to the BDC!",
        },
        {
          type: "pricingSection",
          title: "...",
        },
        {
          type: "footer",
          title: "I'm the footer",
        },
      ],
    },
  },
};

// ==========================================
// ==========================================
const Components = {
  PricingSection: {
    name: "pricingSection",
    Component: gql`
      type PricingSection implements Component {
        type: ComponentTypes!
        title: String
      }
    `,
    Fragment: gql`
      fragment pricingSection on PricingSection {
        type
        title
      }
    `,
  },
  Heading: {
    name: "heading",
    Component: gql`
      type Heading implements Component {
        type: ComponentTypes!
        title: String
      }
    `,
    Fragment: gql`
      fragment heading on Heading {
        type
        title
      }
    `,
  },
  Footer: {
    name: "footer",
    Component: gql`
      type Footer implements Component {
        type: ComponentTypes!
        title: String
      }
    `,
    Fragment: gql`
      fragment footer on Footer {
        type
        title
      }
    `,
  },
};

const BDCComponents = gql`
  enum ComponentTypes {
    ${Object.keys(Components).reduce(
      (acc, item) => acc + " " + Components[item].name,
      ""
    )}
  }

  ${Components.Heading.Component}
  ${Components.PricingSection.Component}
  ${Components.Footer.Component}
`;

export const BDCFragments = gql`
  ${Components.Heading.Fragment}
  ${Components.PricingSection.Fragment}
  ${Components.Footer.Fragment}

  fragment components on Component {
    ${Object.keys(Components).reduce(
      (acc, item) => acc + " ..." + Components[item].name,
      ""
    )}
  }
`;
// ==========================================
// ==========================================

const layoutModule = {
  typeDefs: gql`
    enum Platform {
      web
      mobile
    }

    type Layout {
      page: String
      platform: Platform
      components: [Component!]!
    }
    interface Component {
      type: ComponentTypes!
    }

    # [Components]
    ${BDCComponents}
    # ===============================
    input QueryLayoutInput {
      page: String!
      platform: Platform!
    }
    extend type Query {
      getLayout(input: QueryLayoutInput!): Layout
    }
  `,
  resolvers: {
    Query: {
      getLayout(_, { input }) {
        return {
          page: input.page,
          platform: input.platform,
          ...data[input.platform][input.page],
        };
      },
    },
    Commons: {
      Component: {
        __resolveType(obj) {
          return componentByComponentType[obj.type];
        },
      },
    },
  },
};

const typeDefs = gql`
  enum ContentLocale {
    PT_BR
    EN_US
  }
  type Query {
    greet: String
  }

  input CreateSampleTextInput {
    text: String!
  }
  type Mutation {
    createSampleText(input: CreateSampleTextInput): String!
  }
`;

export const schema = makeExecutableSchema({
  typeDefs: [typeDefs, layoutModule.typeDefs],
  resolvers: {
    ...layoutModule.resolvers.Commons,
    Query: {
      greet: () => "Welcome to DevSoutinho verso",
      ...layoutModule.resolvers.Query,
    },
    ...layoutModule.resolvers.Commons,
    Mutation: {
      createSampleText: (_, args) => args.input.text,
      ...layoutModule.resolvers.Mutation,
    },
  },
});

export const server = new ApolloServer({
  schema,
  introspection: true,
  playground: true,
});

export const config = {
  api: {
    bodyParser: false,
  },
};

export default server.createHandler({
  path: "/api/graphql",
});
