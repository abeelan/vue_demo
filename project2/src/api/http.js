import axios from 'axios'

var instance = axios.create({
    // 配置了公共请求头信息
    headers: {
        'Content-Type': 'application/json'
    },
    // 公共地址，存放了 http 协议，域名、端口等信息
    baseURL: 'http://127.0.0.1:5000/'
})

export default instance