import 'video.js/dist/video-js.css';

import React from 'react';
import {
  CodeSandboxOutlined,
  DownOutlined,
  RightOutlined,
} from '@ant-design/icons';

// components
import Title from 'components/Atoms/Title';
import { BlockCode } from 'components/Atoms/Code';
import Text from 'components/Atoms/Text';
import Tooltip from 'components/Atoms/Tooltip';
import ImageOrVideoFrame from 'components/Atoms/ImageOrVideoFrame';

// styles
import {
  StyleExample,
  StyleFirstSection,
  StyleFooter,
  StyleSecondSection,
  StyleShowCode,
  StyleSpace,
  StyleTitle,
  StyleContent,
  StyleCode,
} from './style';

interface IProps {
  preview: string;
  title: string;
  summary: string;
  code: string;
  snack?: string;

  [key: string]: unknown;
}

const Example = ({ title, summary, code, preview, snack, ...rest }: IProps) => {
  const [showCode, setShowCode] = React.useState<boolean>(false);

  const showCodeFunc = () => {
    setShowCode((prev) => !prev);
  };

  const openSnack = () => {
    window.open(snack, '_blank');
  };

  return (
    <StyleExample {...rest}>
      <StyleSecondSection>
        <StyleTitle>
          <Title
            textTransform="capitalize"
            className="title"
            isLink
            variant="ROBOT_24_28_500"
          >
            {title}
          </Title>
        </StyleTitle>
        <Text variant="ROBOT_14_28_400" html={summary} />
      </StyleSecondSection>
      <StyleContent>
        <StyleCode>
          <StyleFooter>
            <StyleSpace>
              <Tooltip
                text="Show code"
                active={showCode}
                title="Show code"
                icon={showCode ? <DownOutlined /> : <RightOutlined />}
                onClick={showCodeFunc}
              />
              {snack && (
                <Tooltip
                  text="Snack"
                  title="Code Snack"
                  onClick={openSnack}
                  icon={<CodeSandboxOutlined />}
                />
              )}
            </StyleSpace>
          </StyleFooter>

          <StyleShowCode className={showCode ? 'show' : ''}>
            <BlockCode>{code}</BlockCode>
          </StyleShowCode>
        </StyleCode>

        <StyleFirstSection>
          <ImageOrVideoFrame src={preview} />
        </StyleFirstSection>
      </StyleContent>
    </StyleExample>
  );
};

export default Example;
