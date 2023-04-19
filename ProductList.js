import React, { useState, useEffect } from 'react';
import { View, Text, FlatList } from 'react-native';
import axios from 'axios';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get('http://localhost:8000/api/api/productlist');
      setProducts(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteProduct = async (id) => {
    try {
      const response = await axios.delete(`http://localhost:8000/api/api/deleteproduct/${id}`);
      setProducts(products.filter(product => product.id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  const renderProduct = ({ item }) => (
    <View>
      <Text>{item.name}</Text>
      <Text>{item.price}</Text>
      <Button title="Delete" onPress={() => deleteProduct(item.id)} />
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