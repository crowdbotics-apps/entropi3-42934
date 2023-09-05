import { useNavigation } from "@react-navigation/native";
import React, { useState } from 'react';
import { SafeAreaView, View, Text, Image, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

const MatchScreen = () => {
  const navigation = useNavigation();
  const [matches, setMatches] = useState([{
    id: '1',
    team1: 'Team A',
    team2: 'Team B'
  }, {
    id: '2',
    team1: 'Team C',
    team2: 'Team D'
  }, {
    id: '3',
    team1: 'Team E',
    team2: 'Team F'
  }]);

  const MatchItem = ({
    item
  }) => <View style={styles.matchItem}>
      <Image style={styles.teamLogo} source={{
      uri: 'https://tinyurl.com/42evm3m3'
    }} />
      <Text style={styles.teamText}>{item.team1} VS {item.team2}</Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Select Winner</Text>
      </TouchableOpacity>
    </View>;

  return <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Parlay Matches</Text>
      <FlatList data={matches} renderItem={MatchItem} keyExtractor={item => item.id} />
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => {
        navigation.navigate("ScreenAI11");
      }}>
          <Text style={styles.buttonText}>Betting History</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => {
        navigation.navigate("ScreenAI9");
      }}>
          <Text style={styles.buttonText}>Bet</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    alignItems: 'center'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    margin: 20
  },
  matchItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd'
  },
  teamLogo: {
    width: 50,
    height: 50,
    marginRight: 10
  },
  teamText: {
    flex: 1,
    fontSize: 18
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 20,
    marginTop: 20
  },
  button: {
    backgroundColor: '#007BFF',
    padding: 10,
    borderRadius: 5
  },
  buttonText: {
    color: '#fff',
    fontSize: 16
  }
});
export default MatchScreen;