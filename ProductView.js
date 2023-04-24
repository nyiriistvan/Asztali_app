import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';

const ProductView = () => {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`http://127.0.0.1:8000/api/productlist`);
        const responseData = await response.json();
        setProduct(responseData);
      } catch (error) {
        console.log(error);
      }
    };

    fetchProduct();
  }, []);

  return (
    <View>
      {product ? (
        <View>
          <Text>Name: {product.name}</Text>
          <Text>Price: {product.price}</Text>
          <Text>Weight: {product.weight}</Text>
          <Text>Description: {product.description}</Text>
          <Text>Category: {product.categories}</Text>
        </View>
      ) : (
        <Text>Loading...</Text>
      )}
    </View>
  );
};

export default ProductView;
