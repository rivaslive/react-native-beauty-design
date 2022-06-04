import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Title, InputScrollView, Button, Modal, Text } from 'react-native-beauty-design';

const { useModal } = Modal;

const ModalScreen = () => {
  const { visible, toggleModal } = useModal();
  const { visible: visibleCentered, toggleModal: toggleModalCentered } =
    useModal();
  const { visible: visibleScroll, toggleModal: toggleModalScroll } =
    useModal();
  const { visible: visibleFullScreen, toggleModal: toggleModalFullScreen } =
    useModal();
  const { visible: visibleBottom, toggleModal: toggleModalBottom } =
    useModal();
  const { visible: visibleExtra, toggleModal: toggleModalExtra } =
    useModal();
  const { visible: visibleMask, toggleModal: toggleModalMask } = useModal();
  return (
    <InputScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <View>
          <Title level={3}>Default Modal</Title>
          <Button onPress={toggleModal}>Open Modal</Button>
        </View>

        <Modal visible={visible} closeModal={toggleModal}>
          <Title>Welcome!</Title>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus
            aspernatur, autem cum error exercitationem explicabo illo neque
            nihil non ratione sed unde voluptatibus. A consectetur eos error,
            iusto nisi sapiente?
          </Text>
        </Modal>
        {/* END */}

        <View>
          <Title level={3}>Centered Modal</Title>
          <Button onPress={toggleModalCentered}>Open Modal</Button>
        </View>

        <Modal
          centered
          visible={visibleCentered}
          closeModal={toggleModalCentered}
        >
          <Title>Welcome!</Title>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus
            aspernatur, autem cum error exercitationem explicabo illo neque
            nihil non ratione sed unde voluptatibus. A consectetur eos error,
            iusto nisi sapiente?
          </Text>
        </Modal>


        <View>
          <Title level={3}>Scroll Modal</Title>
          <Button onPress={toggleModalScroll}>Open Modal</Button>
        </View>

        <Modal
          centered
          visible={visibleScroll}
          closeModal={toggleModalScroll}
        >
          <Title>Welcome!</Title>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus
            aspernatur, autem cum error exercitationem explicabo illo neque
            nihil non ratione sed unde voluptatibus. A consectetur eos error,
            iusto nisi sapiente?
          </Text>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus
            aspernatur, autem cum error exercitationem explicabo illo neque
            nihil non ratione sed unde voluptatibus. A consectetur eos error,
            iusto nisi sapiente?
          </Text>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus
            aspernatur, autem cum error exercitationem explicabo illo neque
            nihil non ratione sed unde voluptatibus. A consectetur eos error,
            iusto nisi sapiente?
          </Text>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus
            aspernatur, autem cum error exercitationem explicabo illo neque
            nihil non ratione sed unde voluptatibus. A consectetur eos error,
            iusto nisi sapiente?
          </Text>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus
            aspernatur, autem cum error exercitationem explicabo illo neque
            nihil non ratione sed unde voluptatibus. A consectetur eos error,
            iusto nisi sapiente?
          </Text>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus
            aspernatur, autem cum error exercitationem explicabo illo neque
            nihil non ratione sed unde voluptatibus. A consectetur eos error,
            iusto nisi sapiente?
          </Text>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus
            aspernatur, autem cum error exercitationem explicabo illo neque
            nihil non ratione sed unde voluptatibus. A consectetur eos error,
            iusto nisi sapiente?
          </Text>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus
            aspernatur, autem cum error exercitationem explicabo illo neque
            nihil non ratione sed unde voluptatibus. A consectetur eos error,
            iusto nisi sapiente?
          </Text>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus
            aspernatur, autem cum error exercitationem explicabo illo neque
            nihil non ratione sed unde voluptatibus. A consectetur eos error,
            iusto nisi sapiente?
          </Text>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus
            aspernatur, autem cum error exercitationem explicabo illo neque
            nihil non ratione sed unde voluptatibus. A consectetur eos error,
            iusto nisi sapiente?
          </Text>
        </Modal>


        {/* END */}
        <View>
          <Title level={3}>Mask closable Modal</Title>
          <Button onPress={toggleModalMask}>Open Modal</Button>
        </View>

        <Modal
          centered
          maskClosable={false}
          visible={visibleMask}
          closeModal={toggleModalMask}
        >
          <Title>Welcome!</Title>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus
            aspernatur, autem cum error exercitationem explicabo illo neque
            nihil non ratione sed unde voluptatibus. A consectetur eos error,
            iusto nisi sapiente?
          </Text>
        </Modal>

        {/* END */}
        <View>
          <Title level={3}>FullScreen Modal</Title>
          <Button onPress={toggleModalFullScreen}>Open Modal</Button>
        </View>

        <Modal
          fullScreen
          visible={visibleFullScreen}
          closeModal={toggleModalFullScreen}
        >
          <Title>Welcome!</Title>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus
            aspernatur, autem cum error exercitationem explicabo illo neque
            nihil non ratione sed unde voluptatibus. A consectetur eos error,
            iusto nisi sapiente?
          </Text>
        </Modal>

        {/* END */}
        <View>
          <Title level={3}>Position Bottom Modal</Title>
          <Button onPress={toggleModalBottom}>Open Modal</Button>
        </View>

        <Modal
          position="bottom"
          visible={visibleBottom}
          closeModal={toggleModalBottom}
        >
          <Title>Welcome!</Title>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus
            aspernatur, autem cum error exercitationem explicabo illo neque
            nihil non ratione sed unde voluptatibus. A consectetur eos error,
            iusto nisi sapiente?
          </Text>
        </Modal>
        {/* END */}

        <View>
          <Title level={3}>With extra content</Title>
          <Button onPress={toggleModalExtra}>Open Modal</Button>
        </View>

        <Modal
          position="bottom"
          visible={visibleExtra}
          closeModal={toggleModalExtra}
          extra={<Title>Extra content</Title>}
        >
          <Title>Welcome!</Title>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus
            aspernatur, autem cum error exercitationem explicabo illo neque
            nihil non ratione sed unde voluptatibus. A consectetur eos error,
            iusto nisi sapiente?
          </Text>
        </Modal>
        {/* END */}
      </View>
      <View style={{ height: 75 }} />
    </InputScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    height: '100%',
  },
  headTitle: {
    paddingLeft: 20,
    paddingRight: 20,
    borderWidth: 1,
    borderColor: 'transparent',
    borderBottomColor: 'rgba(100, 100, 100, .3)',
  },
  space: {
    marginTop: 50,
  },
});

export default ModalScreen;
