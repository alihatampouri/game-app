import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '45efcf0e730649119a026a52d68f1053'
    }
})