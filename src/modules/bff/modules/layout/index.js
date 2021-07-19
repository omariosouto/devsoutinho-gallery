import { gql } from 'apollo-server-micro';
import { BDCComponents } from './BDCComponents';
import { Components } from './components';
import { data } from './_data';

const typeDefs = gql`
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

  # ============================
  input QueryLayoutInput {
    page: String
    platform: Platform
  }
  extend type Query {
    getLayout(input: QueryLayoutInput!): Layout
  }
`;

const layoutModule = {
  typeDefs,
  resolvers: {
    Query: {
      async getLayout(_, { input }) {
        const pageComponents = await data[input.platform][input.page]();
        return {
          page: input.page,
          platform: input.platform,
          components: pageComponents.components,
        };
      },
    },
    Commons: {
      Component: {
        __resolveType(obj) {
          return Object.keys(Components).find(
            (component) => component.toLowerCase() === obj.type.toLowerCase()
          );
        },
      },
    },
  },
};

export default layoutModule;
