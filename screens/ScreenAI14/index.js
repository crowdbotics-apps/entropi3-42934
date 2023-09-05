import React from 'react';
import { SafeAreaView, View, Text, Image, FlatList, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
const dummyData = [{
  id: '1',
  name: 'User 1',
  message: 'Hello everyone!'
}, {
  id: '2',
  name: 'User 2',
  message: 'Hi User 1!'
}, {
  id: '3',
  name: 'User 3',
  message: 'How are you all doing?'
}, {
  id: '4',
  name: 'User 4',
  message: 'I am doing great!'
}];

const ChatScreen = () => {
  return <SafeAreaView style={styles.container}>
      <FlatList data={dummyData} keyExtractor={item => item.id} renderItem={({
      item
    }) => <View style={styles.messageContainer}>
            <Image style={styles.avatar} source={{
        uri: 'https://tinyurl.com/42evm3m3'
      }} />
            <View>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.message}>{item.message}</Text>
            </View>
          </View>} />
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} placeholder="Type a message" />
        <TouchableOpacity style={styles.sendButton}>
          <Text style={styles.sendButtonText}>Send</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5'
  },
  messageContainer: {
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center'
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10
  },
  name: {
    fontWeight: 'bold',
    fontSize: 16
  },
  message: {
    fontSize: 14
  },
  inputContainer: {
    flexDirection: 'row',
    padding: 10,
    backgroundColor: '#fff',
    alignItems: 'center'
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 25,
    padding: 10,
    marginRight: 10
  },
  sendButton: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 25
  },
  sendButtonText: {
    color: '#fff',
    fontWeight: 'bold'
  }
});
export default ChatScreen;