export const NEW_BOOK = '[Book] New Book';
export const DELETE_BOOK = '[Book] Delete Book';
export const EDIT_BOOK = '[Book] Edit Book';
export const FETCHING = '[Fetch] Fetching Books';
export const FETCHED = '[Fetch] Success';
export const FETCH_ERROR = '[Fetch] Error';
export const SHOW_EDIT_MODAL = '[Modal] Edit Open';
export const CLOSE_EDIT_MODAL = '[Modal] Edit Close'
export const SHOW_DELETE_MODAL = '[Modal] Delete Open';
export const CLOSE_DELETE_MODAL = '[Modal] Delete Close';
export const SHOW_ADD_MODAL = '[Modal] Add Open';
export const CLOSE_ADD_MODAL = '[Modal] Add Close';

export function startFetching(){
    return {
        type: FETCHING
    }
}

export function fetchedBooks(books){
    return {
        type: FETCHED,
        payload: books
    }
}

export function closeEditModal(){
    return {
        type: CLOSE_EDIT_MODAL
    }
}

export function showEditModal(Book){
    return {
        type: SHOW_EDIT_MODAL,
        payload: Book
    }
}

export function deleteBook(){
    return {
        type: DELETE_BOOK
    }
}

export function showDeleteModal(index){
    return {
        type: SHOW_DELETE_MODAL,
        payload: index
    }
}

export function closeDeleteModal(){
    return {
        type: CLOSE_DELETE_MODAL
    }
}

export function showAddModal(){
    return {
        type: SHOW_ADD_MODAL
    }
}

export function closeAddModal(){
    return {
        type: CLOSE_ADD_MODAL
    }
}

export function addNewBook(Book){
    return {
        type: NEW_BOOK,
        payload: Book
    }
}

export function editBook(Book){
    return {
        type: EDIT_BOOK,
        payload: Book
    }
}

export function fetchError(err){
    return {
        type: FETCH_ERROR,
        payload: err
    }
}