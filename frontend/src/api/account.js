import service from '@/http/request.js'
//之后接口啥的就写这里就好了
const url={
    login:'/user/login',
    register:'/user/register',
    saveprototype:'/design/savedesign',
    getprototype:'/design/getdesign'
}

export class Account{
    static async Login(data){
        return service(url.login, {
            method: 'post',
            headers: {
                'Content-Type': 'multipart/form-data'
            },
            responseType: 'json',
            data: data
        }, {
            auth: {
                username: data.get('username'),
                password: data.get('password')
            }
        })
    };
    static async Register(data){
        return service(url.register, {
            method: 'post',
            headers: {
                'Content-Type': 'multipart/form-data'
            },
            responseType: 'json',
            data: data
        }, {
            auth: {
                username: data.get('username'),
                password: data.get('password'),
                realname: data.get('realname'),
                email: data.get('email')
            }
        })
    };
    static async saveProtype(data){
        return service(url.saveprototype, {
            method: 'post',
            headers: {
                'Content-Type': 'multipart/form-data'
            },
            responseType: 'json',
            data: data
        }, {
            auth: {
                list: data.get('list'),
                design_a: data.get('design_a'),
                design_b: data.get('design_b'),
                design_x: data.get('design_x'),
                design_y: data.get('design_y'),
                design_id: data.get('design_id')
            }
        })
    };
    static async getProtype(data){
        return service(url.getprototype, {
            method: 'post',
            headers: {
                'Content-Type': 'multipart/form-data'
            },
            responseType: 'json',
            data: data
        }, {
            auth: {
                design_id: data.get('design_id'),
            }
        })
    };
}