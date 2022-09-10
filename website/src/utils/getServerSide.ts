import { gql } from '@apollo/client';
import { initializeApollo } from 'apollo/config';
import {
  GET_ALL_COMPONENTS,
  GET_COMPONENT_VERSION,
} from 'graphql/component.query';
import { capitalize } from './utils';

interface SortI {
  property: string;
}

function sortItems(a: SortI, b: SortI) {
  if (!a.property.includes('[') && b.property.includes('[')) {
    return -1;
  }
  if (a.property.includes('[') && !b.property.includes('[')) {
    return 1;
  }
  if (a.property.includes('[') && b.property.includes('[')) {
    return 0;
  }
  if (a.property < b.property) {
    return -1;
  }
  if (b.property < a.property) {
    return 1;
  }
  return 0;
}

export const getPathsComponent = async (version: string | string[]) => {
  const client = initializeApollo();
  let paths = [];
  try {
    const { data } = await client.query({
      query: GET_ALL_COMPONENTS,
      variables: {
        version,
      },
    });
    paths = data.componentes.map((v: any) => ({
      params: {
        component: capitalize(v?.title || ''),
        version: v?.version?.version || version,
      },
    }));
  } catch (e) {
    console.log(e);
  }

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: 'blocking' };
};

export const getVersionsPage = async () => {
  const client = initializeApollo();
  let paths = [];
  try {
    const { data } = await client.query({
      query: gql`
        query {
          versions {
            id
            version
          }
        }
      `,
    });
    paths = data.versions.map((v: any) => ({
      params: v,
    }));
  } catch (e) {
    console.log(e);
  }

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: true };
};

export const getStaticsPropsComponent = async (
  component: string | string[],
  version: string | string[]
) => {
  let res: IComponentes | null = null;
  const client = initializeApollo();
  // Call an external API endpoint to get posts
  try {
    const { data }: { data: IGraphComponentRes } = await client.query({
      query: GET_COMPONENT_VERSION,
      variables: {
        title: component,
        version,
      },
    });

    if (data && data?.componentes) {
      if (data.componentes.length) {
        const _res = data.componentes[0];
        res = {
          ..._res,
          apis: _res.apis.map((f) => {
            // freeze in array
            const newItems = [...(f?.items || [])];
            const items = newItems.sort(sortItems);
            return {
              ...f,
              items,
            };
          }),
        };
      }
    }

    // By returning { props: { data } }, the component
    // will receive `data` as a prop at build time
    return {
      props: {
        data: { ...res, component },
        isBuilding: !res,
      },
    };
  } catch (e) {
    console.log(e);
    return {
      props: {
        data: null,
        isBuilding: true,
      },
    };
  }
};
