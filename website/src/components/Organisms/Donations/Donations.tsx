import React from 'react';
import { Tooltip } from 'antd';
import Lottie from 'react-lottie';

import Bird from 'assets/v1/lotties/bird.json';

// components
import Imagen from 'components/Atoms/Imagen';
import Text from 'components/Atoms/Text';

// styles
import {
  StyleContent,
  StyleImage,
  StyleMe,
  StyleSponsors,
  StyleTitle,
  StyleWrapperImages,
} from './style';

interface IProps {
  className?: string;
  id?: string;
}

const Donations = (props: IProps) => {
  return (
    <StyleMe {...props}>
      <StyleImage>
        {/* animation */}
        <Lottie
          width={500}
          height={400}
          style={{ maxWidth: '100%', margin: 'auto' }}
          options={{
            loop: true,
            autoplay: true,
            animationData: Bird,
            rendererSettings: {
              preserveAspectRatio: 'xMidYMid slice',
            },
          }}
        />
        {/* end animation */}
      </StyleImage>
      <StyleContent>
        <StyleTitle variant="POPPINS_70_77_800">Do you like</StyleTitle>
        <StyleTitle variant="POPPINS_40_44_800">
          Beauty Design a lot?
        </StyleTitle>
        <Text className="content" variant="ROBOT_20_25_400">
          You can help us to continue maintaining this incredible library, you
          can give me your financial support from the following platforms.
        </Text>
        <StyleWrapperImages>
          <Tooltip title="Opencolletive">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://opencollective.com/beauty-design#category-CONTRIBUTE"
            >
              <Imagen
                className="img"
                width={40}
                height={40}
                src="https://opencollective-production.s3-us-west-1.amazonaws.com/8aa714c0-79fa-11e7-9a37-35a8ed456d67.png"
              />
            </a>
          </Tooltip>
          <Tooltip title="stripe">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://paypal.me/rivaslive"
            >
              <Imagen
                className="img"
                width={76}
                height={48}
                src="https://www.paypalobjects.com/webstatic/mktg/logo/pp_cc_mark_37x23.jpg"
              />
            </a>
          </Tooltip>
        </StyleWrapperImages>
        <StyleSponsors>There is no sponsor for now</StyleSponsors>
      </StyleContent>
    </StyleMe>
  );
};

export default React.memo(Donations);
