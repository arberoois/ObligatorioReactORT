let initialState = [];

const departamentosReducer = (state = initialState, action) => {
  switch (action.type) {
    case CARGAR_DEPARTAMENTOS:
      state = action.payload;
      return state;
    case OBTENER_DEPARTAMENTOS:
      return state;
    case ELIMINAR_DEPARTAMENTOS:
      state = initialState;
      return state;
    default:
      return state;
  }
};

export const CARGAR_DEPARTAMENTOS = "CARGAR_DEPARTAMENTOS";
export const ELIMINAR_DEPARTAMENTOS = "ELIMINAR_DEPARTAMENTOS";
export const OBTENER_DEPARTAMENTOS = "OBTENER_DEPARTAMENTOS";
export default departamentosReducer;
