import bdcService from '../../src/infra/bdc/service';
import BDCRenderer from '../../src/infra/bdc/render';
import { MainContainer } from '../../src/components/foundation/layout/Container';

export default function Bdc(props) {
  return (
    <MainContainer>
      {props.data?.getLayout?.components && (
        <BDCRenderer components={props.data.getLayout.components} />
      )}
    </MainContainer>
  );
}

export async function getStaticProps() {
  const { data } = await bdcService({ page: '/bdc' });

  return {
    props: {
      data,
    },
  };
}
