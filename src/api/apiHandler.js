import axiosClient from "./apiClient"

export function userRegister(data) {
    return axiosClient.post("/auth/register",data)
}

// ADD PROMISE

export async  function userLogin(data) {
    return await axiosClient.post("/auth/login",data)
    
}

export function addCart(data){
    return axiosClient.post("/cart/add", data)
    
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

export function getProducts(data){
    return axiosClient.get(`/products?page=${data.page+1}&productsPerPage=${data.rowsPerPage}&search=${data.search}`, data)
}
