import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import api from '../../services/api';

import { Container, ProductList } from './styles';

const Products = () => {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    api.get('/example/products').then((response) => {
      setProductList(response.data);
    });
  }, []);

  return (
    <Container>
      <ProductList>
        {productList.map((product) => (
          <div className="card" key={product.key}>
            <div className="face face1">
              <div className="content">
                <h3>{product.name}</h3>
              </div>
            </div>
            <div className="face face2">
              <div className="content">
                <div className="details">
                  <Link to={`/product/${product.id}`}>Detalhes</Link>
                  <span>R${product.price}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </ProductList>
    </Container>
  );
};

export default Products;
