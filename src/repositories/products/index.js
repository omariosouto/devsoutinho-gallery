import { Client } from '@notionhq/client';
// https://developers.notion.com/reference/get-database
const ID_PRODUCTS_DB = 'f3df02c151b04c038ae23da141501922';

const notion = new Client({
  auth: process.env.NOTION_TOKEN,
});

export async function getProducts() {
  const products = await notion.databases.query({
    database_id: ID_PRODUCTS_DB,
  });

  const productsDTO = products.results
    .filter((product) => product.properties.Title.title.length !== 0)
    .map(async (product) => {
      const id = product.id;
      const title = product.properties.Title.title[0]?.text.content;
      const link = product?.properties.Link?.url;
      const description =
        product?.properties.Description.rich_text[0].plain_text;
      const image = product?.properties.Image.rich_text[0].plain_text;

      return {
        id,
        title,
        link,
        description,
        image,
      };
    });

  const result = Promise.all(productsDTO);
  return result;
}
