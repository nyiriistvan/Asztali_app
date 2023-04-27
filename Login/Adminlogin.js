import React, { useState } from 'react';
import { View, TextInput, Button, Alert } from 'react-native';
import { login } from '../api/api';

const AdminLogin = ({ onLoginSuccess }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const token = await login(username, password);
      onLoginSuccess(token);
    } catch (error) {
      Alert.alert('Error', 'Invalid username or password');
    }
  };

  return (
    <View>
      <TextInput
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        placeholder="Password"
        secureTextEntry={true}
        value={password}
        onChangeText={setPassword}
      />
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
};

export default AdminLogin;