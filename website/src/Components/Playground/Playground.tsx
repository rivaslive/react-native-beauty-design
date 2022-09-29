import { Grid, Text } from '@nextui-org/react';
import Snack from '@/Components/Snack';
import Title from '@/Components/Title';

const Playground = () => {
  return (
    <Grid.Container
      justify="center"
      alignItems="center"
      css={{ paddingTop: 50, paddingBottom: 150 }}
    >
      <Grid xs={12} alignItems="center" direction="column">
        <Title className="text-center">Create beautiful apps very fast</Title>
        <Text size="$2xl" weight="semibold" className="text-center w-full mb-4">
          Building apps in React Native has never been so easy.
        </Text>
      </Grid>

      <Grid xs={12} sm={10} justify="center">
        <Snack snackId="@rivaslive/beauty-design" />
      </Grid>
    </Grid.Container>
  );
};

export default Playground;
