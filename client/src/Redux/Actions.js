import axios from "axios"
import { ADD_CHARACTER,ADD_TYPE,GET_CHARACTER,GET_CHARACTER_NAME,GET_CHARACTER_DETAIL,FILTER_CARDS,FILTER_ORDER, FILTER_ORDER_ATTACK, NUMPAGE,SET_ERROR_MESSAGE, RESET_ERROR_MESSAGE, RESET_CHARACTER, RESET_CHARACTER_DETAIL, ADD_TYPE_DATA,RESET_TYPE_DATA, RESET_ADD_CHARACTER, SET_ERROR_MESSAGE_CHARACTER, RESET_ERROR_MESSAGE_CHARACTER } from "./Actions_Types"



export const getCharacterName=(name)=>{
    return async function(dispatch){
        try {
            const response=await axios(`/pokemons/name?name=${name}`)
            const {data}=response
            if(data){
                 dispatch({type:GET_CHARACTER_NAME,payload:data})
            }

        } catch (error) {
            const errorMessage=error.response?.data?.error ||"Error en el servidor"
            dispatch(setErrorMessage(errorMessage))
        }
    }
}

export const addCharacter=(character)=>{
    return async function(dispatch){
        try {
            const {data}=await axios.post('/pokemons',character)
            if(data) dispatch({type:ADD_CHARACTER,payload:data})
        } catch (error) {
            // console.log(error)
            const errorMessage=error.response?.data||"Error en el servidor"
            dispatch(setErrorMessageCharacter(errorMessage))
        }
    }
}

export const setErrorMessageCharacter=(errorMessage)=>{
    return{
        type:SET_ERROR_MESSAGE_CHARACTER,
        payload:errorMessage
    }
}

export const resetErrorMessageCharacter=()=>{
    return{
        type:RESET_ERROR_MESSAGE_CHARACTER
    }
}

export const resetTypeData=()=>{
    return{
        type:RESET_TYPE_DATA
    }
}
export const resetCharacter=()=>{
    return{
        type:RESET_CHARACTER
    }
}
export const resetCharacterDetail=()=>{
    return{
        type:RESET_CHARACTER_DETAIL
    }
}

export function setErrorMessage(errorMessage){
    return{
        type:SET_ERROR_MESSAGE,
        payload:errorMessage
    }
}
export function resetErrorMessage(){
    return{
        type:RESET_ERROR_MESSAGE
    }
}

export const getCharacter=()=>{
    return async function(dispatch){
        try {
            const {data}=await axios('/pokemons')
            if(data) dispatch({type:GET_CHARACTER,payload:data})
        } catch (error) {
            console.log(error)
        }
    }
}



export const resetAddCharacter=()=>{
    return {
        type:RESET_ADD_CHARACTER
    }
}

export const getCharacterDetail=(id)=>{
    return async function(dispatch){
        try {
            const {data}=await axios(`/pokemons/${id}`)
            if(data)dispatch({type:GET_CHARACTER_DETAIL,payload:data})
        } catch (error) {
            console.log(error.message)
        }
    }
}

export const addType=()=>{
    return async function(dispatch){
        try {
            const {data}=await axios('/type')
            if(data) dispatch({type:ADD_TYPE,payload:data})
        } catch (error) {
            console.log(error)
        }
    }
}
    export const addTypeData=()=>{
        return async function(dispatch){
            try {
                const {data}=await axios('/type/data')
                if(data) dispatch({type:ADD_TYPE_DATA,payload:data})
            } catch (error) {
                console.log(error)
            }
        }
    }

export const filterCards=(tipo)=>{
    return{
        type:FILTER_CARDS,
        payload:tipo
    }
}

export const filterOrder=(order)=>{
    return{
        type:FILTER_ORDER,
        payload:order
    }
}

export const filterOrderAttack=(order)=>{
    return{
        type:FILTER_ORDER_ATTACK,
        payload:order
    }
}

export const numPage=(number)=>{
    return{
        type:NUMPAGE,
        payload:number
    }
}
