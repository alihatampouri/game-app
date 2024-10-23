import axios, { AxiosRequestConfig } from "axios";

export interface FetchResponse<T> {
    count: number;
    results: T[];
}

const axiosInstance = axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: "45efcf0e730649119a026a52d68f1053",
    },
});

class APIClient<T> {
    endpoint: string;

    constructor(endpoint: string) {
        this.endpoint = endpoint;
    }

    getAll = (config: AxiosRequestConfig) =>
        axiosInstance
            .get<FetchResponse<T>>(this.endpoint, config)
            .then((res) => res.data);
}

export default APIClient;
