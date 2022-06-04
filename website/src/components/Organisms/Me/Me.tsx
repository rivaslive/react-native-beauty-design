import React from 'react';
import { LinkedinOutlined } from '@ant-design/icons';

// components
import Imagen from 'components/Atoms/Imagen';
import Button from 'components/Atoms/Button';

// styles
import { StyleContent, StyleImage, StyleMe, StyleTitle } from './style';

const Me = () => {
  return (
    <StyleMe>
      <StyleContent>
        <StyleTitle variant="POPPINS_70_77_800">Author:</StyleTitle>
        <StyleTitle variant="POPPINS_40_44_800">Software Developer</StyleTitle>
        <StyleTitle className="color-secondary" variant="POPPINS_19_25_800">
          ING. KEVIN RIVAS
        </StyleTitle>
        <br />
        <Button variant="LANDING_GRADIENT_CIAN">
          <a
            href="https://www.linkedin.com/in/kevin-rivas-frontend-developer"
            rel="noreferrer noopener"
            target="_blank"
          >
            <span style={{ color: 'white', fontSize: 20 }}>
              <LinkedinOutlined /> Linkedin
            </span>
          </a>
        </Button>
      </StyleContent>
      <StyleImage>
        <Imagen
          className="image-profile"
          src="/me.png"
          width="100%"
          height="100%"
        />
      </StyleImage>
    </StyleMe>
  );
};

export default React.memo(Me);
