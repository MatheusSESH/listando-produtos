import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  display: flex;

  justify-content: center;
`;

export const ProductList = styled.div`
  .card {
    cursor: pointer;
  }

  .card .face {
    width: 700px;
    height: 110px;
    transition: 0.5s;
  }

  .card .face.face1 {
    background: #333;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;
    transform: translateY(10px);
  }

  .card:hover .face.face1 {
    background: #f4a261;
    transform: translateY(0);
  }

  .card .face.face1 .content {
    transition: 0.5s;

    h3 {
      margin: 10px 0 0;
      padding: 0;
      color: #fff;
      text-align: center;
      font-size: 1.5em;
    }
  }

  .card .face.face2 {
    position: relative;
    background: #fff;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    padding: 20px;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.8);
    transform: translateY(-100px);

    a {
      margin: 15px 500px 0 0;
      text-decoration: none;
      font-weight: 500;
      color: #333;
      padding: 5px;
      border: 1px solid #333;

      &:hover {
        background: #333;
        color: #fff;
      }

      .details {
        display: flex;
        justify-content: space-between;
      }
    }

    span {
      margin: 0;
      padding: 0;
      font-weight: bold;
    }
  }

  .card:hover .face.face2 {
    transform: translateY(0);
  }
`;
