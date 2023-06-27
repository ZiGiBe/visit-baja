import axios from "axios";
import { get } from "svelte/store";
import { jwt } from "../components/Admin/stores";
let backendUrl = 'http://localhost:8080/editor/'

export async function GetLatestVersion(){
    return await axios.get(backendUrl+'latest').then(res=>res.data).catch(err=>err.response.data);
}
export async function SaveLatest(editorData) {
    return await axios.post(backendUrl+'save', {
        editorjsoutput: editorData
    }, {
        headers: {
            Authorization: `JWT ${await get(jwt)}`
        }
    }).then(res=>res.data).catch(err=>err.response.data);
}