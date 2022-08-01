import Vue from 'vue'
import axios from 'axios'
import router from '../router'

const service = axios.create({
    baseURL: 'http://43.138.56.245',//本地
    // baseURL:'', 这里之后是部署的后端地址
    timeout: 50000 //超时时间
});
export default service;