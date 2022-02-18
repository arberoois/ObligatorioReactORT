let initialState = {};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case CARGAR_USUARIO:
      state = action.payload;
      return state;
    case ELIMINAR_USUARIO:
      state = initialState;
      return state;
    case OBTENER_USUARIO:
      return state;
    default:
      return state;
  }
};

export const CARGAR_USUARIO = "CARGAR_USUARIO";
export const ELIMINAR_USUARIO = "ELIMINAR_USUARIO";
export const OBTENER_USUARIO = "OBTENER_USUARIO";
export default authReducer;
