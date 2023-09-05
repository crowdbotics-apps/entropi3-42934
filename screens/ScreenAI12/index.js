import React from 'react';
import { SafeAreaView, View, Text, Image, FlatList, Button, StyleSheet } from 'react-native';
const bettors = [{
  id: '1',
  name: 'Bettor #1',
  parlay: 'Parlay #1'
}, {
  id: '2',
  name: 'Bettor #2',
  parlay: 'Parlay #2'
} // Add more bettors as needed
];

const BettorItem = ({
  name,
  parlay
}) => <View style={styles.itemContainer}>
    <Image style={styles.image} source={{
    uri: 'https://tinyurl.com/42evm3m3'
  }} />
    <View style={styles.textContainer}>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.parlay}>{parlay}</Text>
    </View>
    <Button title="Chat" onPress={() => {}} />
  </View>;

const BettorsScreen = () => <SafeAreaView style={styles.container}>
    <FlatList data={bettors} keyExtractor={item => item.id} renderItem={({
    item
  }) => <BettorItem name={item.name} parlay={item.parlay} />} />
  </SafeAreaView>;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5'
  },
  itemContainer: {
    flexDirection: 'row',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
    alignItems: 'center'
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10
  },
  textContainer: {
    flex: 1
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  parlay: {
    fontSize: 14,
    color: '#757575'
  }
});
export default BettorsScreen;