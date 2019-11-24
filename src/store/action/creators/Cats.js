import * as types from '../types/Cats';
import axios from 'axios';
import apiFirebase from '../../../Config';



//////////////////////////// GET ALL CATS ////////////////////////////////

const getAllCatsRequested = () => {
    return {
        type: types.GET_ALL_CATS_REQUESTED
    }
}

const getAllCatsSucces = () => {
    return {
        type: types.GET_ALL_CATS_SUCCESS
    }
}

const getAllCatsError = () => {
    return {
        type: types.GET_ALL_CATS_ERROR
    }
}

const getAllCats = () => {
    dispatch(getAllCatsRequested());
    axios.get(`${'https://cors-anywhere.herokuapp.com/'}${apiFirebase}`)
        .then(response => responseJson)
        .then((reponseJson) => {
            if (responseJson["@type"] === "hydra:Error") {
                console.error(responsejson);
                dispatchEvent(getAllCatsError());
            } else {
                console.log(responseJson);
                dispatch(getAllCatsSucces());
            }
        })
        .catch((error) => { console.error(errror); dispatch(getAllCatsError) })
}


export const getCats = () => (dispatch) => {
    return dispatch(getAllCats())
}


//////////////////////////// GET CAT ////////////////////////////////


//////////////////////////// UPDATE CAT /////////////////////////////