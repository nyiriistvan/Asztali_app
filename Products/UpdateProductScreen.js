import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import UpdateProductScreen from './UpdateProductScreen';
import ProductView from './ProductView';

const UpdateProductScreen = ({ route, navigation }) => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [weight, setWeight] = useState('');
  const [description, setDescription] = useState('');
  const Stack = createStackNavigator();

  const { productId } = route.params;

  useEffect(() => {
    getProduct(productId);
  }, [productId]);

  const AppNavigator = () => {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="ProductView" component={ProductView} />
          <Stack.Screen name="UpdateProduct" component={UpdateProductScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  };

  const getProduct = async (id) => {
    try {
      const response = await fetch(`http://localhost:8000/api/getproduct/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await response.json();
      setName(data.name);
      setPrice(data.price);
      setWeight(data.weight);
      setDescription(data.description);
    } catch (error) {
      console.error(error);
    }
  };

  const handleUpdate = async () => {
    try {
      const response = await fetch(`http://localhost:8000/api/updateproduct/${productId}`, {
        method: 'PUT',
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          price,
          weight,
          description,
        }),
      });
      const data = await response.json();
      console.log(data);
      navigation.navigate('Products');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View>
      <Text>Név:</Text>
      <TextInput value={name} onChangeText={setName} />
      <Text>Ár:</Text>
      <TextInput value={price} onChangeText={setPrice} />
      <Text>Súly:</Text>
      <TextInput value={weight} onChangeText={setWeight} />
      <Text>Leírás:</Text>
      <TextInput value={description} onChangeText={setDescription} />
      <Button title="Update" onPress={handleUpdate} />
    </View>
  );
};

export default UpdateProductScreen;
