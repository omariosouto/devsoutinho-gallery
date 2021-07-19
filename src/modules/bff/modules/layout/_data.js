/**
1. everypage must have declared it's components to build the dynamic query that goes to the server
*/
import { Components } from './components';

async function pageContentService(pagename) {
  const options = {
    method: 'POST',
    headers: {
      Authorization: '2f915d861583aa173ef8de6c2de77c',
    },
  };
  const bdcRecords = await fetch('https://graphql.datocms.com/', {
    ...options,
    body: JSON.stringify({
      query: /* GraphQL */ `
        query {
          ${pagename}page {
            bdc {
              __typename
            }
          }
        }
      `,
    }),
  })
    .then((res) => res.json())
    .then(({ data }) => data[`${pagename}page`].bdc)
    .then((arr) => arr.map(({ __typename }) => __typename));

  const query = /* GraphQL */ `
  query {
    ${pagename}page {
      bdc {
        __typename
        ${bdcRecords.reduce((acc, ComponentBlockRecord) => {
          const ComponentName = ComponentBlockRecord.replace('Record', '');

          const CurrentComponentName = Object.keys(Components).find(
            (component) =>
              ComponentName.toLowerCase() ===
              component.toLowerCase().replace('_', '')
          );

          return `
            ${acc}
            ... on ${ComponentBlockRecord} {
              _modelApiKey
              ${Components[CurrentComponentName].fields.join('')}
            }`;
        }, '')}
      }
    }
  }
  `;

  return fetch('https://graphql.datocms.com/', {
    ...options,
    body: JSON.stringify({
      query,
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
