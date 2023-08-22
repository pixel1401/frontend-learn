import axios from 'axios';
import { response } from 'express';
import { mapArrayNumberToString } from './mapNumber';

export const getData = async () => {
    try {
        const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
        const newArr = res.data.map((elem : any) => elem.id);
        return mapArrayNumberToString(newArr);
    } catch (error) {
        return null;
    }
};

export const delay = (callback : Function, ms : number) => new Promise((resolve) => {
    setTimeout(() => {
        resolve(callback());
    }, ms);
});

export async function getFetch() {
    try {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts');
        const response = await res.json();
        const newArr = response.map((elem : any) => elem.id);
        return mapArrayNumberToString(newArr);
    } catch (error) {
        return [];
    }
}
