import axios from 'axios';

export default async function fetch(obj: object) {
    try {
        const response = await axios(obj);
        return { response: response.data };
    } catch (error) {
        return { error: error.response ? error.response.data : error };
    }
}
