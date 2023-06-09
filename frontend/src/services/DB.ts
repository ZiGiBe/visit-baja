import axios from 'axios';
let backendUrl = 'http://localhost:8080/api/';

interface ExecAnswer{
    "fieldCount": number;
    "affectedRows": number;
    "insertId": number;
    "warningCount": number;
    "message": string;
}

let db = {
    Get: (model:string, id?:number)=>{
        return id? axios.get(backendUrl+model, {
            params: {id: id}
        }).then(res=>res.data).catch(err=>err) : 
        axios.get(backendUrl+model).then(res=>res.data).catch(err=>err);
    },
    Patch: (model:string, id:number, patchData:any)=>{
        return axios.patch(backendUrl+model, patchData, {params:{id:id}}).then(res=>res.data as ExecAnswer).catch(err=>err);
    },
    Post: (model:string, postData:any)=>{
        return axios.post(backendUrl+model, postData).then(res=>res.data as ExecAnswer).catch(err=>err);
    },
    Delete: (model:string, id:number)=>{
        return axios.delete(backendUrl+model, {params:{id:id}}).then(res=>res.data as ExecAnswer).catch(err=>err);
    },
    Login: (userdata: {username:string, password:string})=>{
        return axios.post(backendUrl+'login');
    }
}

export default db;