import { createStore } from "redux";
import superHeroReducer from "./reduers/superHeroReducer";



const store = createStore(superHeroReducer)


export default store