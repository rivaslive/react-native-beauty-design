import React from 'react';
import { StyleSheet, View, Platform } from 'react-native';
import {
  Input,
  Title,
  InputScrollView,
  DatePicker,
  Space,
  Checkbox,
  // Select,
  // Badge,
  // Rate,
  // Badge,
  Icon,
} from 'react-native-beauty-design';

const { TextArea } = Input;

const InputScreen = () => {
  return (
    <InputScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <View>
          <Title level={3}>Default Input</Title>
          <Input placeholder="Default input" />
          <Title level={3}>Sizes</Title>
          <Input placeholder="Small input" size="small" />
          <Input placeholder="Middle input" size="middle" />
          <Input placeholder="Large input" size="large" />
          <Input
            placeholder="Email or username"
            prefix={<Icon name="mail" type="antdesign" />}
          />
          <Input type="password" placeholder="Insert password" />
          <Input
            placeholder="Prefix and Suffix"
            prefix={<Icon name="lock" type="antdesign" />}
            suffix={<Icon name="mail" type="antdesign" />}
          />

          <Title level={3}>Placeholder color</Title>
          <Input
            placeholder="Placeholder color Primary"
            placeholderColor="primary"
          />
          <Input
            placeholder="Placeholder color Success"
            placeholderColor="success"
          />
          <Input
            placeholder="Placeholder color #A569BD"
            placeholderColor="#A569BD"
            borderInputColor="#A569BD"
          />
          <Title level={3}>Error input</Title>
          <Input
            error
            defaultValue="Kevin R"
            placeholder="Placeholder color Primary"
          />
          <Title level={5}>With message error</Title>
          <Input
            error
            textError="This is required field"
            defaultValue="Kevin R"
            placeholder="Placeholder color Primary"
          />
        </View>
        <View>
          <Title level={3}>Input Number</Title>
          <Input type="numeric" placeholder="Insert only numbers" />
          <Input
            error
            textError="This is required field"
            type="numeric"
            placeholder="Insert only numbers"
          />
        </View>
        <View>
          <Title level={3}>Date, Time, Datetime Pickers</Title>
          <Space>
            <DatePicker
              style={{ minWidth: 150 }}
              onChange={(c: string, d: Date) => console.log({ c, d })}
            />
            <DatePicker size="small" style={{ minWidth: 150 }} />
            <DatePicker style={{ minWidth: 150 }} />
            <DatePicker size="large" style={{ minWidth: 150 }} />
          </Space>

          <Title level={5}>Time</Title>
          <DatePicker mode="time" format="HH:MM A" />

          <Title level={5}>Datetime</Title>
          <DatePicker mode="datetime" />

          <Title level={5}>With calendar (iOS)</Title>
          <DatePicker
            suffix={null}
            display={Platform.OS === 'ios' ? 'inline' : undefined}
          />

          <Title level={5}>With format date</Title>
          <DatePicker
            format="DD MMM, YYYY"
            display={Platform.OS === 'ios' ? 'inline' : undefined}
          />
        </View>
        {/*<View>
          <Title level={3}>Badge</Title>
          <Badge.Group>
            <Badge label="Badge 1" value={1} />
            <Badge label="Badge 2" value={2} />
            <Badge label="Badge 3" value={3} />
          </Badge.Group>

          <Title level={4}>Custom colors</Title>
          <Badge.Group activeColor="warning" defaultValue={2} align="vertical">
            <Badge label="Badge 1" value={1} />
            <Badge label="Badge 2" value={2} />
            <Badge label="Badge 3" value={3} />
          </Badge.Group>

          <Title level={4}>Horizontal align</Title>
          <Badge.Group align="horizontal">
            <Badge label="Badge 1" value={1} />
            <Badge label="Badge 2" value={2} />
            <Badge label="Badge 3" value={3} />
          </Badge.Group>
        </View>*/}
        <View>
          <Title level={3}>Checkbox</Title>
          <Checkbox label="Option 1" />
          <Checkbox label="Option 2" activeColor="warning" />
          <Checkbox label="Option 3" error required type="square" />
        </View>
        {/*<View>
          <Title level={3}>Badge</Title>
          <Badge />
          <Badge error textError="Select Badge" />
          <Badge size="small" />
          <Badge size="medium" defaultValue={true} />
          <Badge size="large" value={false} />
        </View>
        <View>
          <Title level={3}>Select</Title>
          <Select
            items={[
              { label: 'Option 1', value: 1 },
              { label: 'Option 2', value: 2 },
              {
                label: 'Option 3',
                value: 3,
              },
            ]}
          />
          <Select
            error
            textError="Error in field"
            items={[
              { label: 'Option 1', value: 1 },
              { label: 'Option 2', value: 2 },
              {
                label: 'Option 3',
                value: 3,
              },
            ]}
          />
        </View>
        <View style={{ marginBottom: 22 }}>
          <Title level={3}>Raiting</Title>
          <Rate defaultValue={0} showRating align="center" />
        </View>*/}
        <View>
          <Title level={3}>Default TextArea</Title>
          <TextArea placeholder="Default TextArea" />
          <TextArea
            error
            placeholder="TextArea"
            defaultValue="Default Value"
            textError="Field is Required"
          />
        </View>
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

export default React.memo(InputScreen);
