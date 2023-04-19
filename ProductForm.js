import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import axios from 'axios';

const ProductForm = ({ productId, onSubmit }) => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');

  useEffect(() => {
    if (productId) {
      fetchProduct();
    }
  }, []);

  const fetchProduct = async () => {
    try {
      const response = await axios.get(`http://localhost:8000/api/products/${productId}`);
      setName(response.data.name);
      setPrice(response.data.price);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async () => {
    try {
      const data = { name, price };
      let response;
      if (productId) {
        response = await axios.put(`http://localhost:8000/api/updateproduct/${productId}`, data);
      } else {
        response = await axios.post('http://localhost:8000/api/submit-product', data);
      }
      onSubmit(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View>
      <Text>Name:</Text>
      <TextInput value={name} onChangeText={setName} />
      <Text>Price:</Text>
      <TextInput value={price} onChangeText={setPrice} />
      <Button title="Save" onPress={handleSubmit} />
    </View>
  );
};

export default ProductForm;