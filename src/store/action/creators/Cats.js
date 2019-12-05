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

