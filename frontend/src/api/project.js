
import service from '@/http/request.js'
//之后接口啥的就写这里就好了
const url={
    showProject:'/project/userproject',
    addProject:'/project/createproject',
    showrubbishProject:'/project/rubbishproject',
    finishProject:'/project/finishproject',
    deleteProject:'/api/project/deleteproject',
}
export class Project{

    static async ShowProject(data){
        return service(url.showProject, {
            method: 'post',
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
    static async ShowRubbish(data){
        return service(url.showrubbishProject, {
            method: 'post',
            headers: {
                'Content-Type': 'multipart/form-data'
            },
            responseType: 'json',
            data:data,
        })
    };
    static async finishProject(data){
        return service(url.finishProject, {
            method: 'post',
            headers: {
                'Content-Type': 'multipart/form-data'
            },
            responseType: 'json',
            data:data,
        })
    };
    static async deleteProject(data){
        return service(url.deleteProject, {
            method: 'post',
            headers: {
                'Content-Type': 'multipart/form-data'
            },
            responseType: 'json',
            data:data,
        })
    };
}
