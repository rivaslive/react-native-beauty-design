/*
eslint-disable
@typescript-eslint/no-unsafe-call,
@typescript-eslint/no-unsafe-member-access
*/
import React, { useState } from 'react';
import { Button } from 'antd';
import Copy from 'copy-to-clipboard';
// import Refractor from 'react-refractor';
import { CheckCircleTwoTone, CopyOutlined } from '@ant-design/icons';

// Load any languages you want to use from `refractor`
import { refractor } from 'refractor';
import { toH } from 'hast-to-hyperscript';
import ts from 'refractor/lang/typescript';
import tsx from 'refractor/lang/tsx';
import js from 'refractor/lang/javascript';
import jsx from 'refractor/lang/jsx';
import bash from 'refractor/lang/bash';
import css from 'refractor/lang/css';
import diff from 'refractor/lang/diff';

import { StyleBlockCode } from 'components/Atoms/Code/style';

refractor.register(ts);
refractor.register(tsx);
refractor.register(js);
refractor.register(jsx);
refractor.register(bash);
refractor.register(css);
refractor.register(diff);

interface BlockCodeProps {
  children?: string;
  copy?: boolean;
  language?: string;
}

const BlockCode = ({
  children,
  copy = true,
  language = 'tsx',
}: BlockCodeProps) => {
  const [textCopy, setTextCopy] = useState('');
  const [clicB, setClicB] = useState(false);

  const timeFunc = () => {
    return setTimeout(() => {
      setTextCopy('');
      setClicB(false);
    }, 5000);
  };

  const onCopy = () => {
    if (clicB) {
      clearTimeout(timeFunc());
      setTextCopy('');
      return setClicB((prev) => !prev);
    }
    const c = Copy(
      typeof children === 'string'
        ? children
        : 'Error the copy text in Beauty Design'
    );
    if (c) {
      setClicB(true);
      setTextCopy('Copied!');
      timeFunc();
    }
    return null;
  };

  const codeOut = refractor.highlight(children ?? '', language);

  return (
    <div className="block-code">
      <StyleBlockCode className={`language-${language}`}>
        <StyleBlockCode className={`language-${language}`} as="code">
          {toH(React.createElement, codeOut)}
        </StyleBlockCode>
      </StyleBlockCode>
      {copy && (
        <Button
          title="Copy"
          onClick={onCopy}
          className="block-code__copy"
          shape="round"
          icon={
            clicB ? (
              <CheckCircleTwoTone twoToneColor="#52c41a" />
            ) : (
              <CopyOutlined />
            )
          }
        >
          {textCopy}
        </Button>
      )}
    </div>
  );
};

export default BlockCode;
