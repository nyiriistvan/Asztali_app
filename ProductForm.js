import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Picker } from 'react-native';
import axios from 'axios';
import LogoutButton from './Logoutbutton';
import AsyncStorage from '@react-native-async-storage/async-storage';

const TOKEN_KEY = 'TOKEN_KEY';

const ProductForm = ({ productId, onSubmit, onModify, onLogout, bearerToken }) => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [weight, setWeight] = useState('');
  const [category, setCategory]= useState('');
  const [description, setDescription]= useState('');
  const [categories,setCategories] = useState([]);
  const [handleProductSelect,setSelectedProduct] = useState('');
  const [existingCategories, setExistingCategories] = useState([]);

  useEffect(() => {
    getCategories();
    handleSubmit();
  }, []);
  
  const getCategories = async () => {
    try {
      //const response = await fetch(`http://127.0.0.1:8000/api/categories`);
      //const data = await response.json();
      fetch(`http://127.0.0.1:8000/api/categories`)
      .then(res => res.json())
      .then(res => {
        setCategories(res.data);
      });
      
      //setCategories(data);
      console.log(categories);
    } catch (error) {
      console.error(error);
    }
  };

  
  const handleSubmit = async () => {
    try {
      const data = { name, price, weight, description,categories, };
      console.log(data);
      const headers = { Authorization: `Bearer ${await AsyncStorage.getItem(TOKEN_KEY)}` };
      let response;
     // console.log(data,headers);
     if (productId) {
        response = await fetch(`http://127.0.0.1:8000/api/updateproduct/${id}`, {
          method: 'PUT',
          headers,
          body: JSON.stringify(data),  
        });
      } else {
          response = await fetch('http://127.0.0.1:8000/api/submit-product', {
          method: 'POST',
          headers,
          body: JSON.stringify(data)
        });
      }
      //console.log(data);
      const responseData = await response.json();
      onSubmit(responseData);
      console.log(responseData);
    } catch (error) {
      console.log(error);
    }
  };

  
  
  

  return (
    <View style={styles.container}>
      
      <Text style={styles.label}>Név:</Text>
      <TextInput value={name} onChangeText={setName} style={styles.input} />
      <Text style={styles.label}>Ár:</Text>
      <TextInput value={price} onChangeText={setPrice} style={styles.input} />
      <Text style={styles.label}>Súly:</Text>
      <TextInput value={weight} onChangeText={setWeight} style={styles.input} />
      <Text style={styles.label}>Leírás:</Text>
      <TextInput value={description} onChangeText={setDescription} style={styles.input} />
      <Text style={styles.label}>Kategória:</Text>
      <Picker
        selectedValue={category}
        onValueChange={(itemValue) => setCategory(itemValue)}
      >
        {categories.map((category) => (
          <Picker.Item key={category.id} label={category.category} value={category.id} />
        ))}
      </Picker>
      <Button title="Mentés" onPress={handleSubmit} style={styles.button} />
      <Button title="Kijelentkezés" onPress={LogoutButton} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ddd'
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    padding: 10,
    marginBottom: 15
  },
  button: {
    width: '50%'
  }
});

export default ProductForm;
