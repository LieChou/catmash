import * as axios from 'axios';

const apiFirebase = axios.create({
    baseURL: "https://catmash-b5fcf.firebaseio.com",
});

export default apiFirebase;