import React, { useCallback, useEffect, useRef, useState } from 'react';

import { WrapperStyled } from '@/Components/PlaygroundSection/style';
import formatCode from '@/utils/formatCode';
import { LIB_VERSION } from '@/config';

type SnackProps = {
  code?: string;
  snackId?: string;
  snackName?: string;
};

const dependencies = `@expo/vector-icons@^13.0.0,react-native-beauty-design@${LIB_VERSION},react-native-safe-area-context@4.3.1`;

const Playground = ({ code, snackId, snackName = 'Beauty Design' }: SnackProps) => {
  const snackRef = useRef<any>(null);

  const updateIframeContent = useCallback(() => {
    const iframe = snackRef.current;
    let propsSnack = [];

    let doc = iframe.document;
    if (iframe.contentDocument) doc = iframe.contentDocument;
    else if (iframe.contentWindow) doc = iframe.contentWindow.document;

    if (code && !snackId) {
      propsSnack = [
        `data-snack-code="${formatCode(code)}"`,
        `data-snack-dependencies="${dependencies}"`,
        `data-snack-name="${snackName}"`
      ];
    } else {
      propsSnack = [`data-snack-id="${snackId}"`];
    }

    const expoScript = `<div ${propsSnack.join(
      ' '
    )} data-snack-platform="web" data-snack-preview="true" data-snack-loading="lazy" data-snack-theme="dark" style="overflow:hidden;background:transparent;border:none;height:100%;width:100%"></div><script async src="https://snack.expo.io/embed.js"></script>`;
    const iframeHtml = `<html><head><base target="_parent"></head><body style="margin: 0; padding: 0; overflow: hidden;">${expoScript}</body></html>`;

    doc.open();
    doc.writeln(iframeHtml);
    doc.close();
  }, [code, snackId, snackName]);

  useEffect(() => {
    updateIframeContent();
  }, [updateIframeContent]);

  return (
    <>
      <WrapperStyled className="overflow-hidden border-none w-full">
        <iframe
          ref={snackRef}
          frameBorder={0}
          width="100%"
          height="100%"
          id={`expo-snack-${snackId}`}
        />
      </WrapperStyled>
    </>
  );
};

export default Playground;
