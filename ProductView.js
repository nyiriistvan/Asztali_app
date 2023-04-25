import React, { useState, useEffect } from 'react';
import { View} from 'react-native';
import { Table, TableCell,TableHeader,TableRow } from './Table';
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
    getImageUrl
  }, []);

  const getImageUrl = (blobData) => {
    const blob = new Blob([blobData], { type: "image/jpeg" });
    const url = URL.createObjectURL(blob);
    return url;
  };

  return (
    <View>
      <Table style={{ borderWidth: 1, borderColor: 'black' }}>
        <TableHeader style={{ backgroundColor: 'grey' }}>
        <TableRow>
        <TableCell style={{ margin: "5px" }}>Név</TableCell>
        <TableCell style={{ margin: "5px" }}>Leírás</TableCell>
        <TableCell style={{ margin: "5px" }}>Kategória</TableCell>
        <TableCell style={{ margin: "5px" }}>Ár</TableCell>
        <TableCell style={{ margin: "5px" }}>Súly</TableCell>
        </TableRow>

        </TableHeader>
        {products.map((product) => (
          <TableRow key={product.id} style={{ backgroundColor: 'white' }}>
            <TableCell style={{ borderWidth: 1, borderColor: 'black', padding: 5 }}>{product.name}</TableCell>
            <TableCell style={{ borderWidth: 1, borderColor: 'black', padding: 5 }}>{product.description}</TableCell>
            <TableCell style={{ borderWidth: 1, borderColor: 'black', padding: 5 }}>{product.category_id}</TableCell>
            <TableCell style={{ borderWidth: 1, borderColor: 'black', padding: 5 }}>{product.price}</TableCell>
            <TableCell style={{ borderWidth: 1, borderColor: 'black', padding: 5 }}>{product.weight}</TableCell>
            <TableCell>
              <img src={getImageUrl(product.image)} alt={product.name} />
            </TableCell>
          </TableRow>
        ))}
      </Table>
    </View>
  );
};

export default ProductView;
