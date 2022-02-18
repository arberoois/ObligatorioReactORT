const initialState = [];

const enviosReducer = (state = initialState, action) => {
  switch (action.type) {
    case CARGAR_ENVIOS:
      state = action.payload;
      return state;
    case CREAR_ENVIOS:
      return state;
    case ELIMINAR_ENVIOS:
      state = initialState;
      return state;
    default:
      return state;
  }
};
export const CARGAR_ENVIOS = "CARGAR_ENVIOS";
export const CREAR_ENVIOS = "CREAR_ENVIOS";
export const ELIMINAR_ENVIOS = "ELIMINAR_ENVIOS";
export default enviosReducer;
