import axios from 'axios';


async function Upload(files:FileList){
    let formdata = new FormData();

    for(let i = 0; i < files.length; i++){
        formdata.append('images', files[i]);
    }

    axios.post('http://localhost:8080/file/new', formdata).then(res=>console.log(res)).catch(err=>console.log(err));
}


export { Upload };