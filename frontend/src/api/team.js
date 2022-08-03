import service from '@/http/request.js'
//之后接口啥的就写这里就好了
const url={
    showTeam:'/team/showteams',
    createTeam:'/team/createteams',
    updateTeam:'/team/updateteam'
}

export class Team{
    static async showTeam(data){
        return service(url.showTeam, {
            method: 'get',
            headers: {
                'Content-Type': 'multipart/form-data'
            },
            responseType: 'json',
            data:data
        })
    };
    static async createTeam(data){
        return service(url.createTeam, {
            method: 'post',
            headers: {
                'Content-Type': 'multipart/form-data'
            },
            responseType: 'json',
            data:data,
            
        })
    };
    static async updateTeam(data){
        return service(url.updateTeam, {
            method: 'post',
            headers: {
                'Content-Type': 'multipart/form-data'
            },
            responseType: 'json',
            data:data,
            
        })
    };
   
}