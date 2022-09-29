import React from 'react';

// components
import Imagen from 'components/Atoms/Imagen';

// styles
import {
  StyleBanner,
  StyleContentSlick,
  StyleContentTitle,
  StyleSeccondSection,
  StyleSubTitle,
  StyleText,
  StyleTitle,
} from './style';

const NightMode = () => {
  const [image, setImage] = React.useState<string>('/white.png');

  React.useEffect(() => {
    const timer1 = setTimeout(
      () =>
        setImage((prev) => {
          if (prev === '/white.png') {
            return '/dark.png';
          }
          return '/white.png';
        }),
      4000
    );
    return () => {
      clearTimeout(timer1);
    };
  }, [image]);

  return (
    <StyleSeccondSection>
      <StyleContentTitle>
        <StyleSubTitle variant="POPPINS_40_44_800">Automation</StyleSubTitle>
        <StyleTitle variant="POPPINS_70_77_800">
          Compatibility with dark mode
        </StyleTitle>
        <StyleText>
          Invert the colors of the texts to be able to display the info
          correctly and automatically
        </StyleText>
      </StyleContentTitle>
      <StyleContentSlick>
        <div className="animate__animated animate__bounceIn">
          <Imagen
            className="animate__animated animate__flipInY"
            key={image === '/white.png' ? 1 : 0}
            src={image}
            width={238}
            height={479}
          />
        </div>
      </StyleContentSlick>
      <StyleBanner />
    </StyleSeccondSection>
  );
};

export default NightMode;
