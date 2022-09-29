import React from 'react';
import Link from 'next/link';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';

// components
import Text from 'components/Atoms/Text';

// styles
import { StyleContent, StyleIcon, StyleNext } from './style';

interface IProps {
  href: string;
  title: string;
  summary?: string;
  isPrev?: boolean;
}

const NextAndPrevStep = ({ href, title, summary, isPrev }: IProps) => {
  return (
    <Link href={href}>
      <StyleNext>
        <StyleContent>
          {isPrev && (
            <StyleIcon>
              <LeftOutlined />
            </StyleIcon>
          )}
          <Text className="text" variant="ROBOT_14_28_400">{`${title}: ${
            summary ?? ''
          }`}</Text>
          {!isPrev && (
            <StyleIcon>
              <RightOutlined />
            </StyleIcon>
          )}
        </StyleContent>
      </StyleNext>
    </Link>
  );
};

export default NextAndPrevStep;
