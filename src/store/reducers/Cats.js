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

        default:
            return state;


        //////////////////////////// GET CAT ////////////////////////////////


        //////////////////////////// UPDATE CAT ////////////////////////////////


    }

}

export default cats;


