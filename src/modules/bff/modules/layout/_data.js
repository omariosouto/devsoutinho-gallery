/**
1. everypage must have declared it's components to build the dynamic query that goes to the server
*/

async function pageContentService(pagename) {
  return fetch('https://graphql.datocms.com/', {
    method: 'POST',
    headers: {
      Authorization: '2f915d861583aa173ef8de6c2de77c',
    },
    body: JSON.stringify({
      query: /* GraphQL */ `
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
      return res.data[`${pagename}page`].bdc;
    })
    .then((components) =>
      components
        .filter((component) => Object.keys(component).length)
        .map((component) => {
          return component;
        })
        .map(({ _modelApiKey, ...component }) => ({
          ...component,
          type: _modelApiKey,
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
