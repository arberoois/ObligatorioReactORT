const initialState = [];

const enviosReducer = (state = initialState, action) => {
  switch (action.type) {
    case CARGAR_ENVIOS:
      state = action.payload;
      return state;
    case AGREGAR_ENVIO:
      state = [...state, action.payload];
      return state;
    case ELIMINAR_ENVIOS:
      state = initialState;
      return state;
    case ELIMINAR_ENVIO:
      state = state.filter((envio) => envio.id !== action.payload);
      return state;
    default:
      return state;
  }
};
export const CARGAR_ENVIOS = "CARGAR_ENVIOS";
export const AGREGAR_ENVIO = "AGREGAR_ENVIO";
export const ELIMINAR_ENVIOS = "ELIMINAR_ENVIOS";
export const ELIMINAR_ENVIO = "ELIMINAR_ENVIO";
export default enviosReducer;
