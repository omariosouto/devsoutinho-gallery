import { gql } from 'apollo-server-micro';
import { Components } from './components';

export const BDCComponents = gql`
  enum ComponentTypes {
    ${Object.keys(Components).reduce(
      (acc, item) => acc + ' ' + Components[item].name,
      ''
    )}
  }

  ${Object.keys(Components).reduce(
    (acc, item) => acc + ' ' + Components[item].Component,
    ''
  )}
`;

export const BDCFragments = gql`
  ${Object.keys(Components).reduce(
    (acc, item) => acc + ' ' + Components[item].Fragment,
    ''
  )}

  fragment components on Component {
    ${Object.keys(Components).reduce(
      (acc, item) => acc + ' ...' + Components[item].name,
      ''
    )}
  }
`;
