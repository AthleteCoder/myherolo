import axios from 'axios';
import { startFetching, fetchedBooks} from './booksActions';

export function fetchBooks(){
    return dispatch => {
        dispatch(startFetching());
        axios.get('http://localhost:8000/books')
            .then(data =>{
                dispatch(fetchedBooks(data.data));
            });
    }
}