import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Table, TableCell,TableHeader,TableRow } from './Table';
import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import NavigationContainer from '@react-navigation/native';
//import {handleDeleteProduct} from './App';


const BASE_URL = 'http://127.0.0.1:8000/api';
const TOKEN_KEY= 'TOKEN_KEY';


const ProductView = () => {


  const [products, setProduct] = useState([]);

  
  useEffect(() => {
    
    const fetchProducts = async () => {
      try {
      fetch(`http://127.0.0.1:8000/api/productlist`)
      .then(res => res.json())
      .then(res => {
        setProduct(res.data);
      });

      } catch (error) {
        console.error(error);
      }
    };
    
    fetchProducts();
    //getImageUrl();
    renderEditButton();
    renderDeleteButton();
  }, []);

  const handleDelete = async (id) => {
    console.log(`id: ${id},` );
    try {
      console.log("Before fetch");
      const token = await AsyncStorage.getItem(TOKEN_KEY);
      const response = await fetch(`http://127.0.0.1:8000/api/deleteproduct/${id}`, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      });
      console.log("After fetch");
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error(error);
      console.log("Error occurred");
    }
  }
  
  
  // const uploadImage = async (productId, image) => {
  //   const formData = new FormData();
  //   formData.append('image', {
  //     uri: image.uri,
  //     type: image.type,
  //     name: image.fileName,
  //   });
  
    // try {
    //   const token = await AsyncStorage.getItem('token');
    //   const response = await fetch(`${BASE_URL}/api/image/${productId}`, {
    //     method: 'POST',
    //     headers: {
    //       Authorization: `Bearer ${token}`,
    //       'Content-Type': 'multipart/form-data',
    //     },
    //     body: formData,
    //   });
  
  //     if (!response.ok) {
  //       const errorData = await response.json();
  //       throw new Error(errorData.message);
  //     }
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };
  

  const getImageUrl = async (id) => {
   const token = await AsyncStorage.getItem('token');
   return `${BASE_URL}/api/image/${id}?token=${token}`;
 };

 const handleUpdate = async (id,name,price,weight,description, ) => {
  console.log(`name: ${name},price: ${price} ,weight: ${weight}, description: ${description},`);
  const token = await AsyncStorage.getItem(TOKEN_KEY);
  console.log(token);
  try {
    console.log("Before fetch");
    const response = await fetch(`http://127.0.0.1:8000/api/updateproduct/${id}`, {
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify({
        name:name,
        price:price,
        weight:weight,
        description:description
      }),
    });
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
    console.log("Error occurred");
  }
}


const renderEditButton = (id) => {
  return (
    <TouchableOpacity
      style={[styles.button, styles.editButton]}
      onPress={() => navigation.navigate('UpdateProduct', { productId: id })}
    >
      <Feather name="edit" size={24} color="white" />
    </TouchableOpacity>
    );
   };
  const renderDeleteButton = (id) => {
    return (
      <TouchableOpacity style={[styles.button, styles.deleteButton]} onPress={() => handleDelete(id)}>
        <Feather name="trash-2" size={24} color="white" />
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.container}>
     <Table>
  <TableHeader style={styles.header}>
    <TableRow>
      <TableCell>Név</TableCell>
      <TableCell>Leírás</TableCell>
      <TableCell>Kategória</TableCell>
      <TableCell>Ár</TableCell>
      <TableCell>Súly</TableCell>
      <TableCell>Kép</TableCell>
      <TableCell>Műveletek</TableCell>
    </TableRow>
  </TableHeader>
  {products.map((product) => (
    <TableRow key={product.id} style={styles.row}>
      <TableCell>{product.name}</TableCell>
      <TableCell>{product.description}</TableCell>
      <TableCell>{product.category_id}</TableCell>
      <TableCell>{product.price}</TableCell>
      <TableCell>{product.weight}</TableCell>
      <TableCell>
      <img
        src={`http://localhost:8000/storage/images/1682584008_megsem_egyforma_mint_ket_tojas_00.jpg`}
        alt={product.name}
        style={{width: "50%", height: "auto"}}
      />
      </TableCell>
      <TableCell style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.button, styles.updateButton]}
          onPress={() => handleUpdate(product.id)}
        >
          <AntDesign name="edit" style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.deleteButton}
          onPress={() => handleDelete(product.id,product.name, product.weight,product.description)}
        >
          <FontAwesome name="trash-o" style={styles.icon} />
        </TouchableOpacity>
      </TableCell>
    </TableRow>
  ))}
</Table>

    </View>
  );
};
const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: "#fff" },
  header: { height: 50, backgroundColor: "#537791" },
  text: { textAlign: "center", fontWeight: "bold", color: "#fff" },
  dataWrapper: { marginTop: -1 },
  row: { height: 40, backgroundColor: "#E7E6E1" },
  buttonContainer: { flexDirection: "row", justifyContent: "space-between", alignItems: "center" },
  button: { width: 50, height: 20, borderRadius: 2, justifyContent: "center", alignItems: "center" },
  updateButton: { backgroundColor: "#4CAF50", marginRight: 5 },
  deleteButton: { backgroundColor: "#F44336", marginLeft: 5 },
  buttonText: { color: "#fff" },
  icon: { fontSize: 20, color: '#fff' },
});

export default ProductView;
