import {useState} from 'react';
import { Modal, View, Text, StyleSheet, Button } from 'react-native';

const ModalPage = () => {
  const [visibile, setVisibile] = useState(false);
  return (
    <View style={container}>
      <Text style={text}>{visibile ? 'True': 'False'}</Text>
      <Modal visible={visibile}>
        <View style={modal}>
          <Text style={text}>Modal window</Text>
          <Button style={button} title="Close" onPress={() => setVisibile(false)}></Button>
        </View>
      </Modal>
      <Button style={button} title="Open" onPress={() => setVisibile(true)}></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 10,
    padding: 24,
    backgroundColor: '#f59d9d',
  },
  text: {
    fontSize: 30,
    color: '#000'
  },
  modal: {
    width: 200,
    height: 200,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#555'
  },
  button: {
    backgroundColor: "#000",
    padding: 10,
    borderRadius: 5,
    marginTop: 10
  },
});

const container = StyleSheet.compose(styles.container);
const text = StyleSheet.compose(styles.text);
const modal = StyleSheet.compose(styles.modal);
const button = StyleSheet.compose(styles.button);

export default ModalPage;