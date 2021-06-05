import axios from 'axios'

export const key = '9bdfe01ed84f9295c8973cc1ebe9a2bec1031fed'

const api = axios.create({
    baseURL: 'https://api-ssl.bitly.com/v4/',
    headers: {
        'Content-Type':'application/json',
        'Authorization':`Bearer ${key}`
    }
})

export default api;