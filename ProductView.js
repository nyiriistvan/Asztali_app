import React, { useState, useEffect } from 'react';
import { View, Text,Image } from 'react-native';

const ProductView = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(`http://127.0.0.1:8000/api/productlist`);
        const responseData = await response.json();
        setProducts(responseData);
        console.log(responseData);
      } catch (error) {
        console.log(error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <View>
      <Image source={{ uri: products.image }} style={{ width: 200, height: 200 }} />
      <Text>Name: {products.name}</Text>
      <Text>Description: {products.description}</Text>
      <Text>Category ID: {products.category_id}</Text>
      <Text>ID: {products.id}</Text>
      <Text>Price: {products.price}</Text>
      <Text>Weight: {products.weight}</Text>
    </View>
  );
};

export default ProductView;
