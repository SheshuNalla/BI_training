import axios from "axios";

interface ApiEnvelope<T> {
    success : boolean;
    data: T;
    error: string | null;
}

const axiosInstance = axios.create({
    baseURL:
    import.meta.env.VITE_API_BASE_URL || "http://localhost:3000",
    timeout: 10000,
    headers: {
        "Content-Type": "application/json,"
    },
});

axiosInstance.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem("accessToken");

        if(token){
            config.headers.Authorization = `Bearer ${token}`;
        }

        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);


axiosInstance.interceptors.response.use(
    (response) => {
        const body = response.data as ApiEnvelope<unknown>;

        if(
            body && typeof body === "object" && "success" in body && "data" in body && "error" in body
        ){
            if(!body.success){
                return Promise.reject(new Error(body.error || "Something went wrong"));
            }

            response.data = body.data
        }
        return response;
    },
    (error) => {
        if(error.response?.status === 401){
            console.error("Unauthorised! Please Login.")
        }
        return Promise.reject(error);
    }
);

export default axiosInstance;