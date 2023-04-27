import React, { useState, useEffect } from 'react';
import { View, Text, FlatList } from 'react-native';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = fetch ('http://127.0.0.1:8000/api/productlist');
      setProducts(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const renderProduct = ({ item }) => (
    <View>
      <Text>{item.name}</Text>
      <Text>{item.price}</Text>
    </View>
  );

  return (
    <FlatList
      data={products}
      renderItem={renderProduct}
      keyExtractor={item => item.id.toString()}
    />
  );
};

export default ProductList;