import axios from 'axios';

export const fetchCategories = async () => {
    try {
        const categories = await axios.get('http://localhost:4500/api/v1/categories');
        return categories;
    } catch (e) {
        console.log('Error', e.message)
    }
};

export const postUser = async (data) => {
    try {
        const user = await axios.post('http://localhost:4500/api/v1/users',data);
        return user;
    } catch (e) {
        console.log('Error', e.message)
    }
};