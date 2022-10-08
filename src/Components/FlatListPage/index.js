import { View, StyleSheet, FlatList } from 'react-native';
import ItemContainer from './ItemContainer';

const FlatListPage = () => {
  const data = [
    {id: 1, name: 'John', age: 20, job: 'Developer'},
    {id: 2, name: 'Bob', age: 25, job: 'Designer'},
    {id: 3, name: 'Sam', age: 30, job: 'Manager'},
    {id: 4, name: 'Bill', age: 35, job: 'Teacher'},
    {id: 5, name: 'Tom', age: 40, job: 'Driver'},
    {id: 6, name: 'Jerry', age: 45, job: 'Cook'},
    {id: 7, name: 'Mike', age: 50, job: 'Waiter'},
    {id: 8, name: 'Jack', age: 55, job: 'Cleaner'},
    {id: 9, name: 'Alex', age: 60, job: 'Worker'},
    {id: 10, name: 'Nick', age: 65, job: 'Farmer'}
  ]
  return (
    <View style={container}>
      <FlatList
        data={data}
        renderItem={({item}) => {
          return <ItemContainer item={item}/>
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 15,
    paddingStart: 15,
    paddingEnd: 15,
    paddingBottom: 5,
    backgroundColor: '#f7e0e0',
  },
  button: {
    backgroundColor: "#000",
    padding: 10,
    borderRadius: 5,
    marginTop: 10
  },
});

const container = StyleSheet.compose(styles.container);

export default FlatListPage;