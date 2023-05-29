import { Imprimivel } from "../utils/imprimivel.js";
import { Comparavel } from "./comparavel.js";


//quem implementar modelo terá que implementar imprimivel e comparavel
export interface Modelo<T> extends Imprimivel, Comparavel<T>{



}