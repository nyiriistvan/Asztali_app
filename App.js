import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import ProductList from './ProductList';
import ProductForm from './ProductForm';
import ProductView from './ProductView';
import { getProducts, createProduct, updateProduct, deleteProduct } from './api';

const TOKEN_KEY = 'TOKEN_KEY';

const App = () => {
  const [products, setProducts] = useState([]);
  const [isAdmin, setIsAdmin] = useState(false);
  const [usernameOrEmail, setUsernameOrEmail] = useState('');
  const [password, setPassword] = useState('');
  const [price, setPrice] = useState(null);

  useEffect(() => {
    checkLoggedIn();
    loadProducts();
  }, []);

  const loadProducts = async () => {
    const result = await getProducts();
    setProducts(result.data);
  };

  const handleSubmit = async () => {
    try {
      const data = { name, price, weight, description, categories };
      const product = await (productId ? updateProduct(productId, data) : createProduct(data));
      handleSubmitProduct(product);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDeleteProduct = async (productId) => {
    await deleteProduct(productId);
    loadProducts();
  };

  const handleEditProduct = (product) => {
    navigation.navigate('Edit Product', { product, onSubmit: handleSubmitProduct });
  };

  const handleLogin = async () => {
    try {
      const response = await fetch('http://127.0.0.1:8000/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username_or_email: usernameOrEmail,
          password: password,
        }),
      });

      if (response.ok) {
        const responseData = await response.json();
        const token = responseData.data.token; 
        console.log(token)
        await AsyncStorage.setItem(TOKEN_KEY, token);
        setIsAdmin(true);
      } else {
        const responseData = await response.json();
        alert(responseData.message);
      }

      setUsernameOrEmail('');
      setPassword('');
    } catch (error) {
      console.log(error);
      alert('Hiba a bejelentkezésnél.');
    }
  };

  const handleLogout = async () => {
    await AsyncStorage.removeItem(TOKEN_KEY);
    setIsAdmin(false);
  };

  const checkLoggedIn = async () => {
    const token = await AsyncStorage.getItem(TOKEN_KEY);
    if (token) {
      setIsAdmin(true);
    }
  };

  const renderLogin = () => {
    return (
      <View style={styles.loginContainer}>
        <Text style={styles.loginTitle}>Admin Login</Text>
        <TextInput
          style={styles.loginInput}
          placeholder="Felhasználónév"
          value={usernameOrEmail}
          onChangeText={(text) => setUsernameOrEmail(text)}
        />
        <TextInput
          style={styles.loginInput}
          placeholder="Jelszó"
          value={password}
          secureTextEntry={true}
          onChangeText={(text) => setPassword(text)}
        />
        <Button title="Login" onPress={handleLogin} />
      </View>
    );
  };

  const renderApp = () => {
    return (
      <ScrollView style={styles.container}>
        <Text style={styles.title}>Product List</Text>
        {isAdmin && <Button title="Kijelentkezés" onPress={handleLogout} />}
        <ProductList products={products} onEditProduct={handleEditProduct} onDeleteProduct={handleDeleteProduct} />
        {isAdmin && <ProductForm onSubmit={handleSubmit({ name: products.name, price: products.price, weight: products.weight, description: products.description, categories: products.categories })} />}
        <ProductView products={products} navigation={navigation} />
      </ScrollView>
    );
  };

  return isAdmin ? renderApp() : renderLogin();
};



    const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  title: {
    width:"50%",
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  loginContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  loginInputContainer: {
    width: '50%',
    marginBottom: 20,
  },
  loginInputLabel: {
    fontSize: 16,
    marginBottom: 5,
  },
  loginInput: {
    height: 40,
    width: '50%',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingLeft: 10,
  },
  loginButton: {
    width: '50%',
    backgroundColor: '#007AFF',
    borderRadius: 5,
    paddingVertical: 10,
    marginTop: 20,
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  productFormContainer: {
    backgroundColor: '#f7f7f7',
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
  },
  productFormTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  productFormInputLabel: {
    fontSize: 16,
    marginBottom: 5,
  },
  productFormInput: {
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingLeft: 10,
    marginBottom: 10,
  },
  productFormButton: {
    backgroundColor: '#007AFF',
    borderRadius: 5,
    paddingVertical: 10,
    marginTop: 20,
  },
  productFormButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  productListContainer: {
    marginBottom: 20,
  },
  productListTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  productListButton: {
    backgroundColor: '#007AFF',
    borderRadius: 5,
    paddingVertical: 10,
    marginTop: 20,
  },
  productListButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  productListItem: {
    backgroundColor: '#f7f7f7',
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
  },
  productListItemTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  productListItemDescription: {
    fontSize: 14,
    marginBottom: 10,
  },
  productListItemButton: {
    backgroundColor: '#007AFF',
    borderRadius: 5,
    paddingVertical: 10,
    marginTop: 10,
  },
  productListItemButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default App;