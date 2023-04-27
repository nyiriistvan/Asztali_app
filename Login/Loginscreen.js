import React from 'react';
import { View, StyleSheet } from 'react-native';
import LoginForm from './LoginForm';

const LoginScreen = ({ navigation }) => {
  const handleLogin = (username, password, email) => {
    
    console.log('Username:', username);
    console.log('Password:', password);
    console.log('Email:', email);

   
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <LoginForm onSubmit={handleLogin} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
});

export default LoginScreen;