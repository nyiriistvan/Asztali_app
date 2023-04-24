import axios from 'axios';

const BASE_URL = 'http://127.0.0.1:8000/api';

export const getProducts = async () => {
  return await axios.get(`${BASE_URL}/productlist`);
};

export const createProduct = async (product) => {
  return await axios.post(`${BASE_URL}/submit-product`, product);
};

export const updateProduct = async (id, product) => {
  return await axios.put(`${BASE_URL}/updateproduct/${id}`, product);
};

export const deleteProduct = async (id) => {
  return await axios.delete(`${BASE_URL}/deleteproduct/${id}`);
};
