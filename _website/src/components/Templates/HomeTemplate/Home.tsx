import React from 'react';

import useScrollDirection from 'hooks/useScrollDirection';

// components
import Me from 'components/Organisms/Me';
import Footer from 'components/Organisms/Footer';
import Examples from 'components/Organisms/Examples';
import Donations from 'components/Organisms/Donations';
import NightMode from 'components/Organisms/NightMode';
import Navbar from 'components/Molecules/Layout/Navbar';
import BannerHome from 'components/Organisms/BannerHome';
import WhyBeautyUI from 'components/Organisms/WhyBeautyUi';

// styles
import { StyleContent, StyleHome } from './styles';

// mock
import { menuHome } from './mock';

const HomeTemplate = () => {
  const { scrollPositionAtTop } = useScrollDirection(true, 0, 200);

  return (
    <StyleHome id="home">
      <Navbar isHome isSolid={scrollPositionAtTop} menu={menuHome} />
      <StyleHome>
        <StyleContent>
          <BannerHome />
          <WhyBeautyUI id="why-beauty-ui" />
          <NightMode />
          <Examples id="examples" />
          <Me />
          <Donations id="donations" />
          <Footer />
        </StyleContent>
      </StyleHome>
    </StyleHome>
  );
};

export default React.memo(HomeTemplate);
