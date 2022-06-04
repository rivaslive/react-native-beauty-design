import * as React from 'react';

export type ScrollDirection = 'UP' | 'DOWN';

// https://stackoverflow.com/questions/62497110/detect-scroll-direction-in-react-js/62497293#62497293

const useScrollDirection = (
  active = true,
  thresholdUp = 0,
  thresholdDown = 100
) => {
  // Refs
  const lastScrollPositionAtTop = React.useRef<boolean>(true);
  const globalActive = React.useRef<boolean>(active);

  // State
  const [scrollDir, setScrollDir] = React.useState<ScrollDirection>('DOWN');
  const [scrollPositionAtTop, setScrollPositionAtTop] =
    React.useState<boolean>(true);

  // Effects
  React.useEffect(() => {
    if (typeof window !== 'undefined') {
      // const thresholdUp = 0;
      // const thresholdDown = 1;
      let lastScrollY = window.pageYOffset;
      let ticking = false;

      const updateScrollDir = () => {
        const scrollY = window.pageYOffset;

        // Down
        if (
          scrollY > lastScrollY &&
          Math.abs(scrollY - lastScrollY) < thresholdDown
        ) {
          ticking = false;
          return;
        }
        // Up
        if (
          scrollY < lastScrollY &&
          Math.abs(scrollY - lastScrollY) < thresholdUp
        ) {
          ticking = false;
          return;
        }
        // if (Math.abs(scrollY - lastScrollY) < threshold) {
        //   ticking = false;
        //   return;
        // }
        setScrollDir(scrollY > lastScrollY ? 'DOWN' : 'UP');
        lastScrollY = scrollY > 0 ? scrollY : 0;

        if (
          lastScrollPositionAtTop.current ||
          (lastScrollPositionAtTop.current && lastScrollY > 0) ||
          (!lastScrollPositionAtTop.current && lastScrollY === 0)
        ) {
          setScrollPositionAtTop(lastScrollY === 0);
        }

        ticking = false;
      };

      const onScroll = () => {
        if (!ticking && globalActive.current) {
          window.requestAnimationFrame(updateScrollDir);
          ticking = true;
        }
      };

      window.addEventListener('scroll', onScroll);

      return () => window.removeEventListener('scroll', onScroll);
    }
    return () => {};
  }, [thresholdDown, thresholdUp]);

  React.useEffect(() => {
    globalActive.current = active;
  }, [active]);

  return {
    scrollDir,
    scrollPositionAtTop,
    setScrollDir,
  };
};

export default useScrollDirection;
