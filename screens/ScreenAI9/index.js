import { Pressable } from "react-native";
import React from 'react';
import { SafeAreaView, StyleSheet, Text, View, Image, Button } from 'react-native';

const BettingRulesScreen = ({
  navigation
}) => {
  return <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Betting Rules</Text>
        <Button title="Close" onPress={() => navigation.goBack()} />
      </View>
      <View style={styles.content}>
        <Pressable onPress={() => {
        navigation.navigate("ScreenAI10");
      }}><Image style={styles.image} source={{
          uri: 'https://tinyurl.com/42evm3m3'
        }} /></Pressable>
        <Text style={styles.text}>
          Rule 1: Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Text>
        <Text style={styles.text}>
          Rule 2: Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Text>
        <Text style={styles.text}>
          Rule 3: Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </Text>
      </View>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5'
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#FFFFFF'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  content: {
    padding: 20
  },
  image: {
    width: '100%',
    height: 200,
    marginBottom: 20
  },
  text: {
    fontSize: 18,
    marginBottom: 10
  }
});
export default BettingRulesScreen;