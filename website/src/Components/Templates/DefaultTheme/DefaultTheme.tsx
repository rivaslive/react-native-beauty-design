import { useMemo } from 'react';
import {
  Text,
  Link as NLink,
  useTheme,
  Grid,
  Tooltip
} from '@nextui-org/react';
import Link from 'next/link';

import { libTheme } from '@/config';
import ROUTES from '@/config/routes';
import Title from '@/Components/Title';
import BlockCode from '@/Components/BlockCode';
import processColor, { isLight } from '@/utils/processColor';

import { ColorStyle, WrapperStyle } from './style';
import processObject from '@/utils/processObject';

const DefaultThemeTemplate = () => {
  const { isDark } = useTheme();

  const colors = useMemo(() => {
    return processColor(libTheme[isDark ? 'colorsDark' : 'colorsLight']);
  }, [isDark]);

  const paddingObjectString = useMemo(() => {
    return processObject(libTheme.paddingSizes);
  }, []);

  const marginObjectString = useMemo(() => {
    return processObject(libTheme.marginSizes);
  }, []);

  const borderRadiusObjectString = useMemo(() => {
    return processObject(libTheme.borderRadius);
  }, []);

  const zIndicesObjectString = useMemo(() => {
    return processObject(libTheme.zIndices);
  }, []);

  const onCopy = (color: string) => {
    return navigator.clipboard.writeText(color);
  };

  return (
    <WrapperStyle>
      <Title>Default Theme</Title>
      <Text>Beauty Design default theme is based on React Context API.</Text>

      <Title level={2} className="mt-12">
        Colors:
      </Title>

      <Text>
        Beauty Design includes a default color palette out-of-the-box that is a
        great starting point if you don't have your own specific branding in
        mind. You can access the colors through the theme object, see the{' '}
        <Link href={ROUTES.PROVIDER.path + '#theme-object'}>
          <NLink className="inline">theme object</NLink>
        </Link>{' '}
        for more information.
      </Text>

      {colors.map(({ colors, name }) => {
        return (
          <div key={name}>
            <Title level={2} className="font-bold">
              {name}
            </Title>

            <Grid.Container gap={2}>
              {colors.map(({ value: color, name: nameColor }) => {
                const isWhiteText = isLight(color)
                  ? 'text-black'
                  : 'text-white';
                return (
                  <Grid key={nameColor}>
                    <Tooltip trigger="click" content="Copied!">
                      <ColorStyle
                        onClick={() => onCopy(color)}
                        className="h-28 w-28 rounded-2xl grid place-items-center cursor-pointer"
                        style={{ background: color }}
                      >
                        <div className="text-center">
                          <p className={`text-sm ${isWhiteText}`}>
                            {nameColor}
                          </p>
                          <p className={`font-bold ${isWhiteText}`}>{color}</p>
                        </div>
                      </ColorStyle>
                    </Tooltip>
                  </Grid>
                );
              })}
            </Grid.Container>
          </div>
        );
      })}

      <Title level={2} className="mt-12">
        Paddings:
      </Title>

      <BlockCode language="JSON" code={paddingObjectString} />

      <Title level={2} className="mt-12">
        Margins:
      </Title>
      <BlockCode language="JSON" code={marginObjectString} />

      <Title level={2} className="mt-12">
        Border Radius:
      </Title>
      <BlockCode language="JSON" code={borderRadiusObjectString} />

      <Title level={2} className="mt-12">
        zIndex:
      </Title>
      <BlockCode language="JSON" code={zIndicesObjectString} />
    </WrapperStyle>
  );
};
export default DefaultThemeTemplate;
