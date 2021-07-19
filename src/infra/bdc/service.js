import { gql } from 'apollo-server-micro';
import { server } from '../../modules/bff/handler';
import { BDCFragments } from '../../modules/bff/modules/layout/BDCComponents';

export default async function bdcService({ page }) {
  const response = await server.executeOperation({
    query: gql`
      ${BDCFragments}
      query ($page: String) {
        getLayout(input: { page: $page, platform: web }) {
          page
          platform
          components {
            ...components
          }
        }
      }
    `,
    variables: { page },
  });

  if (response.errors) throw new Error(response.errors);

  return {
    data: response.data || null,
  };
}
