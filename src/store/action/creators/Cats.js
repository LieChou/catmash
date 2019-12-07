import * as types from '../types/Cats';
import db from '../../../config/ConfigFirebase';
import catsJson from '../../../config/cats.json';


//////////////////////////// GET ALL CATS ////////////////////////////////

const getAllCatsRequested = () => {
    return {
        type: types.GET_ALL_CATS_REQUESTED
    }
}

const getAllCatsSuccess = (cats) => {
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
                        dispatch(getAllCatsSuccess(cats))
                    })
                }
                db.collection('cats').get().then((snapshot) => {
                    let cats = [];
                    snapshot.docs.forEach(doc => {
                        let cat = doc.data();
                        cats.push(cat);
                    })
                    dispatch(getAllCatsSuccess(cats))
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

const updateCatSuccess = (cat) => {
    return {
        type: types.UPDATE_CAT_SUCCESS,
        cat: cat
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
        //get the id of the document in firebase
        db.collection('cats').where('imageUrl', '==', data.imageUrl)
            .get()
            .then((query) => {
                const cat = query.docs[0];
                console.log(cat);
                const catId = cat.id;
                console.log(catId);
                let gameNumber = data.gameNumber + 1;
                let points = data.points;
                let imageUrl = data.imageUrl
                db.collection('cats').doc(catId).update({
                    gameNumber: gameNumber,
                    points: points,
                    imageUrl: imageUrl,
                })
                let newCat = { gameNumber, imageUrl, points }
                dispatch(updateCatSuccess(newCat))
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
