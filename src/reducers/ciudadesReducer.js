let initialState = [];

const ciudadesReducer = (state = initialState, action) => {
  switch (action.type) {
    case CARGAR_CIUDADES:
      state = action.payload;
      return state;
    case OBTENER_CIUDADES:
      return state;
    case ELIMINAR_CIUDADES:
      state = initialState;
      return state;
    default:
      return state;
  }
};

export const CARGAR_CIUDADES = "CARGAR_CIUDADES";
export const ELIMINAR_CIUDADES = "ELIMINAR_CIUDADES";
export const OBTENER_CIUDADES = "OBTENER_CIUDADES";
export default ciudadesReducer;
