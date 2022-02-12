import { SET_MODAL } from "../../types";

const ModalReducer = (state, action) => {
  switch (action.type) {
    case SET_MODAL:
      return {
        ...state,
        isOpenedModal: action.payload,
      };
    default:
      return state;
  }
};

export default ModalReducer;
