import axios from 'axios';

export const fetchCategories = async () => {
    try {
        const mafundi = await axios.get('http://localhost:4500/api/v1/categories');
        return mafundi;
    } catch (e) {
        console.log('Hapa', e.message)
    }
};