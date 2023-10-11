import axios from 'axios';
import { jwt } from '../components/Admin/stores';
import { get } from 'svelte/store';
export const BackendUrl = "http://185.75.194.239:8080/"
let backendUrl = BackendUrl + 'api/';

interface ExecAnswer {
    "fieldCount": number;
    "affectedRows": number;
    "insertId": number;
    "warningCount": number;
    "message": string;
}

async function tokenGetter() {
    return await get(jwt);
}

let db = {
    Get: (model: string, id?: number) => {
        return id ? axios.get(backendUrl + model, {
            params: { id: id }
        }).then(res => res.data).catch(err => err) :
            axios.get(backendUrl + model).then(res => res.data).catch(err => err);
    },
    GetFieldValue: (model: string, field: string, value: string | number, operator: string = "eq", modelId?) => {
        return axios.get(backendUrl + model, {
            params: {
                field: field,
                value: value,
                operator: operator,
                modelId: modelId
            }
        }).then(res => res.data).catch(err => err);
    },
    Patch: async (model: string, id: number, patchData: any) => {
        return axios.patch(backendUrl + model, patchData, {
            params: { id: id },
            headers: {
                Authorization: `JWT ${await tokenGetter()}`
            },
        }).then(res => res.data as ExecAnswer).catch(err => err);
    },
    Post: async (model: string, postData: any) => {
        return axios.post(backendUrl + model, postData, {
            headers: {
                Authorization: `JWT ${await tokenGetter()}`
            }
        }).then(res => res.data as ExecAnswer).catch(err => err);
    },
    Delete: async (model: string, id: number) => {
        return axios.delete(backendUrl + model, {
            params: { id: id },
            headers: {
                Authorization: `JWT ${await tokenGetter()}`
            }
        }).then(res => res.data as ExecAnswer).catch(err => err);
    },
    Login: (userdata: { username: string, password: string }) => {
        return axios.post(BackendUrl + 'admin/login', userdata).then(res => res.data).catch(err => err.response);
    },
    Logout: async () => {
        return axios.post(BackendUrl + 'admin/logout', {}, {
            headers: {
                Authorization: `JWT ${await tokenGetter()}`
            }
        }).then(res => res.data).catch(err => err.response);
    }
}

export default db;