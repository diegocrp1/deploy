import { ADD_CHARACTER, ADD_TYPE, GET_CHARACTER_NAME, GET_CHARACTER, GET_CHARACTER_DETAIL, FILTER_CARDS, FILTER_ORDER, FILTER_ORDER_ATTACK, NUMPAGE, SET_ERROR_MESSAGE, RESET_ERROR_MESSAGE, RESET_CHARACTER, RESET_CHARACTER_DETAIL, ADD_TYPE_DATA, RESET_TYPE_DATA, RESET_ADD_CHARACTER, SET_ERROR_MESSAGE_CHARACTER, RESET_ERROR_MESSAGE_CHARACTER} from "./Actions_Types";


const initialState={
    numPage:1,
    characters:[],
    characterDetail:[],
    allCharacters:[],
    tipos:[],
    errorMessage:'',
    tiposData:[],
    errorMessageCharacter:''
}

export const rootReducer=(state=initialState,{type,payload})=>{
    switch (type) {
        case GET_CHARACTER:
            return{
                ...state,
                characters:payload,
                allCharacters:payload
            }
        case ADD_CHARACTER:
            return{
                ...state,
                characters:[...state.characters,payload],
                allCharacters:[...state.allCharacters,payload]
            }
        case GET_CHARACTER_NAME:
            return{
                ...state,
                characters:payload
            }
        case RESET_ADD_CHARACTER:
            return {
                ...state,
                characters:[]
            }
        case FILTER_CARDS:
            const allCharactersFilter=state.allCharacters.filter(char=>{
                if(Array.isArray(char.Types)){
                    let pokeTipe= char.Types.some(tipos=>tipos.name===payload)
                    // console.log(pokeTipe)
                    return pokeTipe
                }else{
                    return char.Types === payload;
                }
            })
            return{
                ...state,
                characters:allCharactersFilter 
            }
        case FILTER_ORDER:
            const orderAscendente=[...state.allCharacters].sort((a,b)=>{
                if(a.name.toLowerCase()<b.name.toLowerCase()){
                    return -1
                }else{
                    return 0
                }
            })
            const orderDescendente=[...state.allCharacters].sort((a,b)=>{
                if(a.name.toLowerCase()>b.name.toLowerCase()){
                    return -1
                }else{
                    return 0
                }
            })
            
            return{
                ...state,
                characters:payload==="Ascendente"?orderAscendente:orderDescendente
            }
        case FILTER_ORDER_ATTACK:
            const orderAscendenteAttack=[...state.allCharacters].sort((a,b)=>{
                if(a.attack<b.attack){
                    return -1
                }else{
                    return 0
                }
            })
            const orderDescendenteAttack=[...state.allCharacters].sort((a,b)=>{
                if(a.attack>b.attack){
                    return -1
                }else{
                    return 0
                }
            })
            return{
                ...state,
                characters:payload==="AscendenteAttack"?orderAscendenteAttack:orderDescendenteAttack
            }
        case ADD_TYPE:
            return{
                ...state,
                tipos:payload
            }
        case GET_CHARACTER_DETAIL:
            return{
                ...state,
                characterDetail:payload
            }

        case NUMPAGE:
            return{
                ...state,
                numPage:payload
            }
        case SET_ERROR_MESSAGE:
            return{
                ...state,
                errorMessage:payload
            }

        case RESET_ERROR_MESSAGE:
            return{
                ...state,
                errorMessage:null
            }
        case SET_ERROR_MESSAGE_CHARACTER:
            return{
                ...state,
                errorMessageCharacter:payload
            }
        case RESET_ERROR_MESSAGE_CHARACTER:
            return{
                ...state,
                errorMessageCharacter:null
            }
        case RESET_CHARACTER:
            return{
                ...state,
                characters:state.allCharacters
            }
        case RESET_CHARACTER_DETAIL:
            return{
                ...state,
                characterDetail:[]
            }
        case RESET_TYPE_DATA:
            return {
                ...state,
                tipos:[]

            }
        case ADD_TYPE_DATA:
            return{
                ...state,
                tiposData:payload
            }
        default:
            return {...state}
    }

}