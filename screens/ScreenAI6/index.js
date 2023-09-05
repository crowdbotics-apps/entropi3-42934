import React from 'react';
import { SafeAreaView, Text, Button, FlatList, TouchableOpacity, Image, StyleSheet } from 'react-native';
const sportsData = [{
  id: '1',
  name: 'Football'
}, {
  id: '2',
  name: 'Basketball'
}, {
  id: '3',
  name: 'Tennis'
}, {
  id: '4',
  name: 'Cricket'
}, {
  id: '5',
  name: 'Rugby'
}];

const SportItem = ({
  item,
  onPress
}) => <TouchableOpacity onPress={onPress} style={styles.item}>
    <Image style={styles.image} source={{
    uri: 'https://tinyurl.com/42evm3m3'
  }} />
    <Text style={styles.title}>{item.name}</Text>
  </TouchableOpacity>;

const App = () => {
  const renderItem = ({
    item
  }) => <SportItem item={item} onPress={() => console.log('Sport selected: ' + item.name)} />;

  return <SafeAreaView style={styles.container}>
      <Button title="Betting history" onPress={() => console.log('Betting history clicked')} />
      <Button title="View group" onPress={() => console.log('View group clicked')} />
      <FlatList data={sportsData} renderItem={renderItem} keyExtractor={item => item.id} />
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2'
  },
  item: {
    backgroundColor: '#fff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center'
  },
  title: {
    fontSize: 24
  },
  image: {
    width: 50,
    height: 50,
    marginRight: 10
  }
});
export default App;