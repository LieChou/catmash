import * as types from '../types/Cats';
import db from '../../../config/ConfigFirebase';
import catsJson from '../../../config/cats.json';


//////////////////////////// GET ALL CATS ////////////////////////////////

const getAllCatsRequested = () => {
    return {
        type: types.GET_ALL_CATS_REQUESTED
    }
}

const getAllCatsSucces = (cats) => {
    return {
        type: types.GET_ALL_CATS_SUCCESS,
        cats: cats
    }
}

const getAllCatsError = () => {
    return {
        type: types.GET_ALL_CATS_ERROR
    }
}


const getAllCats = () => {

    return dispatch => {
        dispatch(getAllCatsRequested());
        db.collection('cats').get()
            .then((cats) => {
                if (cats.size === 0) {
                    (catsJson['images']).forEach((cat) => {
                        console.log(cat['id']);
                        db.collection('cats').doc(cat['id']).set({
                            imageUrl: cat['url'],
                            gameNumber: 0,
                            points: 0,
                        })
                    })
                    db.collection('cats').get().then((snapshot) => {
                        let cats = [];
                        snapshot.docs.forEach(doc => {
                            let cat = doc.data();
                            cats.push(cat);
                        })
                        dispatch(getAllCatsSucces(cats))
                    })
                }
                db.collection('cats').get().then((snapshot) => {
                    let cats = [];
                    snapshot.docs.forEach(doc => {
                        let cat = doc.data();
                        cats.push(cat);
                    })
                    dispatch(getAllCatsSucces(cats))
                })
            })
            .catch((error) => {
                console.log(error);
                dispatch(getAllCatsError())
            })
    }

}


export const getCats = () => (dispatch) => {
    return dispatch(getAllCats())
}


//////////////////////////// UPDATE CAT /////////////////////////////

const updateCatRequested = () => {
    return {
        type: types.UPDATE_CAT_REQUESTED
    }
}

const updateCatSuccess = (cats) => {
    return {
        type: types.UPDATE_CAT_SUCCESS,
        cats: cats
    }
}

const updateCatError = () => {
    return {
        type: types.UPDATE_CAT_ERROR
    }
}


const updateCatFighting = (data) => {
    return dispatch => {
        dispatch(updateCatRequested());
        db.collection('cats').get()
            .then(querySnapshot => {
                querySnapshot.docs.map(doc => {
                    if (doc.imageUrl === data.imageUrl) {
                        doc.update({
                            gameNumber: data.gameNumber,
                            points: data.points
                        })
                        dispatch(updateCatSuccess())
                    }
                })
            })
            .catch((error) => {
                console.log(error);
                dispatch(updateCatError())
            })
    }
}


export const updateCat = (data) => (dispatch) => {
    return dispatch(updateCatFighting(data))
}
