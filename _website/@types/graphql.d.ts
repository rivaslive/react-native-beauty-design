declare interface IGraphComponentReq {
  title: string;
  version: string;
}

declare interface IComponentes {
  id: string;
  component: string;
  title: string;
  description: string;
  howToUse: string;
  defaultCode?: string;
  version: {
    version: string;
  };
  image?: {
    url?: string;
  };
  ejemplos: {
    id: string;
    title: string;
    description: string;
    code: string;
    snack?: string;
    imagen: {
      name?: string;
      url: string;
    };
  }[];
  apis: {
    id: string;
    title: string;
    description: string;
    items: {
      id: string;
      property: string;
      description: string;
      type: string;
      default: string;
    }[];
  }[];
}

declare interface IGraphComponentRes {
  componentes: IComponentes[];
}
