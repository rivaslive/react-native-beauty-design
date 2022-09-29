import { useEffect, useState } from 'react';

interface VerifyServerProps {
  loading: boolean;
  data?: IGraphComponentRes;
}

interface VerifyState {
  loading: boolean;
  data: null | IComponentes;
}

export const useVerifyServer = ({ loading, data }: VerifyServerProps) => {
  const [state, setState] = useState<VerifyState>({
    loading: true,
    data: null,
  });

  // eslint-disable-next-line consistent-return
  useEffect(() => {
    if (!loading) {
      if (data && data?.componentes) {
        if (data.componentes.length) {
          return setState({
            loading: false,
            data: data.componentes[0],
          });
        }
      }
      return setState((prev) => ({ ...prev, loading: false }));
    }
  }, [loading, data]);

  return state;
};
