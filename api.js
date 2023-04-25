import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const BASE_URL = "http://localhost:8000/api";

export const login = async (credentials) => {
  const response = await axios.post(`${BASE_URL}/login`, credentials);
  const token = response.data.token;
  await AsyncStorage.setItem("token", token);
  return token;
};

export const getProducts = async () => {
  const token = await AsyncStorage.getItem("token");
  const response = await axios.get(`${BASE_URL}/productlist`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};

export const createProduct = async (product) => {
  const token = await AsyncStorage.getItem("token");
  return await axios.post(`${BASE_URL}/submit-product`, product, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

export const deleteProduct = async (id) => {
  const token = await AsyncStorage.getItem("token");
  return await axios.delete(`${BASE_URL}/delete-product/${id}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

export const updateProduct = async (id, product) => {
  const token = await AsyncStorage.getItem("token");
  return await axios.put(`${BASE_URL}/update-product/${id}`, product, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

// export const uploadImage = async (id) => {
//   const token = await AsyncStorage.getItem('token');
//   return `${BASE_URL}/image/${id}?token=${token}`;
// };

