import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, TextInput, Button, View } from 'react-native';

const ResetPasswordScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleResetPassword = () => {// Handle password reset logic here
  };

  const handleCancel = () => {// Handle cancel logic here
  };

  return <SafeAreaView style={styles.container}>
      <TextInput style={styles.input} onChangeText={setEmail} value={email} placeholder="Email" keyboardType="email-address" />
      <TextInput style={styles.input} onChangeText={setPassword} value={password} placeholder="New Password" secureTextEntry />
      <View style={styles.buttonContainer}>
        <Button title="Change Password" onPress={handleResetPassword} />
        <Button title="Cancel" color="red" onPress={handleCancel} />
      </View>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingLeft: 8,
    borderRadius: 5
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});
export default ResetPasswordScreen;