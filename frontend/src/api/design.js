
import service from '@/http/request.js'
//之后接口啥的就写这里就好了
const url={
    allDesign:'/design/alldesign'
}

export class Design{
    static async AllDesign(data){
        return service(url.allDesign, {
            method: 'post',
            headers: {
                'Content-Type': 'multipart/form-data'
            },
            responseType: 'json',
            data: data
        })
    };
    
}