import { BDCFragments, server } from "./api/graphql";
import { gql } from "graphql-tag";
import BDCRenderer from "../src/infra/bdc/render";
import { MainContainer } from "../src/components/foundation/layout/Container";

export default function Bdc(props) {
  return (
    <MainContainer>
      <BDCRenderer components={props.data.getLayout.components} />
    </MainContainer>
  );
}

export async function getStaticProps() {
  const response = await server.executeOperation({
    query: gql`
      ${BDCFragments}
      query {
        getLayout(input: { page: "/", platform: web }) {
          page
          platform
          components {
            ...components
          }
        }
      }
    `,
  });

  return {
    props: {
      data: response?.data,
    },
  };
}
