import { useReducer } from "react";
import Reducer from "./ModalReducer";
import Context from "./ModalContext";

import { SET_MODAL } from "../../types";

const ModalState = (props) => {
  const initialState = {
    isOpenedModal: false,
  };

  const [state, dispatch] = useReducer(Reducer, initialState);

  const openModal = () => {
    dispatch({
      type: SET_MODAL,
      payload: true,
    });
  }
    const closeModal = () => {
      dispatch({
        type: SET_MODAL,
        payload: false,
      });
  };

  return (
    <Context.Provider
      value={{
        isOpenedModal: state.isOpenedModal,
        openModal,
        closeModal,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

export default ModalState;
