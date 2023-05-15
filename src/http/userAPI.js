import {$authHost, $host} from "./index";
import jwt_decode from "jwt-decode";

export const registration = async (login, password) => {
    const response = await fetch(`http://localhost:5000/auth/registration`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({login, password})
    });
    const data = await response.json();
    localStorage.setItem('token', data.token)
    return jwt_decode(data.token)
}

// export const login = async (email, password) => {
// //     const {data} = await $host.post('auth/login', {login, password})
// //     localStorage.setItem('token', data.token)
// //     return jwt_decode(data.token)
// // }

export const login = async (login, password) => {
    const response = await fetch(`http://localhost:5000/auth/login`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({login, password})
    });
    const data = await response.json();
    localStorage.setItem('token', data.token);
    return jwt_decode(data.token);
}

// export const test = async () => {
//     const {data} = await $host.get('products')
//     console.log(data)
//     localStorage.setItem('token', data.token)
//     return jwt_decode(data.token)
// }
export const check = async () => {
    const {data} = await $authHost.get('api/user/auth')
    localStorage.setItem('token', data.token)
    return jwt_decode(data.token)
}
