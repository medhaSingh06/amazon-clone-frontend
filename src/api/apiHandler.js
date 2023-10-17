import axiosClient from "./apiClient"

const config = {
    headers: {
        Authorization: localStorage.getItem('Atoken'),
        'accept-language': 'en',
    },
}
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
    
    return axiosClient.post("/cart/add", data, config)
    
}

export function removeFromCart(ProductId) {
   
    return axiosClient.delete("/cart/remove", {data: {ProductId}}, config)
}

export function getCart(){
    
    return axiosClient.get("/cart", config)
}

export function updateCart(data){
    return axiosClient.patch("/cart/update", data, config)
}

export function removeAllCart(){
    return axiosClient.delete("/cart/removeAll", config)
}

export function getOrder(){
    return axiosClient.get("/orders/history", config)
}