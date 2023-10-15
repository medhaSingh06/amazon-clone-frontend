import axiosClient from "./apiClient"

export function userRegister(data) {
    return axiosClient.post("/auth/register",data)
}

// ADD PROMISE

export async  function userLogin(data) {
    return await axiosClient.post("/auth/login",data)
    
}

export function getProducts(data){
    return axiosClient.get(`/products?page=${data.page+1}&productsPerPage=${data.rowsPerPage}&search=${data.search}`, data)
}

export function getProduct(data){
    return axiosClient.get(`/products/${data.id}`, data)
}

export function addCart(data){
    const config ={
        headers: {
            Authorization: localStorage.getItem('Atoken'),
            'accept-language': 'en',
        }
    }
    return axiosClient.post("/cart/add", data, config)
    
}
export function getCart(){
    const config = {
        headers: {
            Authorization: localStorage.getItem('Atoken'),
            'accept-language': 'en',
        },
    }
    return axiosClient.get("/cart", config)
}

