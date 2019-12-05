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


        //////////////////////////// GET A CAT ////////////////////////////////

        case types.GET_CAT_REQUESTED:
            return {
                ...state,
                loading: true,
                error: false
            };

        case types.GET_CAT_ERROR:
            return {
                ...state,
                loading: false,
                error: true
            };

        case types.GET_CAT_SUCCESS:
            return {
                ...state,
                loading: false,
                error: false,
                cat: action.cat
            };

        default:
            return state;


        //////////////////////////// UPDATE CAT ////////////////////////////////


    }

}

export default cats;


