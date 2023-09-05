import React from 'react';
import { SafeAreaView, View, Text, Image, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
const parlaysData = [{
  id: '1',
  sport: 'Football',
  parlay: 'Parlay 1'
}, {
  id: '2',
  sport: 'Basketball',
  parlay: 'Parlay 2'
}, {
  id: '3',
  sport: 'Baseball',
  parlay: 'Parlay 3'
} // Add more data as needed
];

const ParlayItem = ({
  item,
  onPress
}) => <TouchableOpacity onPress={onPress} style={styles.item}>
    <Image source={{
    uri: 'https://tinyurl.com/42evm3m3'
  }} style={styles.image} />
    <View style={styles.info}>
      <Text style={styles.sport}>{item.sport}</Text>
      <Text style={styles.parlay}>{item.parlay}</Text>
    </View>
  </TouchableOpacity>;

const ParlaysScreen = () => {
  const [selectedId, setSelectedId] = React.useState(null);

  const renderItem = ({
    item
  }) => {
    const backgroundColor = item.id === selectedId ? '#6e3b6e' : '#f9c2ff';
    return <ParlayItem item={item} onPress={() => setSelectedId(item.id)} style={{
      backgroundColor
    }} />;
  };

  return <SafeAreaView style={styles.container}>
      <FlatList data={parlaysData} renderItem={renderItem} keyExtractor={item => item.id} extraData={selectedId} />
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20
  },
  item: {
    flexDirection: 'row',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 10,
    backgroundColor: '#f9c2ff'
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25
  },
  info: {
    marginLeft: 10
  },
  sport: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  parlay: {
    fontSize: 18,
    color: 'gray'
  }
});
export default ParlaysScreen;