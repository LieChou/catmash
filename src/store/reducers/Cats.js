import * as types from '../action/types/Cats';


const cats = (state = {
    loading: false,
    error: false,
    cats: null,
    cat: null,
    catSelected: null
}, action) => {

    switch (action.type) {


        //////////////////////////// GET ALL CATS ////////////////////////////////

        case types.GET_ALL_CATS_REQUESTED:
            return {
                ...state,
                loading: true,
                error: false
            };

        case types.GET_ALL_CATS_ERROR:
            return {
                ...state,
                loading: false,
                error: true
            };

        case types.GET_ALL_CATS_SUCCESS:
            return {
                ...state,
                loading: false,
                error: false,
                cats: action.cats
            };



        //////////////////////////// UPDATE CAT ////////////////////////////////

        case types.UPDATE_CAT_REQUESTED:
            return {
                ...state,
                loading: true,
                error: false
            };

        case types.UPDATE_CAT_ERROR:
            return {
                ...state,
                loading: false,
                error: true
            };

        case types.UPDATE_CAT_SUCCESS:
            let newCats = [...state.cats].map((cat) => (cat.imageUrl === action.cat.imageUrl ? action.cat.points && action.cat.gameNumber : cat));
            return {
                ...state,
                loading: false,
                error: false,
                cats: newCats
            }


        default:
            return state

    }

}

export default cats;


