const initialState = {};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case CARGAR_USUARIO:
      return state;
    case ELIMINAR_USUARIO:
      return state;
    default:
      return state;
  }
};

export const CARGAR_USUARIO = "CARGAR_USUARIO";
export const ELIMINAR_USUARIO = "ELIMINAR_USUARIO";
export default authReducer;
