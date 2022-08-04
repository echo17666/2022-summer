
import service from '@/http/request.js'
//之后接口啥的就写这里就好了
const url={
    createdocument:'/document/createdocument',
    projectdocument:'/document/projectdocument',
    updatedocument:'/document/updatedocument',
    deletedocument:'/document/deletedocument',
    getcontent:'/document/documentcontent'
}
export class document{
   
    static async createdocument(data){
        return service(url.createdocument, {
            method: 'post',
            headers: {
                'Content-Type': 'multipart/form-data'
            },
            responseType: 'json',
            data:data,          
        })
    };
    static async projectdocument(data){
        return service(url.projectdocument, {
            method: 'post',
            headers: {
                'Content-Type': 'multipart/form-data'
            },
            responseType: 'json',
            data:data,          
        })
    };
    static async updatedocument(data){
        return service(url.updatedocument, {
            method: 'post',
            headers: {
                'Content-Type': 'multipart/form-data'
            },
            responseType: 'json',
            data:data,          
        })
    };
    static async deletedocument(data){
        return service(url.deletedocument, {
            method: 'post',
            headers: {
                'Content-Type': 'multipart/form-data'
            },
            responseType: 'json',
            data:data,          
        })
    };
    static async getContent(data){
        return service(url.getcontent, {
            method: 'post',
            headers: {
                'Content-Type': 'multipart/form-data'
            },
            responseType: 'json',
            data:data,          
        })
    };
   
}