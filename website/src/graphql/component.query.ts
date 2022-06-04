import { gql } from '@apollo/client';

export const COMPONENT_FRAGMENT = gql`
  fragment ComponentFragment on Componente {
    id
    title
    howToUse
    description
    defaultCode
    version {
      version
    }
    image {
      url
    }
    ejemplos {
      id
      title
      description
      code
      snack
      imagen {
        name
        url
      }
    }
    apis(sort: "title:asc") {
      id
      title
      description
      items(sort: "property:asc") {
        id
        property
        description
        type
        default
      }
    }
  }
`;

export const GET_ALL_COMPONENTS = gql`
  query getAllComponents($version: String) {
    componentes(where: { version: { version: $version } }) {
      title
      version {
        version
      }
    }
  }
`;

export const GET_COMPONENT_VERSION = gql`
  ${COMPONENT_FRAGMENT}
  query getComponent($title: String, $version: String) {
    componentes(where: { title: $title, version: { version: $version } }) {
      ...ComponentFragment
    }
  }
`;
