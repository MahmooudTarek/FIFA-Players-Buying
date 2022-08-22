const initialState={
    currentlang: "en",
    languages:["ar","en"]
}


export default function languageReducer (state=initialState,action){
 switch(action.type){
    case "SET-CURRENT-LANGUAGE":
    return{
        ...state,
        currentlang:action.payload,

    }
    
    default: return state
 }
}