export function GetProductList(product) {
  return {
    type: 'GET_PRODUCT_LIST',
    payload: {
      product,
    },
  };
}
