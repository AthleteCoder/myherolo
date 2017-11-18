import axios from 'axios';
import { startFetching, fetchedBooks, fetchError} from './booksActions';

export function fetchBooks(){
    return dispatch => {
        dispatch(startFetching());
        axios.get('http://localhost:8000/books')
            .then(data =>{
                dispatch(fetchedBooks(data.data));
            })
            .catch(err => dispatch(fetchError("Something went wrong with server and could not fetch books!")));
    }
}