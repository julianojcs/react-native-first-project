import {useState} from 'react';
import { View, Text, Switch, StyleSheet, ActivityIndicator } from 'react-native';

const SwitchPage = () => {
  const [valueSwitch, setValueSwitch] = useState(false);
  return (
    <View style={container}>
      <Switch
        value={valueSwitch}
        onValueChange={() => {setValueSwitch(prev => !prev)}}
      />
      <ActivityIndicator animating={valueSwitch} size="large" color="red"/>
      <Text style={text}>{valueSwitch ? 'True': 'False'}</Text>
    </View>
  );
}

const page = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 20,
    padding: 24,
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 30,
    color: '#000'
  },
});

const container = StyleSheet.compose(page.container);
const text = StyleSheet.compose(page.text);

export default SwitchPage;