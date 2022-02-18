import { combineReducers } from "redux";
import authReducer from "./authReducer";
import enviosReducer from "./enviosReducer";
import ciudadesReducer from "./ciudadesReducer";
import departamentosReducer from "./departamentosReducer";
import categoriasReducer from "./categoriasReducer";
import * as typesAuth from "./authReducer";
import * as typesEnvios from "./enviosReducer";
import * as typesCiudades from "./ciudadesReducer";
import * as typesDepartamentos from "./departamentosReducer";
import * as typesCategorias from "./categoriasReducer";
const reducer = combineReducers({
  // reducers
  auth: authReducer,
  envios: enviosReducer,
  ciudades: ciudadesReducer,
  departamentos: departamentosReducer,
  categorias: categoriasReducer,
});

export {
  typesCategorias,
  typesAuth,
  typesEnvios,
  typesCiudades,
  typesDepartamentos,
};
export default reducer;
