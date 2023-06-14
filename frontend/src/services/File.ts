import axios from 'axios';


async function Upload(files:FileList){
    let formdata = new FormData();

    for(let i = 0; i < files.length; i++){
        formdata.append('images', files[i]);
    }

    return await axios.post('http://localhost:8080/file/new', formdata).then(res=>{return {status: res.status, data: res.data}}).catch(err=>{return {status: err.response.status, data: err.response.data}});
}


export { Upload };