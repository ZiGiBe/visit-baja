import axios from 'axios';
import { jwt } from '../components/Admin/stores';
import { get } from 'svelte/store';
async function Upload(files:FileList){
    let formdata = new FormData();

    for(let i = 0; i < files.length; i++){
        formdata.append('images', files[i]);
    }

    return await axios.post('http://localhost:8080/file/new', formdata, {
        headers:{
            Authorization: `JWT ${await get(jwt)}`
        }
    }).then(res=>{return {status: res.status, data: res.data}}).catch(err=>{return {status: err.response.status, data: err.response.data}});
}

async function Delete(name){
    return await axios.delete('http://localhost:8080/file/delete', {
        headers: {
            Authorization: `JWT ${await get(jwt)}`
        },
        params: {
            filename: name
        }
    }).then(res=>res.data).catch(err=>err.response)
}
export { Upload, Delete };