import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';

import {
  Container,
  Content,
  Header,
  ArrowLeftIcon,
  Gallery,
  Column,
} from './styles';
import api from '../../services/api';

const Product = () => {
  const params = useParams();
  const history = useHistory();
  const [item, setItem] = useState({});

  useEffect(() => {
    api
      .get(`/example/products/${params.product_id}`)
      .then((response) => setItem(response.data));
  }, []);

  const handleClick = () => {
    history.goBack();
  };

  return (
    <>
      <Header>
        <button type="button" onClick={handleClick}>
          <ArrowLeftIcon />
          Voltar
        </button>
      </Header>
      <Container>
        <Content>
          <Gallery>
            <h3>{item.name}</h3>
            <img src={item.photo_url} alt={item.name} />
          </Gallery>
          <Column>
            <p>{item.description}</p>
            <strong>R${item.price}</strong>
            <div>
              <button type="button">Comprar</button>
            </div>
          </Column>
        </Content>
      </Container>
    </>
  );
};

export default Product;
