import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';

const MyComponent = () => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [weight, setWeight] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    fetchProduct();
  }, []);

  const fetchProduct = async () => {
    try {
      const response = await fetch(`http://127.0.0.1:8000/api/productlist`);
      const data = await response.json();
      setName(data.name);
      setPrice(data.price);
      setWeight(data.weight);
      setCategory(data.category);
      setDescription(data.description);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View>
      <Text>Name: {name}</Text>
      <Text>Price: {price}</Text>
      <Text>Weight: {weight}</Text>
      <Text>Category: {category}</Text>
      <Text>Description: {description}</Text>
    </View>
  );
};

export default MyComponent;
