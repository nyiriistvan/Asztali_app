import React, { useState } from 'react';
import { View, TextInput, Button, Alert } from 'react-native';
import { login } from '../api/api';

const AdminLogin = ({ onLoginSuccess }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const token = await login(username, password);
      const response = fetch('http://127.0.0.1:8000/api/registeredusers', {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });
  
      if (!response.ok) {
        throw new Error('Failed to get user information');
      }
  
      const user = await response.json();
      if (user.is_admin) {
        onLoginSuccess(token);
      } else {
        Alert.alert('Error', 'You do not have admin privileges');
      }
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
