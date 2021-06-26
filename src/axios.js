import axios from 'axios';

const instance = axios.create({
    //THE API (cloud function) URL
    baseURL: 'https://us-central1-clone-8de1f.cloudfunctions.net/api'
     // http://localhost:5001/clone-8de1f/us-central1/api
});

export default instance;

