import React from 'react';
import { SafeAreaView, View, Text, Image, Button, StyleSheet } from 'react-native';

const WinningScreen = () => {
  const amountWon = 1000;
  const paymentOptions = ['Bank Transfer', 'Paypal', 'Bitcoin'];
  return <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Congratulations!</Text>
      <Text style={styles.message}>You've won ${amountWon}</Text>
      <Image style={styles.image} source={{
      uri: 'https://tinyurl.com/42evm3m3'
    }} />
      <Text style={styles.subTitle}>Payment Options</Text>
      {paymentOptions.map((option, index) => <Text key={index} style={styles.option}>
          {option}
        </Text>)}
      <View style={styles.buttonContainer}>
        <Button title="Close" onPress={() => {}} color="#841584" />
      </View>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f5f5f5'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#841584',
    marginBottom: 10
  },
  message: {
    fontSize: 18,
    color: '#333',
    marginBottom: 20
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20
  },
  subTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10
  },
  option: {
    fontSize: 16,
    color: '#333',
    marginBottom: 5
  },
  buttonContainer: {
    marginTop: 20
  }
});
export default WinningScreen;