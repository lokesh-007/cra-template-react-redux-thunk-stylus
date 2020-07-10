import axios from 'axios';

class AxiosWrapper {
    constructor() {
        this.baseURL = process.env.REACT_APP_BACKEND_ORIGIN;
        this.responseType = "json";
        this.requestHeaders = {};

        this.setAxiosDefaults();
    }

    setAxiosDefaults() {
        axios.defaults.baseURL = this.baseURL;
        axios.defaults.headers.common = {
            ...axios.defaults.headers.common,
            ...this.requestHeaders,
        };
    }

    updateHeader(headerName, value) {
        this.requestHeaders = {
            ...this.requestHeaders,
            [headerName]: value,
        };

        this.setAxiosDefaults();
    }

    removeHeader(headerName) {
        delete this.requestHeaders[headerName];

        this.setAxiosDefaults();
    }

    get(urlToHit) {
        return axios.get(urlToHit);
    }

    post(urlToHit, payload) {
        return axios.post(urlToHit, payload);
    }

    delete(urlToHit) {
        return axios.delete(urlToHit);
    }
}

// Will be a singelton
const axiosWrapper = new AxiosWrapper();

export default axiosWrapper;