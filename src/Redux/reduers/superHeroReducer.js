import GET_HERO_DATA from "../actions/Actions"

const initialState = {
    superHerosData : [1,2,3]
}

const superHeroReducer = (state=initialState, action) => {
    console.log(state);
    console.log("action.payload", action.type);
    switch(action.type) {
        case GET_HERO_DATA:
            console.log("action.payload in switch", action.payload);
            

            return {superHerosData: action.payload}

        default:
            return state
    }
    
}
export default superHeroReducer;