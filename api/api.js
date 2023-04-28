import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const TOKEN_KEY = 'TOKEN_KEY';
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

export const submitProduct = async () => {
const data = { name:name, price:price, weight:weight, description:description, category:category };
const tokenpromise= AsyncStorage.getItem(TOKEN_KEY);
      let token = "";
      tokenpromise.then((res)=>{
        token=res 
        console.log(token);
        const headers = {"Authorization": `${token}`}
        console.log(headers);
        fetch ('127.0.0.1:8000/api/submit-product',{
          method: 'POST',
          headers:headers,
          body:JSON.stringify(data)
          })
        // .then(res => res.json())
        .then(res =>{
          console.log(res);
        })
      })
    };

export const deleteProduct = async (id) => {
  const token = await AsyncStorage.getItem("token");
  return await axios.delete(`${BASE_URL}/deleteproduct/${id}`, {
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

