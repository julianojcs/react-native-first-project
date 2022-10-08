import { StyleSheet, View, Text } from 'react-native'

const ItemContainer = ({item}) => {
  const { name, age, job } = item
  return (
    <View style={itemContainer}>
      <Text style={text}>{name}</Text>
      <Text style={text}>{age}</Text>
      <Text style={text}>{job}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  itemContainer: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#fff',
    elevation: 5,
    marginBottom: 10,
  },
  text: {
    flex: 1,
    fontSize: 20,
    color: '#000',
    padding: 10,
    backgroundColor: '#ccc',
  },
});

const itemContainer = StyleSheet.compose(styles.itemContainer);
const text = StyleSheet.compose(styles.text);

export default ItemContainer