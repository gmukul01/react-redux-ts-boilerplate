import axios from 'axios';

interface AxiosObject {
    url: string;
    headers?: object;
    method: string;
    data?: any;
}

export interface AxiosReturn {
    response: {
        status: number;
        data: any;
        headers: any;
    };
    error: {
        status: number;
        data: string;
    };
}
export default async function fetch(obj: object) {
    try {
        const response = await axios(obj);
        return { response: { ...(response || { status: '', data: '', headers: '' }) } };
    } catch (error) {
        return { error: { ...(error.response || { status: '', data: error }) } };
    }
}
