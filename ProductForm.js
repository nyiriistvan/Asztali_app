import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Picker } from 'react-native';
import axios from 'axios';
import LogoutButton from './Logoutbutton';

const ProductForm = ({ productId, onSubmit, onModify, onLogout, bearerToken }) => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [weight, setWeight] = useState('');
  const [category, setCategory]= useState('');
  const [description, setDescription]= useState('');
  const [existingProducts, setExistingProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState('');
  const [existingCategories, setExistingCategories] = useState([]);

  useEffect(() => {
    if (productId) {
      fetchProduct();
    }
    fetchExistingCategories();
  }, []);


  const fetchProduct = async () => {
    try {
      const response = await axios.get(`http://127.0.0.1:8000/api/products`);
      setName(response.data.name);
      setPrice(response.data.price);
      setWeight(response.data.weight);
      setCategory(response.data.category);
      setDescription(response.data.description);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchExistingCategories = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/api/categories');
      setExistingCategories(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleProductSelect = (itemValue) => {
    setSelectedProduct(itemValue);
    onModify(itemValue);
  };
  
  const handleLogout = () => {
    onLogout();
  };

  const handleSubmit = async () => {
    try {
      const data = { name, price, category, weight, description };
      const headers = { Authorization: `Bearer ${bearerToken}` };
      let response;
      if (productId) {
        response = await axios.put(`http://127.0.0.1:8000/api/updateproduct/${productId}`, data, { headers });
      } else {
        response = await axios.post('http://127.0.0.1:8000/api/submit-product', data, { headers });
      }
      onSubmit(response.data);
    } catch (error) {
      console.log(error);
    }
  
  };

  return (
    <View style={styles.container}>
      
      <Text style={styles.label}>Név:</Text>
      <TextInput value={name} onChangeText={setName} style={styles.input} />
      <Text style={styles.label}>Súly:</Text>
      <TextInput value={weight} onChangeText={setWeight} style={styles.input} />
      <Text style={styles.label}>Leírás:</Text>
      <TextInput value={description} onChangeText={setDescription} style={styles.input} />
      <Text style={styles.label}>Kategória:</Text>
      <Picker
            selectedValue={category}
            style={styles.input}
            onValueChange={(itemValue) => setCategory(itemValue)}>
      <Picker.Item label="Válasszon Kategóriát" value="" />
            {existingCategories.map((category) => (
      <Picker.Item key={category.id} label={category.name} value={category.id} />
  ))}
</Picker>
      <Text style={styles.label}>Ár:</Text>
      <TextInput value={price} onChangeText={setPrice} style={styles.input} />
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
