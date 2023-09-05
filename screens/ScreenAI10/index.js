import { useNavigation } from "@react-navigation/native";
import React from 'react';
import { SafeAreaView, View, Text, Image, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
const bettingAmounts = ['10', '20', '50', '100', '200', '500'];
const groupSizes = ['2', '3', '4', '5', '6', '7', '8', '9', '10'];

const BettingScreen = () => {
  const navigation = useNavigation();
  return <SafeAreaView style={styles.container}>
      <View style={styles.listContainer}>
        <Text style={styles.title}>Select Betting Amount</Text>
        <FlatList data={bettingAmounts} keyExtractor={item => item} renderItem={({
        item
      }) => <Text style={styles.listItem}>{item}</Text>} horizontal />
      </View>
      <View style={styles.listContainer}>
        <Text style={styles.title}>Select Group Size</Text>
        <FlatList data={groupSizes} keyExtractor={item => item} renderItem={({
        item
      }) => <Text style={styles.listItem}>{item}</Text>} horizontal />
      </View>
      <TouchableOpacity style={styles.button} onPress={() => {
      navigation.navigate("ScreenAI12");
    }}>
        <Text style={styles.buttonText}>Bet</Text>
      </TouchableOpacity>
      <Image style={styles.image} source={{
      uri: 'https://tinyurl.com/42evm3m3'
    }} />
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    alignItems: 'center',
    justifyContent: 'center'
  },
  listContainer: {
    marginVertical: 20
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10
  },
  listItem: {
    fontSize: 18,
    backgroundColor: '#ddd',
    padding: 10,
    margin: 5,
    borderRadius: 5
  },
  button: {
    backgroundColor: '#007BFF',
    padding: 15,
    borderRadius: 5,
    marginTop: 20
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold'
  },
  image: {
    width: 100,
    height: 100,
    marginTop: 20
  }
});
export default BettingScreen;