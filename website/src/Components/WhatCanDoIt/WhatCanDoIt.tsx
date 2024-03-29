import { Button, Grid, Image, Text } from '@nextui-org/react';
import Title from '@/Components/Title';

type WhatCanDoItProps = {};

const WhatCanDoIt = (props: WhatCanDoItProps) => {
  return (
    <Grid.Container
      gap={4}
      alignItems="center"
      css={{
        minHeight: 500
      }}
    >
      <Grid xs={12} sm={4} justify="center">
        <Image
          width={400}
          height={400}
          src="/brand.svg"
          alt="Default Image"
          objectFit="contain"
        />
      </Grid>
      <Grid xs={12} sm={8} alignItems="center" direction="column">
        <Title className="text-center">
          Reusable Components and easy to implement
        </Title>
        <Text size="$2xl" className="text-center w-full mb-4">
          With{' '}
          <Text as="strong" color="warning">
            Beauty Design
          </Text>{' '}
          you can use any component with few lines of code and with great
          customization, and most importantly very easy to use and understand.
        </Text>

        <Button className="mb-5">Components</Button>
      </Grid>
    </Grid.Container>
  );
};

export default WhatCanDoIt;
