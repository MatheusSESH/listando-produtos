import produce from 'immer';

const INITIAL_STATE = {
  state: [],
};

const addItems = (state = INITIAL_STATE, action) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case 'GET_PRODUCT_LIST': {
        const { product } = action.payload;

        draft.state.push({
          product,
        });

        break;
      }
      default:
    }
  });
};

export default addItems;
