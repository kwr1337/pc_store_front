import {$authHost, $host} from "./index";
import jwt_decode from "jwt-decode";


export const createType = async (type) => {
    const response = await fetch(`http://localhost:5000/types`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
            // 'Authorization': 'Bearer ' + localStorage.getItem('token')
        },
        body: JSON.stringify(type)
    });
    const data = await response.json();
    return data;
}

export const fetchTypes = async () => {
    const {data} = await $host.get('types')
    return data
}

export const createBrand = async (brand) => {
    const {data} = await $authHost.post('api/brand', brand)
    return data
}

export const fetchBrands = async () => {
    const {data} = await $host.get('api/brand', )
    return data
}

export const createDevice = async (params) => {

    const response = await fetch(`http://localhost:5000/products`, {
        method: 'POST',
        headers: {
            'Authorization': 'Bearer ' + localStorage.getItem('token')
        },
        body: params
    });
    const data = await response.json();
    return data;
}

export const editDevice = async (params) => {

    const response = await fetch(`http://localhost:5000/edit-product`, {
        method: 'POST',
        headers: {
            'Authorization': 'Bearer ' + localStorage.getItem('token')
        },
        body: params
    });
    const data = await response.json();
    return data;
}

export const createCharacteristics = async (prod,name,value) => {
    var prod_id =  Number(prod)

    const response = await fetch(`http://localhost:5000/characteristics`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem('token')
        },
        body: JSON.stringify({prod_id,name,value})
    });
    const data = await response.json();
    return data;
}


export const fetchDevices = async () => {
    const {data} = await $host.get('products')
    return data
}

export const fetchDevicesByTypes = async (id) => {
    const {data} = await $host.get('products/'+id)
    return data
}

export const fetchOneDevice = async (id) => {
    const {data} = await $host.get('products/id/' + id)
    return data
}

export const getCart = async () => {
    const {data} = await $host.get('carts/'+ localStorage.getItem("login"))
    return data
}

export const createCart = async (prod_id,quantity) => {
    const response = await fetch(`http://localhost:5000/carts`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({quantity: quantity,user_login: localStorage.getItem("login"),prod_id:prod_id})
    });
    const data = await response.json();
    return jwt_decode(data);
}

export const createOrder = async (cart_id,status,price) => {
    const response = await fetch(`http://localhost:5000/orders`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({cart_id,status,price})
    });
    const data = await response.json();
    return data;
}

export const removeDevice = async (id) => {
    const {data} = await $host.delete('products/id/'+id)
    return data
}

export const removeDeviceFromBasket = async (id) => {
    const {data} = await $host.delete('carts/id/'+id)
    return data
}

export const fetchOrders = async () => {
    const response = await fetch(`http://localhost:5000/orders`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({user_login:localStorage.getItem("login")})
    });
    const data = await response.json();
    return data;
}

