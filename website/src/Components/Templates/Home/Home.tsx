import Dots from '@/Components/Dots';
import Banner from '@/Components/Banner';
import Container from '@/Components/Container';
import Donations from '@/Components/Donations';
import PlaygroundSection from '@/Components/PlaygroundSection';
import WhatCanDoIt from '@/Components/WhatCanDoIt';
import DarkAndLightTheme from '@/Components/DarkAndLightTheme';
import WhyBeautyDesign from '@/Components/WhyBeautyDesign';

import { WrapperStyle } from './style';

const HomeTemplate = () => {
  return (
    <WrapperStyle>
      <Container className="relative" css={{ zIndex: '$zIndices$1' }}>
        <Dots />
        <Banner />
        <WhyBeautyDesign />
        <PlaygroundSection />
        <WhatCanDoIt />
        <DarkAndLightTheme />
        <Donations />
      </Container>
    </WrapperStyle>
  );
};
export default HomeTemplate;
