import React from 'react';
import { Button, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LogoutButton = ({ onLogout }) => {
  const handleLogout = async () => {
   
    await AsyncStorage.removeItem('userToken');

   
    if (onLogout) {
      onLogout();
    }
  };

  return (
    <Button
      title="Kijelentkezés"
      onPress={handleLogout}
      style={styles.button}
    />
  );
};

const styles = StyleSheet.create({
  button: {
    width: '50%',
    marginTop: 20,
  },
});

export default LogoutButton;
