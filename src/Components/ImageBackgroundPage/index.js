import {useState} from 'react';
import { TextInput, Image, Button, StyleSheet, Text, TouchableOpacity, View, ImageBackground } from 'react-native';

const ImageBackgroundPage = () => {
  const [userText, setUserText] = useState('');

  return (
    <ImageBackground style={imageBackground} source={{uri: "https://scitechdaily.com/images/NSBH-Binary-Merger.jpg"}}>
      <Text style={text}>
        Hello Word 🚀
      </Text>
      <Button title="Pressione" onPress={() => alert("ok")}></Button>
      <TouchableOpacity
        style={button}
        onPress={() => alert("ok")}>
        <Text style={textButton}>Aperte</Text>
      </TouchableOpacity>
      <Image
        resizeMode='contain'
        source={require('../../assets/images/rocket.png')}
        style={image}
      />
      <TextInput
        style={input}
        placeholder="Digite aqui"
        value={userText}
        onChangeText={text => setUserText(text)}
      />
    </ImageBackground>
  );
}

const page = StyleSheet.create({
  imageBackground: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#fff',
    justifyContent: "center",
    alignItems: "center"
  },
  text: {
    fontSize: 30,
    color: '#000'
  },
  button: {
    backgroundColor: "#000",
    padding: 10,
    borderRadius: 5,
    marginTop: 10
  },
  textButton: {
    color: "#fff"
  },
  image: {
    width: 100,
    height: 100,
    marginTop: 10
  },
  input: {
    width: 200,
    height: 40,
    borderWidth: 1,
    borderColor: "#000",
    marginTop: 10,
    padding: 10
  }
});

const container = StyleSheet.compose(page.container);
const text = StyleSheet.compose(page.text);
const button = StyleSheet.compose(page.button);
const textButton = StyleSheet.compose(page.textButton);
const image = StyleSheet.compose(page.image);
const input = StyleSheet.compose(page.input);
const imageBackground = StyleSheet.compose(page.imageBackground);

export default ImageBackgroundPage;