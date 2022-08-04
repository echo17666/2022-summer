
import service from '@/http/request.js'
//之后接口啥的就写这里就好了
const url={
    showProject:'/team/showproject',
    addProject:'/team/addproject'
}
export class Project{

    static async ShowProject(data){
        return service(url.showProject, {
            method: 'get',
            headers: {
                'Content-Type': 'multipart/form-data'
            },
            responseType: 'json',
            data:data,
        })
    };
    static async AddProject(data){
        return service(url.addProject, {
            method: 'post',
            headers: {
                'Content-Type': 'multipart/form-data'
            },
            responseType: 'json',
            data:data,
        })
    };

}
