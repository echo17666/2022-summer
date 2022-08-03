
import service from '@/http/request.js'
//之后接口啥的就写这里就好了
const url={
    showMember:'/team/showmembers',
    addMember:'/team/sendinvitation'
}
export class Member{
   
    static async ShowMember(data){
        return service(url.showMember, {
            method: 'post',
            headers: {
                'Content-Type': 'multipart/form-data'
            },
            responseType: 'json',
            data:data,          
        })
    };
    static async AddMember(data){
        return service(url.addMember, {
            method: 'post',
            headers: {
                'Content-Type': 'multipart/form-data'
            },
            responseType: 'json',
            data:data,          
        })
    };
   
}