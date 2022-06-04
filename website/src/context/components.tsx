import { createContext, ReactNode, useContext, useMemo } from 'react';

export interface ComponentProps {
  key: string;
  name: string;
}

export const ComponentContext = createContext<ComponentProps[]>([]);

interface ComponentProviderProps {
  children: ReactNode;
  items: ComponentProps[];
}

export const ComponentProvider = ({
  children,
  items,
}: ComponentProviderProps) => {
  return (
    <ComponentContext.Provider value={items}>
      {children}
    </ComponentContext.Provider>
  );
};

export const useComponent = (name: string) => {
  const items = useContext(ComponentContext);

  const previousComponent = useMemo(() => {
    const index = items.findIndex((item) => item.name === name);

    if (index === 0) return null;
    if (index !== -1) {
      return items[index - 1];
    }
    return null;
  }, [items, name]);

  const nextComponent = useMemo(() => {
    const index = items.findIndex((item) => item.name === name);

    if (index === items.length - 1) return null;
    if (index !== -1) {
      return items[index + 1];
    }
    return null;
  }, [items, name]);

  return { items, nextComponent, previousComponent };
};
