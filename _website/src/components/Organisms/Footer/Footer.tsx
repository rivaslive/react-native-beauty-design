import React from 'react';
import Link from 'next/link';
import { Col, Row } from 'antd';

import { defaultVersion } from 'utils/defaultVersion';
import Title from 'components/Atoms/Title';

import { StyleButton, StyleFooter } from './style';

const Footer = () => {
  return (
    <StyleFooter>
      <Row>
        <Col xs={24} md={8}>
          <Title variant="POPPINS_18_22_800">Docs</Title>
          <div>
            <StyleButton type="link">
              <Link href={`/${defaultVersion}/getting-started`}>
                Getting started
              </Link>
            </StyleButton>
          </div>
          <div>
            <StyleButton type="link">
              <Link href={`/${defaultVersion}/components`}>Components</Link>
            </StyleButton>
          </div>
          <br />
          <br />
        </Col>
        <Col xs={24} md={8}>
          <Title variant="POPPINS_18_22_800">Community</Title>
          <div>
            <StyleButton type="link">
              <Link href={`/${defaultVersion}/getting-started`}>
                Google chat channel
              </Link>
            </StyleButton>
          </div>
          <div>
            <StyleButton type="link">
              <Link href={`/${defaultVersion}/components`}>Github</Link>
            </StyleButton>
          </div>
          <div>
            <StyleButton type="link">
              <Link href={`/${defaultVersion}/components`}>Stackoverflow</Link>
            </StyleButton>
          </div>
          <br />
          <br />
        </Col>
        <Col xs={24} md={8}>
          <Title variant="POPPINS_18_22_800">Code</Title>
          <div>
            <StyleButton type="link">
              <Link href={`/${defaultVersion}/getting-started`}>Github</Link>
            </StyleButton>
          </div>
          <div>
            <StyleButton type="link">
              <Link href={`/${defaultVersion}/getting-started`}>npm</Link>
            </StyleButton>
          </div>
        </Col>
      </Row>
    </StyleFooter>
  );
};

export default Footer;
