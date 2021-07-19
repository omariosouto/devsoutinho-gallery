/**
1. everypage must have declared it's components to build the dynamic query that goes to the server
2. each Pattern dynamic, should have it's relative file on dato and a test "sachem" like to prevent it doesn't exist
*/

async function pageContentService(pagename) {
  return fetch('https://graphql.datocms.com/', {
    method: 'POST',
    headers: {
      Authorization: '2f915d861583aa173ef8de6c2de77c',
    },
    body: JSON.stringify({
      query: `
        query {
          ${pagename}page {
            bdc {
              ... on FooterV1Record {
                title 
                _modelApiKey
              }
              ... on HeadingV1Record {
                title
                _modelApiKey
              }
              ... on PricingsectionV1Record {
                _modelApiKey
                mainTitle
              }
            }
          }
        }
      `,
    }),
  })
    .then((res) => res.json())
    .then((res) => {
      if (res.errors) {
        const error = new Error('pageContentService error');
        error.errors = res.errors;
        // throw error;
      }
      return res.data[`${pagename}page`].bdc;
    })
    .then((components) =>
      components.map(({ _modelApiKey, ...component }) => ({
        ...component,
        type: _modelApiKey.split('_')[0],
      }))
    );
}

export const data = {
  web: {
    '/': async () => {
      const components = await pageContentService('home');
      return {
        components,
      };
    },
    '/bdc': async () => {
      const components = await pageContentService('bdc');
      return {
        components,
      };
    },
  },
};
