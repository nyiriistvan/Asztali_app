import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput, Button } from 'react-native';

import ProductList from './ProductList';
import ProductForm from './ProductForm';
import { getProducts, createProduct, updateProduct, deleteProduct } from './api';



const App = () => {
  const [products, setProducts] = useState([]);
  const [isAdmin, setIsAdmin] = useState(false);
  const [usernameOrEmail, setUsernameOrEmail] = useState('');
  const [password, setPassword] = useState('');
  
  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {
    const result = await getProducts();
    setProducts(result.data);
  };

  const handleSubmitProduct = async (product) => {
    if (product.id) {
      await updateProduct(product.id, product);
    } else {
      await createProduct(product);
    }
    loadProducts();
  };

  const handleDeleteProduct = async (productId) => {
    await deleteProduct(productId);
    loadProducts();
  };

  const handleEditProduct = (product) => {
    navigation.navigate('Edit Product', { product, onSubmit: handleSubmitProduct });
  };

  const handleLogin = async () => {
    alert (usernameOrEmail+ " " + password);
     try {
      const response = await fetch(`http://127.0.0.1:8000/api/login`, {
        method: 'POST',
        //mode:"no-cors",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          username_or_email: usernameOrEmail,
          password: password
        })
      });
  
      if (response.ok) {
        setIsAdmin(true);
      } else {
        const responseData = await response.json();
        alert(responseData.message);
      }
  
      setUsernameOrEmail('');
      setPassword('');
    } catch (error) {
      console.log(error);
      alert('An error occurred while logging in.');
    }
  };
  

  const handleLogout = () => {
    setIsAdmin(false);
  };

  const renderLogin = () => {
    return (
      <View style={styles.loginContainer}>
        <Text style={styles.loginTitle}>Admin Login</Text>
        <TextInput
          style={styles.loginInput}
          placeholder="Username or Email"
          value={usernameOrEmail}
          onChangeText={(text) => setUsernameOrEmail(text)}
        />
        <TextInput
          style={styles.loginInput}
          placeholder="Password"
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
        {isAdmin && <Button title="Logout" onPress={handleLogout} />}
        <ProductList products={products} onEditProduct={handleEditProduct} onDeleteProduct={handleDeleteProduct} />
        {isAdmin && <ProductForm onSubmit={handleSubmitProduct} />}
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
    width: '100%',
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
    width: '100%',
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