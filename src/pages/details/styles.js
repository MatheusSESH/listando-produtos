import styled, { css } from 'styled-components';

import { shade, lighten } from 'polished';

import { FiArrowLeft } from 'react-icons/fi';

export const Header = styled.div`
  width: 100%;
  min-width: 600px;
  height: 60px;

  display: flex;
  align-items: center;
  justify-content: center;

  background: #f77f00;

  button {
    height: 40px;
    padding: 10px 10px;
    display: flex;
    align-items: center;
    justify-content: flex-start;

    border: 2px solid #16161a;
    background: #f4a261;
    border-radius: 4px;

    font-weight: 500;

    transition: 0.2s;

    &:hover {
      background: ${shade(0.1, '#f4a261')};
    }

    svg {
      margin-right: 20px;
    }
  }
`;

const iconCSS = css`
  width: 24px;
  height: 24px;
`;

export const ArrowLeftIcon = styled(FiArrowLeft)`
  ${iconCSS}
`;

export const Container = styled.div`
  height: 93vh;
  max-width: 100%;
  min-width: 600px;

  display: flex;
  justify-content: center;

  color: #fff;
`;

export const Content = styled.div`
  width: 1100px;
  min-width: 600px;

  display: grid;
  grid-template-columns: 60fr 40fr;

  background: #fff;
  color: #16161a;

  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.8);
  border-radius: 5px;
`;

export const Gallery = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: 530px;

  padding: 20px 10px;

  flex-direction: column;

  > img {
    height: 60%;
    width: 60%;

    display: flex;
    border-radius: 8px;
  }

  > h3 {
    margin-bottom: 100px;
  }
`;

export const Column = styled.div`
  border-left: 1px solid #888;

  padding: 120px 20px 0;

  p {
    font-size: 22px;
  }

  strong {
    display: flex;
    align-items: center;
    justify-content: flex-start;

    font-weight: normal;

    font-size: 36px;
    margin-top: 20px;
  }

  > div {
    display: flex;
    justify-content: center;
    align-items: center;

    margin-top: 60px;

    button {
      height: 40px;
      width: 200px;

      background: ${lighten(0.3, '#f77f00')};
      border: 2px solid #f77f00;
      border-radius: 6px;

      color: #16161a;
      font-weight: bold;

      transition: 0.4s;

      &:hover {
        background: #f77f00;
        border: 2px solid ${lighten(0.2, '#f4a261')};
      }
    }
  }
`;
