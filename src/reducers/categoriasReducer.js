let initialState = [];

const categoriasReducer = (state = initialState, action) => {
  switch (action.type) {
    case CARGAR_CATEGORIAS:
      state = action.payload;
      return state;
    case ELIMINAR_CATEGORIAS:
      state = initialState;
      return state;
    case OBTENER_CATEGORIAS:
      return state;
    default:
      return state;
  }
};

export const CARGAR_CATEGORIAS = "CARGAR_CATEGORIAS";
export const ELIMINAR_CATEGORIAS = "ELIMINAR_CATEGORIAS";
export const OBTENER_CATEGORIAS = "OBTENER_CATEGORIAS";
export default categoriasReducer;
