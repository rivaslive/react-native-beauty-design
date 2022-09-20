import { useCallback, useState } from 'react';

type VoidFunc = () => void;

type UseModalType = [boolean, VoidFunc, { open: VoidFunc; close: VoidFunc }];

export default function useModal(initialState = false): UseModalType {
  // State
  const [isOpen, setIsOpen] = useState<boolean>(initialState);

  // Handlers
  const open = useCallback(() => {
    setIsOpen(true);
  }, []);

  const close = useCallback(() => {
    setIsOpen(false);
  }, []);

  const toggle = useCallback(() => {
    setIsOpen((s) => !s);
  }, []);

  return [isOpen, toggle, { close, open }];
}
